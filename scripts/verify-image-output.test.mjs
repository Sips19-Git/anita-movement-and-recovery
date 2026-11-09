import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { verifyImageOutput, verifyImageOutputPlugin } from './verify-image-output.mjs';
import { build } from 'vite';

test('production check accepts original bytes and rejects missing or changed images', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'image-output-'));
  const output = path.join(root, 'output');
  try {
    await mkdir(path.join(root, 'public/images'), { recursive: true });
    await mkdir(path.join(output, 'images'), { recursive: true });
    await writeFile(path.join(root, 'public/images/original.png'), Buffer.from([137, 80, 78, 71]));
    await assert.rejects(verifyImageOutput(root, output), { code: 'ENOENT' });
    await writeFile(path.join(output, 'images/original.png'), Buffer.from([137, 80, 78, 71]));
    await assert.doesNotReject(verifyImageOutput(root, output));
    await writeFile(path.join(output, 'images/original.png'), Buffer.from([137, 80, 78, 72]));
    await assert.rejects(verifyImageOutput(root, output), /Production image differs/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('client bundle includes original images even when public directory copying is disabled', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'image-emission-'));
  try {
    await mkdir(path.join(root, 'public/images'), { recursive: true });
    const bytes = Buffer.from([137, 80, 78, 71]);
    await writeFile(path.join(root, 'public/images/anita-portrait.png'), bytes);
    const emitted = [];
    const plugin = verifyImageOutputPlugin();
    await plugin.generateBundle.call({
      environment: { name: 'client', config: { root, build: { copyPublicDir: false } } },
      emitFile: asset => emitted.push(asset),
    });
    assert.equal(emitted.length, 1);
    assert.equal(emitted[0].fileName, 'images/anita-portrait.png');
    assert.deepEqual(emitted[0].source, bytes);
    await plugin.generateBundle.call({ environment: { name: 'ssr' }, emitFile: () => assert.fail('SSR must not emit images') });
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('Vite production output serves originals independently with public copying disabled', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'image-production-'));
  try {
    await mkdir(path.join(root, 'public/images'), { recursive: true });
    await writeFile(path.join(root, 'public/images/upload.jpg'), Buffer.from([137, 80, 78, 71]));
    await writeFile(path.join(root, 'entry.js'), 'export const image = "/images/upload.jpg";');
    await build({
      root,
      configFile: false,
      logLevel: 'silent',
      plugins: [verifyImageOutputPlugin()],
      build: {
        copyPublicDir: false,
        outDir: 'dist/client',
        rollupOptions: { input: path.join(root, 'entry.js') },
      },
    });
    await assert.doesNotReject(verifyImageOutput(root, path.join(root, 'dist/client')));
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { verifyImageOutput } from './verify-image-output.mjs';

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
import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { assertOriginalImage } from './image-integrity.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const source = path.join(root, 'src/assets');
const output = path.join(root, 'public/images');
const origin = 'https://anita-movement-and-recovery.lovable.app';
const manifest = JSON.parse(await readFile(path.join(root, 'scripts/original-images.json'), 'utf8'));

// Download originals once during setup/build, never in the deployed browser.
// Keep every pointer, including currently unused photos, available for export.
await mkdir(output, { recursive: true });
const pointers = (await readdir(source)).filter(name => name.endsWith('.asset.json'));
await Promise.all(pointers.map(async name => {
  const asset = JSON.parse(await readFile(path.join(source, name), 'utf8'));
  const filename = path.basename(asset.original_filename);
  const destination = path.join(output, filename);
  const expected = manifest[filename];
  if (!expected || expected.asset_id !== asset.asset_id) throw new Error(`Missing original image identity: ${filename}`);
  const existing = await readFile(destination).catch(() => null);
  if (existing) {
    try { assertOriginalImage(existing, expected, filename); return; } catch { /* Restore the exact original below. */ }
  }
  const response = await fetch(new URL(asset.url, origin), { signal: AbortSignal.timeout(60000) });
  if (!response.ok || !response.headers.get('content-type')?.startsWith('image/')) {
    throw new Error(`Could not retrieve original image ${filename}: ${response.status}`);
  }
  const bytes = Buffer.from(await response.arrayBuffer());
  assertOriginalImage(bytes, expected, filename);
  await writeFile(destination, bytes);
  console.log(`Preserved ${filename}: ${bytes.length} bytes`);
}));
console.log(`All ${pointers.length} original image assets are SHA-256 verified in public/images.`);
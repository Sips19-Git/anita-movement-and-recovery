import { readdir, readFile, mkdir, writeFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const source = path.join(root, 'src/assets');
const output = path.join(root, 'public/images');
const origin = 'https://anita-movement-and-recovery.lovable.app';

// Download originals once during setup/build, never in the deployed browser.
// Keep every pointer, including currently unused photos, available for export.
await mkdir(output, { recursive: true });
await Promise.all((await readdir(source)).filter(name => name.endsWith('.asset.json')).map(async name => {
  const asset = JSON.parse(await readFile(path.join(source, name), 'utf8'));
  const filename = path.basename(asset.original_filename);
  const destination = path.join(output, filename);
  const existing = await stat(destination).catch(() => null);
  if (existing?.size === asset.size) return;
  const response = await fetch(new URL(asset.url, origin));
  if (!response.ok || !response.headers.get('content-type')?.startsWith('image/')) {
    throw new Error(`Could not retrieve original image ${filename}: ${response.status}`);
  }
  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length !== asset.size) throw new Error(`Original image size mismatch: ${filename}`);
  await writeFile(destination, bytes);
  console.log(`Preserved ${filename}: ${bytes.length} bytes`);
}));
console.log('All 19 original image assets are available in public/images.');
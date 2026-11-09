import { readdir, readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';

export async function verifyImageOutput(root, output) {
  const images = await readdir(path.join(root, 'public/images'));
  if (images.length === 0) throw new Error('No local images prepared for deployment');
  for (const name of images) {
    const original = await readFile(path.join(root, 'public/images', name));
    const emitted = await readFile(path.join(output, 'images', name));
    const hash = bytes => createHash('sha256').update(bytes).digest('hex');
    if (hash(original) !== hash(emitted)) throw new Error(`Production image differs: ${name}`);
  }
  console.log(`Verified ${images.length} byte-identical local images in production output: ${output}/images`);
}

export function verifyImageOutputPlugin() {
  return {
    name: 'verify-local-image-output',
    apply: 'build',
    async writeBundle(options) {
      if (this.environment.name !== 'client' || !options.dir) return;
      await verifyImageOutput(process.cwd(), path.resolve(options.dir));
    },
  };
}
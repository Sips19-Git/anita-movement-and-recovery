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
    async generateBundle() {
      if (this.environment.name !== 'client') return;
      const source = path.join(this.environment.config.root, 'public/images');
      // Preview builds can disable Vite's public directory copying. Emit the
      // original bytes explicitly so these assets are part of every bundle.
      for (const name of await readdir(source)) {
        this.emitFile({
          type: 'asset',
          fileName: `images/${name}`,
          source: await readFile(path.join(source, name)),
        });
      }
    },
    async writeBundle(options) {
      if (this.environment.name !== 'client' || !options.dir) return;
      const root = this.environment.config.root;
      await verifyImageOutput(root, path.resolve(root, options.dir));
    },
  };
}
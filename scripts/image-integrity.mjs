import { createHash } from 'node:crypto';

export function assertOriginalImage(bytes, expected, filename) {
  const digest = createHash('sha256').update(bytes).digest('hex');
  if (bytes.length !== expected.size || digest !== expected.sha256) {
    throw new Error(`Original image integrity mismatch: ${filename}; expected the uploaded image, not a replacement`);
  }
}
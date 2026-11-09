import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { assertOriginalImage } from './image-integrity.mjs';

test('same-size substitute images cannot pass original image validation', () => {
  const original = Buffer.from([137, 80, 78, 71]);
  const expected = { size: 4, sha256: createHash('sha256').update(original).digest('hex') };
  assert.doesNotThrow(() => assertOriginalImage(original, expected, 'upload.jpg'));
  assert.throws(() => assertOriginalImage(Buffer.from([137, 80, 78, 72]), expected, 'upload.jpg'), /upload.jpg/);
});
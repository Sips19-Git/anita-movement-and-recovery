import type { Plugin } from 'vite';

export function verifyImageOutput(root: string, output: string): Promise<void>;
export function verifyImageOutputPlugin(): Plugin;
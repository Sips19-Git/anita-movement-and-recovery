// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { verifyImageOutputPlugin } from "./scripts/verify-image-output.mjs";

export default defineConfig({
  vite: { plugins: [verifyImageOutputPlugin()] },
  // Match Netlify's publish directory to the verified client image output.
  // Lovable keeps its own preview target and output configuration.
  nitro: process.env.NETLIFY === "true" || process.env.NITRO_PRESET === "netlify"
    ? { preset: "netlify", output: { publicDir: "dist/client" } }
    : undefined,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});

# Project rules

- Keep source media in Lovable asset pointers; materialize byte-identical images to `public/images` before development and production builds so external hosts serve same-origin images without Lovable infrastructure.
- Emit local images explicitly into the Vite client bundle before verifying output; preview configurations may disable automatic public-directory copying.
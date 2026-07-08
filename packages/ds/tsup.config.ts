import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  clean: true,
  external: ["react", "react-dom"],
  // tsup/esbuild only preserve a "use client" directive when it's the first
  // statement of the bundled OUTPUT file — per-module directives from
  // non-entry files (e.g. Heading.tsx) are silently dropped. Since this
  // package bundles to a single file, mark the whole bundle client-side via
  // banner rather than relying on esbuild to hoist an inner directive.
  banner: { js: '"use client";' },
});

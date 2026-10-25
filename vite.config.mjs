import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  publicDir: false,
  build: {
    outDir: "widget",
    emptyOutDir: true,
    cssCodeSplit: false,
    lib: {
      entry: path.resolve("src/boot.tsx"),
      name: "SightbridgeDemoWidget",
      formats: ["iife"],
      fileName: () => "widget.js",
    },
    rollupOptions: {
      output: { assetFileNames: "widget.[ext]" },
    },
  },
});

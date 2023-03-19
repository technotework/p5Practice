import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
export default defineConfig({
  root: "src",
  publicDir: "../public",
  build: {
    outDir: '../dist'
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
})

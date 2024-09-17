import legacy from "@vitejs/plugin-legacy";
import imagemin from "unplugin-imagemin/vite";
import commonjs from "@rollup/plugin-commonjs";
import compression from "vite-plugin-compression";
import purgecss from "vite-plugin-purgecss";
import image from "@rollup/plugin-image";
import { babel } from "@rollup/plugin-babel";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "src",
  envDir: "../",
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
  plugins: [
    legacy({
      targets: [
        "> 1%",
        "last 2 versions",
        "Firefox ESR",
        "not dead",
        "not IE 11",
      ],
      polyfills: [
        "es.symbol",
        "es.array.flat",
        "es.array.flat-map",
        "es.promise",
        "es.promise.finally",
        "es/map",
        "es/set",
        "es/array-buffer",
      ],
      modernPolyfills: true,
      renderLegacyChunks: true,
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
    compression(),
    imagemin(),
    commonjs(),
    purgecss(),
    image(),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-env"],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});

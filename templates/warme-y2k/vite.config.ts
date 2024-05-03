import { defineConfig } from 'vite';
import wasm from 'vite-plugin-wasm';

export default defineConfig({
  build: {
    target: "esnext"
  },
  esbuild: {
    supported: {
      'top-level-await': true
    },
  },
  optimizeDeps:{
    esbuildOptions: {
      target: "esnext",
    }
  },
  plugins: [wasm()],
});
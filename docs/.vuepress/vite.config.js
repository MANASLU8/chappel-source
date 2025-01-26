import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "@/styles/index.sass";`,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
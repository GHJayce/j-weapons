import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  root: './',
  resolve: {
    alias: {
      // @ts-ignore
      '@': fileURLToPath(new URL('../src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'JW',
      formats: ['umd', 'es'],
      fileName: 'j-weapons'
    },
    target: 'modules',
    outDir: 'dist/'
  }
})

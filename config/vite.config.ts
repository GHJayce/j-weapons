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
    modulePreload: {
      polyfill: false
    },
    lib: {
      entry: 'src/j-weapons.ts',
      name: 'JW',
      formats: ['umd'],
      fileName: (format, entryName: string): string => {
        if (format === 'umd') {
          return 'j-weapons.umd.min.js'
        }
        return 'j-weapons.js'
      }
    },
    target: 'modules',
    outDir: 'dist/'
  }
})

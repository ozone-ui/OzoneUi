/// <reference types="vitest" />

import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import typescript from 'rollup-plugin-typescript2';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),typescript(/*{ plugin options }*/)],
  
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
  build: {
    // cssCodeSplit: true,
    // sourcemap: true,

    lib: {
      // formats: ['umd', 'es', 'cjs'],
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, './src/lib/main.js'),
      name: 'Lib',
      fileName: (format) => `lib.${format}.js`,

    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],

      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }


})

/// <reference types="vitest" />

import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import dts from "vite-plugin-dts";

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import rollupTs from 'rollup-plugin-typescript2';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(),  dts({ insertTypesEntry: true }),
    // only for type checking
    {
        ...rollupTs({
            check: true,
            tsconfig: './tsconfig.json',
            tsconfigOverride: {
                noEmits: true,
            },
        }),
        // run before build
        enforce: 'pre',
    },],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    
  },
  test: {
    globals: true,
    environment: 'jsdom',
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
  build: {
    cssCodeSplit: true,
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
      external: [
        'vue',
        'vue-class-component',
        'vue-property-decorator',
        'vuex',
        'vuex-class',
    ],

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

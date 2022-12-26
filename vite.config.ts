import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts({
    tsConfigFilePath: resolve(__dirname, './tsconfig.build.json')
  }), unocss()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib.ts'),
      formats: ['iife', 'es'],
      name: 'ReadFast'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
    minify: true
  },
  server: {
    open: 'playground/index.html'
  }
})

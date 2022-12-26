import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'playground',
  plugins: [
    vue(),
    dts({
      tsConfigFilePath: resolve(__dirname, './tsconfig.build.json'),
    }),
    unocss(),
  ],
  server: {
    open: '/playground',
  },
})

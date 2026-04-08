import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: './index.html',
        dashboard: './system/dashboard/index.html',
        quotation: './system/quotation/index.html'
      }
    }
  },
})
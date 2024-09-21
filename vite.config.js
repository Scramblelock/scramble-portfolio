import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  server: {
    proxy: {
      '/api': 'https://portfolio-api-beta.vercel.app',
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Directory for static assets
    rollupOptions: {
      input: './index.html', // Ensure correct entry point
    },
    base: './',
  },
})

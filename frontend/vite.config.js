import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    host: true,
    proxy: {
      '/api': {
        target: process.env.DOCKER_BACKEND_URL || 'http://localhost:5001',
        changeOrigin: true,
        secure: false
      }
    }
  },
  preview: {
    allowedHosts: ['lms-sankalp-frontend-docker.onrender.com']
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
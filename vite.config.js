import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The dev server must accept requests proxied through the Arena preview host.
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: true,
  },
  preview: {
    host: '0.0.0.0',
    allowedHosts: true,
  },
})

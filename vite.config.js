import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `base: './'` keeps every built asset URL relative, so the same build works at
//   • the domain root  → http://localhost:5173/  and  https://mysite.netlify.app/
//   • a sub-folder     → https://username.github.io/repo-name/
// With `base: '/'` the built files would point at /assets/… and 404 on GitHub Pages.
// The dev server must also accept requests proxied through the Arena preview host.
export default defineConfig({
  plugins: [react()],
  base: './',
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

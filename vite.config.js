import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/sre-singhal-nursing-home/',
  plugins: [react(), tailwindcss()],
})

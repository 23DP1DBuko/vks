import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // three.js в отдельном чанке (динамический импорт в Hero3D) — его размер оправдан.
    chunkSizeWarningLimit: 900,
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'copy-cname',
      generateBundle() {
        this.emitFile({
          type: 'asset',
          fileName: 'CNAME',
          source: 'whatmouse.xyz'
        });
      }
    }
  ],
  base: './',
})

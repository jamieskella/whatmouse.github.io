import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
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

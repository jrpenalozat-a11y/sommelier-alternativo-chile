import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// En GitHub Pages el sitio vive en /sommelier-alternativo-chile/.
// En Vercel (y en dev) vive en la raíz '/'.
export default defineConfig(({ command }) => ({
  base: process.env.VERCEL ? '/' : (command === 'build' ? '/sommelier-alternativo-chile/' : '/'),
  plugins: [react()],
  server: { port: 5173, open: true }
}));

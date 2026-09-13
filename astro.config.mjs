import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://opus39tjy-netizen.github.io',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
});

// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://alexaspinalldev.github.io/alexaspinall',
  base: '/alexaspinall/',
  vite: {
    plugins: [tailwindcss()]
  }
});
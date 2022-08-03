import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [// Enable React for the Algolia search component.
    react(),
    preact(),
    tailwind(),
  ],
  site: `https://mailcarrier.app`
});
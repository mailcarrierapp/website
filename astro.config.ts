import rehypeAutolinkHeadings from './integrations/rehype-autolink-headings';

import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(), // Algolia search bar
    preact(),
    tailwind(),
  ],
  site: `https://mailcarrier.app`,
  markdown: {
    rehypePlugins: [
      'rehype-slug',
      // @ts-ignore This adds links to headings
      rehypeAutolinkHeadings,
    ],
  },
});
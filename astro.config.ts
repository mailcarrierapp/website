import rehypeAutolinkHeadings from './integrations/rehype-autolink-headings';

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    react(), // Algolia search bar
    preact(),
    tailwind(),
    sitemap(),
  ],
  site: 'https://mailcarrier.app',
  markdown: {
    rehypePlugins: [
      'rehype-slug',
      // @ts-ignore This adds links to headings
      rehypeAutolinkHeadings,
    ],
  },
});
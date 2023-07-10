import { createContentLoader } from 'vitepress'
import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'node:fs';
import { resolve } from 'node:path';

export default async ({ outDir }) => {
  const sitemap = new SitemapStream({ hostname: 'https://mailcarrier.app/docs/' });
  const pages = await createContentLoader('docs/**/*.md').load();
  const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'));

  sitemap.pipe(writeStream)
  pages.forEach((page) => sitemap.write(
    page.url.replace(/index$/g, '').replace('.html', '')
  ));

  sitemap.end();

  await new Promise((r) => writeStream.on('finish', r));
};

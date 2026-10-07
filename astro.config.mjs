import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The diary is a separate Astro site (hermees repo) served under /diary, so the
// sitemap integration cannot discover its pages. List them here so the single
// generated sitemap covers them; update when a diary post is added.
const diaryPaths = [
  '',
  'decisions/',
  'experiments/',
  'failures/',
  'learning/',
  'blog/2026-09-10-the-product-direction/',
  'blog/2026-09-15-homely-was-the-wrong-name/',
  'blog/2026-09-19-screenshot-capture/',
  'blog/2026-09-21-when-i-overstepped/',
  'blog/2026-09-22-what-converts-in-home-design/',
];

export default defineConfig({
  site: 'https://buildmy.house',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      customPages: diaryPaths.map((p) => `https://buildmy.house/diary/${p}`),
      changefreq: 'weekly',
      priority: 0.8,
      serialize(item) {
        // Ensure all URLs have trailing slashes
        if (!item.url.endsWith('/')) {
          item.url = item.url + '/';
        }
        return item;
      },
    }),
  ],
  vite: {
    build: { target: 'es2022' },
  },
});

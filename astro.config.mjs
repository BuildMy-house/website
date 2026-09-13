import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://buildmy.house',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
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

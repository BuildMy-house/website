import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://buildmy.house',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: {
    build: { target: 'es2022' },
  },
});

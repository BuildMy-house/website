# Deployment

The site is static Astro output (`output: 'static'`). Redirects live in `public/_redirects`; `npm run check:redirects` (run after build) guards the retired `/diary/` -> `/blog/` 301s.

```sh
npm install
npm run build
```

Deploy the generated `dist/` output with the Cloudflare deployment workflow for your chosen runtime. Set any production values from `.env.example` in the hosting provider's environment settings.

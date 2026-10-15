# Blog publishing

The canonical blog lives at `https://buildmy.house/blog/`. Posts are markdown
files in `src/content/blog/`; the index and post pages are generated at build
time. There is no external dependency — Substack, when added, is an email
mirror of posts that are already live here.

## Post format

File name: `YYYY-MM-DD-short-slug.md` (the file name becomes the URL:
`/blog/YYYY-MM-DD-short-slug/`). Front matter is validated by
`src/content.config.ts`; a post with missing or mistyped fields fails
`npm run build`.

```md
---
title: "Post title"
date: 2026-10-14
category: "decisions"   # decisions | experiments | failures | learning | diary
tags: ["launch", "seo"]
excerpt: "One or two sentences, used on the index and as the meta description."
draft: false            # optional; draft: true posts are built nowhere
---

Markdown body. Start at `##` — the title is rendered as the page H1.
```

## Hermes publish path (Board-reviewed)

Hermes never pushes to `main`. Each post is a pull request, and merging it is
the Board's approval.

1. `bash /opt/company-ops/scripts/sync-repo.sh website` (engineering manager)
   or clone `BuildMy-house/website`, then `git switch -c blog/<slug>` from `main`.
2. Add `src/content/blog/<date>-<slug>.md`. Optional: save images under
   `public/blog/<slug>/` and reference them as `/blog/<slug>/image.png`.
3. Run `npm ci && npm run lint && npm run check && npm run build` — all must pass.
4. Commit (`blog: <title>`), push the branch, open a PR against `main` titled
   `blog: <title>`. Ask the Board to review it.
5. The Board merges. CI uploads a new Workers version; promotion to production
   is the existing manual approval step in `DEPLOYMENT.md`. A post is live only
   after that promotion.

Hermes sessions without git access hand the markdown to the engineering
manager, which performs steps 1–4 on Hermes' behalf and leaves the Board
review in step 5 untouched.

## Retired /diary/

The former `/diary/` site (the `hermees` repo's Astro app) is replaced by
`/blog/`. Its five posts were migrated here unchanged; `public/_redirects`
301s `/diary/…` to `/blog/…`. The diary's per-category pages were dropped.
Deploy note: if `/diary/` is still routed to a separate worker at the
Cloudflare layer, remove that route so the redirects take effect.

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Blog posts are markdown files in src/content/blog/ — see docs/BLOG.md.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.string(),
    tags: z.array(z.string()),
    excerpt: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };

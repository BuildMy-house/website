// Guards the retired /diary/ -> /blog/ redirect. Run after `npm run build`.
// The 301s live in public/_redirects (served by Cloudflare static assets);
// the build must not emit any /diary/ page that could shadow or contradict them.
import { existsSync, readFileSync } from 'node:fs';

const rules = readFileSync('public/_redirects', 'utf8')
  .split('\n')
  .map((l) => l.trim().split(/\s+/))
  .filter((p) => p.length === 3 && !p[0].startsWith('#'));

const expect = [
  ['/diary', '/blog/'],
  ['/diary/', '/blog/'],
  ['/diary/blog/:slug', '/blog/:slug/'],
  ['/diary/blog/:slug/', '/blog/:slug/'],
  ['/diary/*', '/blog/'],
];

const errors = [];
for (const [from, to] of expect) {
  const r = rules.find((p) => p[0] === from);
  if (!r || r[1] !== to || r[2] !== '301') errors.push(`missing rule: ${from} ${to} 301`);
}
if (existsSync('src/pages/diary')) errors.push('src/pages/diary must not exist');
if (existsSync('dist/diary')) errors.push('dist/diary exists: a built page would shadow the redirect');
if (existsSync('dist/_redirects') === false && existsSync('dist')) errors.push('dist/_redirects missing');

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log('redirect check ok');

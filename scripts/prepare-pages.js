import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { projects } from '../src/content/projects.js';

// Pages serves files rather than rewriting React routes. Each registered project
// gets an HTML entry so opening or refreshing its URL also works on Pages.
const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
for (const { slug } of projects) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw new Error('Invalid project slug');
  const directory = new URL('../dist/projects/' + slug + '/', import.meta.url);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL('index.html', directory), html);
}
// Unknown URLs show the accessible React not-found screen with HTTP 404.
await writeFile(new URL('../dist/404.html', import.meta.url), html);

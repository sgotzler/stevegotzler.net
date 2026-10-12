// Writes everything the site says, as one plain Markdown document: docs/site-content.md
// For checking the site against other documents (a CV, a faculty bio). Run: node tools/export-content.mjs
import fs from 'node:fs';
import yaml from 'js-yaml';

const load = (name) => yaml.load(fs.readFileSync(`src/data/${name}.yaml`, 'utf8')) ?? [];
const skip = new Set(['id', 'order', 'sort', 'kind', 'image', 'imageNote', 'imageAlt', 'imageFocus', 'lineArt', 'slides', 'row', 'featured', 'home', 'events', 'pairedWith']);
const val = (v) => (Array.isArray(v) ? v.join('; ') : String(v).trim().replace(/\n\s*\n/g, ' / ').replace(/\s+/g, ' '));
const entry = (e, titleKey = 'title') => {
  const head = [e[titleKey], e.subtitle].filter(Boolean).join(': ');
  const rest = Object.entries(e).filter(([k]) => !skip.has(k) && k !== titleKey && k !== 'subtitle');
  return `- **${head}**\n` + rest.map(([k, v]) => `  - ${k}: ${val(v)}`).join('\n');
};
const section = (title, items, titleKey) => `## ${title}\n\n${items.map((e) => entry(e, titleKey)).join('\n')}\n`;

const writing = load('writing').sort((a, b) => String(b.sort).localeCompare(String(a.sort)));
const lab = load('lab');
const shown = lab.filter((e) => e.kind !== 'partnership');
const seminar = lab.find((e) => e.kind === 'seminar');
const about = fs.readFileSync('src/pages/index.astro', 'utf8');
const bio = [...about.matchAll(/<p>([\s\S]*?)<\/p>/g)].map((m) => m[1].replace(/\{' '\}/g, ' ').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim());

const out = [
  `# Site content: stevegotzler.net (rebuild)\n\nExported ${new Date().toISOString().slice(0, 10)} from the site's data files. Asterisks mark italics. "status" and "type" are the labels shown on the site.\n`,
  `## About (bio)\n\n${bio.join('\n\n')}\n`,
  section('Books and book projects (Research)', load('books')),
  section('Publications (Research), newest first', writing.filter((e) => e.kind === 'publication')),
  section('Talks (Research), newest first', writing.filter((e) => e.kind === 'talk')),
  section('Games (Research)', load('design')),
  section('Podcast (Research)', load('podcast')),
  section('Past work (Research)', load('pastwork')),
  section('Courses (Pedagogy)', load('courses')),
  section('Lab roles and projects (Lab)', shown, 'name'),
  `## Carolina Seminar in Critical Game Studies: sessions convened, newest first\n\n${seminar.events.map((v) => `- ${v.date}: ${v.title}${v.speaker ? ` (${v.speaker})` : ''}${v.type ? ` [${v.type}]` : ''}`).join('\n')}\n`,
  `## Not shown on the site, but kept in its files\n\n${lab.filter((e) => e.kind === 'partnership').map((e) => `- **${e.name}** (${e.role}, ${e.years}); funding: ${e.funding}; events: ${e.events.map((v) => `${v.title} — ${v.sessions.map((s) => `${s.date}, ${s.place}`).join('; ')}`).join(' | ')}`).join('\n')}\n`,
].join('\n');
fs.mkdirSync('docs', { recursive: true });
fs.writeFileSync('docs/site-content.md', out);
console.log(out.split('\n').length + ' lines, ' + out.length + ' characters');

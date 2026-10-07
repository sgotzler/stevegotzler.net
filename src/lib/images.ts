import type { ImageMetadata } from 'astro';

// Every image in src/assets/images, keyed by file name without its extension.
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/images/*.{jpg,jpeg,png,webp}', {
  eager: true,
});
const byName = new Map(
  Object.entries(files).map(([path, mod]) => [path.split('/').pop()!.replace(/\.\w+$/, ''), mod.default]),
);

// The image for an entry, e.g. `marxdown.jpg`.
export const imageFor = (id: string) => byName.get(id);

// Numbered images for a carousel, e.g. `skydiving-rpg-1.jpg`, `skydiving-rpg-2.jpg`.
export const slidesFor = (id: string) =>
  [...byName.entries()]
    .filter(([name]) => new RegExp(`^${id}-\\d+$`).test(name))
    .sort(([a], [b]) => Number(a.split('-').pop()) - Number(b.split('-').pop()))
    .map(([, img]) => img);

// Drawn marks: SVG files in the same folder, placed inline so they take the page's ink and accent colours.
const marks = import.meta.glob<string>('../assets/images/*.svg', { eager: true, query: '?raw', import: 'default' });
const markByName = new Map(
  Object.entries(marks).map(([path, svg]) => [path.split('/').pop()!.replace(/\.svg$/, ''), svg]),
);
export const markFor = (id: string) => markByName.get(id);

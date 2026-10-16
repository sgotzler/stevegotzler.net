// Removes the out-of-date URL ("dlclab.unc.edu/gaming-initiative") under the Old Well on the Gameroom badge,
// filling it with the badge's own blue. Source kept as art/lab/gameroom-badge-with-old-url.png.
import sharp from 'sharp';
const src = 'art/lab/gameroom-badge-with-old-url.png';
const out = 'src/assets/images/critical-game-studies-program.png';
const { data, info } = await sharp(src).raw().toBuffer({ resolveWithObject: true });
const at = (x, y) => { const i = (y * info.width + x) * info.channels; return [data[i], data[i + 1], data[i + 2]]; };
const [r, g, b] = at(450, 672); // plain blue just above the URL
console.log('blue', r, g, b);
const box = { left: 300, top: 680, width: 300, height: 70 };
await sharp(src)
  .composite([{ input: { create: { width: box.width, height: box.height, channels: 4, background: { r, g, b, alpha: 1 } } }, left: box.left, top: box.top }])
  .png()
  .toFile(out);

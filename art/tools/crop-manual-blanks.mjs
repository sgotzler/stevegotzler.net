// Crops a scanned manual page for use as line art, blanking any number of rectangles (parts lists, the next figure).
// Usage: node art/tools/crop-manual-blanks.mjs <page> <out.png> <left> <top> <width> <height> [x,y,w,h ...]   (blank rects are in page coordinates)
import sharp from 'sharp';
const [src, out, left, top, width, height, ...blanks] = process.argv.slice(2);
const L = Number(left), T = Number(top), W = Number(width), H = Number(height);
const rects = blanks.map((b) => b.split(',').map(Number)).map(([x, y, w, h]) => {
  const x0 = Math.max(0, x - L), y0 = Math.max(0, y - T);
  const w0 = Math.min(W - x0, w - (x0 - (x - L))), h0 = Math.min(H - y0, h - (y0 - (y - T)));
  return { input: { create: { width: w0, height: h0, channels: 3, background: '#ffffff' } }, left: x0, top: y0 };
});
const cropped = await sharp(src).grayscale().extract({ left: L, top: T, width: W, height: H }).normalise().png().toBuffer();
await sharp(cropped).composite(rects).png().toFile(out);

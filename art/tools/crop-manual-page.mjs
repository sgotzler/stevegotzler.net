// Straightens and crops a scanned manual page for use as line art.
// Usage: node art/tools/crop-manual-page.mjs <page.png> <out.png> <angle> <left> <top> <width> <height> [blankLeft blankTop blankWidth blankHeight]
// The optional last four numbers blank out a rectangle inside the crop (e.g. a list cut off by the frame).
import sharp from 'sharp';
const [src, out, angle, left, top, width, height, bl, bt, bw, bh] = process.argv.slice(2);
const straight = await sharp(src).grayscale().rotate(Number(angle), { background: '#ffffff' }).png().toBuffer();
const cropped = await sharp(straight)
  .extract({ left: Number(left), top: Number(top), width: Number(width), height: Number(height) })
  .normalise()
  .png()
  .toBuffer();
const blank = bw
  ? [{ input: { create: { width: Number(bw), height: Number(bh), channels: 3, background: '#ffffff' } }, left: Number(bl), top: Number(bt) }]
  : [];
await sharp(cropped).composite(blank).png().toFile(out);

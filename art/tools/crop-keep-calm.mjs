import sharp from 'sharp';
const src = 'art/keep-calm/Keep_Calm_And_Carry_On_-_Original_poster_-_Barter_Books_-_17-Oct-2011.jpg';
const out = 'art/keep-calm/';
// A: the whole framed poster, centred on a transparent 3:2 canvas (the page colour shows at the sides)
const h = 1395, w = Math.round(h * 1.5);
const poster = await sharp(src).toBuffer();
await sharp({ create: { width: w, height: h, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
  .composite([{ input: poster, left: Math.round((w - 960) / 2), top: 0 }]).png().toFile(out + 'crop-a-whole-poster.png');
// B: crown and KEEP
await sharp(src).extract({ left: 45, top: 10, width: 870, height: 580 }).jpeg({ quality: 90 }).toFile(out + 'crop-b-crown-keep.jpg');
// C: AND CARRY ON
await sharp(src).extract({ left: 45, top: 742, width: 870, height: 580 }).jpeg({ quality: 90 }).toFile(out + 'crop-c-and-carry-on.jpg');
// D: a close detail of the creased paper and type
await sharp(src).extract({ left: 160, top: 560, width: 480, height: 320 }).resize(870, 580).jpeg({ quality: 90 }).toFile(out + 'crop-d-detail.jpg');
// E: KEEP CALM, the counterpart of C
await sharp(src).extract({ left: 135, top: 316, width: 690, height: 460 }).resize(870, 580).jpeg({ quality: 90 }).toFile(out + 'crop-e-keep-calm.jpg');

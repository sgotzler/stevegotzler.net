// Makes the pixelated Marx portrait for the MARXdown plate.
// Run from the project folder: node art/tools/pixelate-marx.mjs art/past-work
import sharp from 'sharp';
const src = '/Users/steve/Desktop/personal_rebuild/art/past-work/Karl_Marx_by_John_Jabez_Edwin_Mayall_1875_-_Restored.png';
const out = process.argv[2];
const crop = { left: 630, top: 520, width: 1500, height: 1000 };
for (const [cols, rows] of [[36, 24], [48, 32], [72, 48]]) {
  const small = await sharp(src).extract(crop).grayscale().resize(cols, rows, { kernel: 'lanczos3' }).png().toBuffer();
  await sharp(small).resize(1500, 1000, { kernel: 'nearest' }).png().toFile(`${out}/marx-${cols}x${rows}.png`);
}

// Crops the IWM bomb-density map to the 3:2 carousel frame
import sharp from 'sharp';
const [src, out] = process.argv.slice(2);
await sharp(src)
  .extract({ left: 0, top: 380, width: 2000, height: 1333 })
  .resize(1500, 1000)
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(out);

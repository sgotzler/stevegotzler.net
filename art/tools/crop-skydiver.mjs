// Placeholder crops for the Skydiver's Information Manual carousel (3:2), from phone photos of the
// 1992 manual and logbook in art/skydiver/photos. Replace with proper scans when they exist.
// Avoids pages showing the owner's name, address or phone (photos 02 and 12).
import sharp from 'sharp';
const dir = 'art/skydiver/';
const crops = {
  'a-cover': ['01', { left: 12, top: 268, width: 744, height: 496 }],
  'b-the-count': ['05', { left: 458, top: 212, width: 540, height: 360 }],
  'c-emergency': ['08', { left: 20, top: 224, width: 518, height: 345 }],
  'd-jump-log': ['09', { left: 12, top: 88, width: 528, height: 352 }],
  'e-back-cover': ['11', { left: 33, top: 342, width: 726, height: 484 }],
  'f-nomenclature': ['03', { left: 28, top: 318, width: 720, height: 480 }],
  'g-logbook-card': ['15', { left: 10, top: 2, width: 744, height: 496 }],
  'h-disclaimer': ['10', { left: 560, top: 100, width: 495, height: 330 }],
};
for (const [name, [photo, r]] of Object.entries(crops))
  await sharp(`${dir}photos/${photo}.jpg`).extract(r).resize(1200, 800).jpeg({ quality: 88 }).toFile(`${dir}crop-${name}.jpg`);

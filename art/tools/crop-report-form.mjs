// Crops of the ARP Warden's Report Form for the Keep Calm carousel (3:2).
import sharp from 'sharp';
const src = 'art/keep-calm/wardens-report-form.webp';
const out = 'art/keep-calm/';
const crops = {
  // with the archive's colour and scale bars at the left
  'form-a-with-scale-bars': { left: 0, top: 40, width: 1284, height: 856 },
  // the form alone: heading down to the mains
  'form-b-form-only': { left: 190, top: 60, width: 1065, height: 710 },
  // closer: heading and the first questions
  'form-c-heading': { left: 210, top: 150, width: 990, height: 660 },
  // between A and C: a strip of the scale bars, the questions large enough to read
  'form-d-between': { left: 40, top: 112, width: 1164, height: 776 },
};
for (const [name, r] of Object.entries(crops)) await sharp(src).extract(r).resize(1500, 1000).jpeg({ quality: 88 }).toFile(out + name + '.jpg');

// Crops of the City of London bomb damage map for the Keep Calm carousel (3:2).
import sharp from 'sharp';
const src = 'art/keep-calm/City_of_London_Bomb_Damage_Map.jpg';
const out = 'art/keep-calm/';
const crops = {
  'map-a-st-pauls-wide': { left: 0, top: 820, width: 1988, height: 1325 },
  'map-b-st-pauls-close': { left: 300, top: 1060, width: 1200, height: 800 },
  'map-c-north': { left: 0, top: 0, width: 1988, height: 1325 },
  'map-d-river': { left: 0, top: 1455, width: 1988, height: 1325 },
};
for (const [name, r] of Object.entries(crops)) await sharp(src).extract(r).resize(1500, 1000).jpeg({ quality: 88 }).toFile(out + name + '.jpg');

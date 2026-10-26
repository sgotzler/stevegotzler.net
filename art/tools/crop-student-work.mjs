// 16:9 crops of student work for the Pedagogy page.
import sharp from 'sharp';
const d = 'art/student-work/';
// Story Games: the character sheet "The Hardcore" — title, figure, and the first choices
await sharp(d + 'story-game-the-hardcore.webp').extract({ left: 40, top: 0, width: 846, height: 476 }).resize(1440, 810).jpeg({ quality: 90 }).toFile('src/assets/images/game-design-1.jpg');
// Monopoly, but…: "Feudopoly", the board with its title and card decks
await sharp(d + 'monopoly-feudopoly.webp').extract({ left: 160, top: 300, width: 1160, height: 653 }).resize(1440, 810).jpeg({ quality: 90 }).toFile('src/assets/images/game-design-2.jpg');

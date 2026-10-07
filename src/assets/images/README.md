# Images

Drop an image here named after an entry's id and it replaces that entry's placeholder.
Accepted types: .jpg, .jpeg, .png, .webp. Astro resizes and converts them when it builds the site.

| Entry | File name |
|---|---|
| Working Models | `working-models.jpg` |
| Terminal Degree | `terminal-degree.jpg` |
| Re-Tool Kit | `re-tool-kit.jpg` |
| Subject Matter: Table Top | `subject-matter-tabletop.jpg` |
| MARXdown | `marxdown.jpg` |
| The Historical TV Guide | `historical-tv-guide.jpg` |
| The Frankenstein Complex | `frankenstein-complex.jpg` |
| Skydiving RPG (carousel) | `skydiving-rpg-1.jpg`, `skydiving-rpg-2.jpg`, … |
| Keep Calm and Carry On (carousel) | `keep-calm-and-carry-on-1.jpg`, `-2.jpg`, … |

A drawn mark can be used instead of a photo: save it as an `.svg` with the entry's id (e.g. `re-tool-kit.svg`).
It is placed inline and takes the page's ink and accent colours in both light and dark.

Each image needs a short description for screen readers: set `imageAlt` on the entry in `src/data/`.

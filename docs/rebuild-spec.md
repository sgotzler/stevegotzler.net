# stevegotzler.net — rebuild spec for Claude Code

Structure and content plan from the card-sort chat. Page copy is lorem ipsum for the first build; final text comes later. Entry data below is real and should be used as-is.

---

## 1. Page list

**Navigation:** Research · Pedagogy · Lab

- The site name ("Steeve Gotzler") in the header links to About, which is the home page.
- Footer on every page: CV (PDF) · sgotzler@unc.edu · GitHub. No other social links.
- All nav labels live in one config file. "Lab" is a working label and may change.

| Page | Layout | Purpose |
|---|---|---|
| About (home) | Colophon | Who Steeve is: roles, research, background, CV and contact. |
| Research | Featured books, then catalogue sections | Books, design work, writing and talks, past digital projects. |
| Pedagogy | Catalogue | Courses, and writing and talks about teaching. |
| Lab | Catalogue, larger plates for institutions | The DLC Lab and the institutions and gatherings it supports. |

No blog, news feed, RSS, pagination, or "latest" widgets.

---

## 2. Page contents

### About (home) — colophon layout

- Opening line: lorem ipsum (final copy will name work, play, technology, and culture).
- Bio: 3–4 paragraphs of lorem ipsum.
- Headshot (existing `assets/img/bio-headshot.jpg` for now).
- Facts the final bio will draw on:
  - Teaching Assistant Professor, Department of English & Comparative Literature, UNC Chapel Hill (2022–)
  - Director, Digital Literacy and Communications (DLC) Lab (2026–; Associate Director 2023–26)
  - Director, Critical Game Studies Program (2026–)
  - Primary Convener, Carolina Seminar in Critical Game Studies (UNC, Duke, King's College London) (2023–)
  - PhD (2021) and MA (2012), Literary and Cultural Studies, Carnegie Mellon University; Special Faculty, CMU (2021–22)
  - BA, American Studies, with highest honors, UC Santa Cruz (2009)
  - Born and raised in the high Mojave Desert, east of the Sierra Nevada near Death Valley
  - Research areas: tabletop games, game studies, digital humanities, energy humanities, critical university studies
- Links: CV (PDF, one current file), email, GitHub.

### Research

Four sections, in this order. Opening line: lorem ipsum.

**2a. Books** (featured, colophon layout)

Order on the page: *Working Models* → *Subject Matter: Tabletop* (paired project, placed immediately after and adjacent) → *Terminal Degree*. The pairing is shown by order and adjacency only; no "alongside" text.

1. **Working Models: Computation, Labor, and the Procedures of Play**
   - Status: in development
   - Note: includes the *18XX Forever* chapter (one of four). Title may change; use a fixed ID (`working-models`).
   - Venue line links to: After Fossil Play; 18XX Forever; Transacting the Future; The Art of Counting Labor; Flat Reading; Dollars, Departments, and Donations
2. **Subject Matter: Tabletop** (paired project)
   - Podcast, 2022–, 30 episodes, co-hosted with Jordan Tynes
   - https://www.subjectmattertabletop.org/
   - Paired with: `working-models`
   - Venue line links to: Game Studies Podcasting (Gen Con 2023); panel on historical games / war games, Circle DC (planned; title and details TBD — hide until confirmed)
3. **Terminal Degree: Computing and the End of the Public University**
   - Co-authored with Avery J. Wiscomb
   - Status: under contract, Johns Hopkins University Press, series in Critical University Studies; manuscript nearly finished
   - Venue line links to: Pretrained (MOSAICS 2026)

**2b. Design** (catalogue)

1. **[Skydiving-manual art-RPG — title TBD]**
   - Form: art-RPG, rules-lite, built from the early-1990s *Skydiver's Information Manual*
   - Status: finished (target end of October 2026); images to come. Build the plate with image placeholders.
2. **Keep Calm and Carry On**
   - Form: operational war game about the Blitz, without combatants
   - Status: in development
   - Research grounding: Paul K. Saint-Amour, *Tense Future*; Angus Calder, *The Myth of the Blitz*; archival research at the Imperial War Museum (summer [confirm year]; archival detail to come)
   - Copy: ~150 words, to be drafted later

**2c. Writing and talks** (catalogue, newest first; every publication and talk has its home here except those marked †, whose home is Pedagogy and which appear here as cross-references)

*Publications*

| Year | Title | Type | Venue | Status | Co-authors | Link | Linked to |
|---|---|---|---|---|---|---|---|
| 2028 | A Genealogy of Minimal Computing | chapter | *Debates in the Digital Humanities*, eds. Kelly Baker Josephs and Lindsey Thomas, University of Minnesota Press | forthcoming | Avery J. Wiscomb | | |
| 2027 | Machine Learning: INSIDE's Cinematic Lessons in Control † | article | *Open Screens*, special issue on Teaching Video Games in the Humanities, eds. Iris Kleinecka-Bates and Marta F. Suarez (Winter 2027) | forthcoming | | | |
| 2027 | Detections of Totality: Cognitive Mapping and Urban Space in *Disco Elysium* | chapter | *Crime Does Play: Detective Fiction in Video Games*, eds. Dean Bowman and James McLean, Bloomsbury | forthcoming | | | Presented as: DiGRA 2025 |
| 2027 | The New Cinema of Surplus: Partial Lumpenization and the Reserve Army of Labor in Contemporary Cinema | chapter | *The Idea of the Lumpenproletariat*, eds. Ben Clarke and Michael Bailey, Routledge | forthcoming | | | |
| 2026 | Making Marx More Readable: A Minimal Computing Approach to a Community-Driven Edition of *Capital* Vol. 1 | article | *Digital Humanities Quarterly* 20.2 | published | Avery J. Wiscomb | | `marxdown` |
| 2022 | Abolitionist Pedagogies, Pedagogical Labor: A Critical Dialogue † | article | *Ethnic Studies Review* 45.3 | published | Vineeta Singh, Roopika Risam | | |
| 2020 | Review of *Second World, Second Sex* by Kristen Ghodsee | review | *Lateral* 9.1 | published | | https://csalateral.org/reviews/second-world-second-sex-ghodsee-gotzler/ | |
| 2019 | 1956: The British New Left and the "big-bang" theory of Cultural Studies | essay | *Lateral* 8.2, Years in Cultural Studies | published | | https://csalateral.org/section/years-in-cultural-studies/1956-british-new-left-gotzler/ | |
| 2019 | The Historical TV Guide | contribution (project video) | *The Digital Humanities Literacy Guidebook*, Carnegie Mellon University Libraries | published | Kathy M. Newman | https://cmu-lib.github.io/dhlg/project-videos/newmangotzler/ | `historical-tv-guide` |
| 2018 | Speaking of the Working Class – On Richard Hoggart | essay | *Los Angeles Review of Books* | published | | https://lareviewofbooks.org/article/speaking-of-the-working-class-on-richard-hoggart/ | |
| — | [Title TBD] | article | *Analog Game Studies* | in progress | | | |

*Talks*

| Date | Title | Type | Event and place | Co-presenters | Linked to |
|---|---|---|---|---|---|
| Oct 2026 | After Fossil Play: Eco-Games Beyond 18XX (fallback title if it can't change: Composing the Future: Eco-Games Beyond 18XX) | talk | UNC–Tübingen, online | | `working-models` |
| Oct 15–16, 2026 | Pretrained: The University and the Making of AI | conference paper | MOSAICS, Charles Babbage Institute | Avery J. Wiscomb | `terminal-degree` |
| Jul 9–10, 2026 | Rules, Models, Components for a Critical Pedagogy of Play † | talk | UNC–Tübingen Workshop: Playful Media and Sustainable Futures, University of Tübingen | | |
| Jun 14–18, 2026 | A House Is Not a Home: Queergaming and Recuperative History in *Molly House* | conference paper | DiGRA, Maynooth University | | |
| Jun 14–18, 2026 | 18XX Forever: Railway Time & Fossil Play on the Tabletop | conference paper | DiGRA, Maynooth University | | `working-models` |
| Mar 20–21, 2026 | Transacting the Future: Financial Speculation and Railway Time in 18XX Games | conference paper | UNCG Game Studies Conference | | `working-models` |
| Jun 30–Jul 4, 2025 | The Art of Counting Labor: Worker Placement Games as Capitalist Realism | conference paper | DiGRA | | `working-models` |
| Oct 25, 2024 | Flat Reading: New Materialist Methods for Analog Game Studies | invited talk | UNC–Duke Critical Game Studies Symposium | | `working-models` |
| Jun 4–6, 2024 | Dollars, Departments, and Donations: Carnegie as Managerial Architecture and Performance | conference paper | UNC–KCL Critical Game Studies Symposium, King's College London | | `working-models` |
| Jan 4–7, 2024 | Unsettling the Remediations of Settler-Colonialism in Video Games | conference paper | Modern Language Association | | |
| Aug 2, 2023 | Game Studies Podcasting with Subject Matter: Tabletop | talk | Gen Con Trade Day | | `subject-matter-tabletop` |
| Mar 29, 2023 | Python for Humanities Teaching † | invited workshop | Humanities Data @ UNC | | |
| Jan 5–8, 2023 | Rethinking Reading Editions: Minimal Computing Principles as Practical Commitments | conference paper | Modern Language Association | | `marxdown` |
| Jul 23–26, 2019 | Deploying Lightweight Digital Editions in the Community and Classroom | conference paper | Association for Computers and the Humanities | | `marxdown` |
| May 30–Jun 1, 2019 | MARXdown: A digital edition of Marx's *Capital* Vol. 1 | conference paper | Cultural Studies Association | | `marxdown` |
| Mar 14–18, 2018 | Using the Television "Mega-Text" to Find Social Class in 1950s TV | conference paper | Society for Cinema and Media Studies | | `historical-tv-guide` |

The DiGRA 2025 "Detections of Totality" talk is not a separate entry; it rides on the chapter via "presented as."

Display: plates show the **main title only** (text before the colon); the subtitle sits in a secondary field shown on expansion.

**2d. Past work** (catalogue)

1. **MARXdown** (`marxdown`)
   - Minimal reading edition of Marx's *Capital* Vol. 1, with community annotation; 2018–19
   - https://marxdown.github.io/
   - Funding: Digital Humanities Start-Up Grant, dSHARP, Carnegie Mellon University (2018)
   - Venue line links to: *DHQ* 2026; MLA 2023; ACH 2019; CSA 2019
   - Collaborators: [confirm]
2. **The Historical TV Guide / Mapping the Television Mega-Text** (`historical-tv-guide`) — one project
   - 2017–19, with Kathy M. Newman
   - Funding: A.W. Mellon Digital Humanities Seed Grant, Dietrich College, CMU (2017)
   - Venue line links to: SCMS 2018; DHLG project video 2019
3. **The Frankenstein Complex** (`frankenstein-complex`)
   - Exhibit, 2018, Carnegie Mellon University, with Avery J. Wiscomb and John Quirk
   - Funding: Posner Rare Book Collection Fellowship, Posner Fine Arts Foundation (2018)
   - Link: https://www.cmu.edu/dietrich/english/news/2018/frankenstein-200-posner-center.html
   - Source text for the description (from the old site; condense later): marked the 200th anniversary of *Frankenstein* by relating CMU's rare holdings (the 1818 first edition, Galvani and other history-of-science documents) to CMU research in brain-computer interfaces, robotics, the visual arts, and AI, placing them in a "complex" of ideas about mind, body, nature, ethics, revolution, and creators.

### Pedagogy

Opening line: lorem ipsum.

**Courses** (all UNC; CMU courses are CV-only)

| Number | Title | Course site |
|---|---|---|
| ENGL 341 | Tabletop Games: Narrative, History, and Design | https://sgotzler.github.io/ENGL-341 |
| ENGL 257 | Video Games and Narrative Cinema | https://sgotzler.github.io/ENGL-257 |
| ENGL 168 | Games and Literature | https://sgotzler.github.io/ENGL-168 |
| ENGL 148 | Horror Fiction | |
| ENGL 105i | Writing in the Digital Humanities | |

**Proposed course** (placed after the taught courses; clearly labeled as proposed, never numbered)

| Number | Title | Course site |
|---|---|---|
| — | [Digital Humanities: Theory and Methods — title TBD] (sample syllabus, advanced undergraduate/graduate) | [existing sample site, re-presented without course number — URL TBD] |

Course-site link is optional; plates without one simply omit it (ENGL 148 is a summer course and ENGL 105i has no site).

Funding: Curricular Development Award, College of Arts & Sciences, UNC (2024) — attach to [confirm which course].

**Writing and talks on teaching** (home entries for the † items; same fields as the Research catalogue)

- Machine Learning: INSIDE's Cinematic Lessons in Control — *Open Screens*, forthcoming 2027
- Abolitionist Pedagogies, Pedagogical Labor: A Critical Dialogue — *Ethnic Studies Review* 45.3, 2022
- Rules, Models, Components for a Critical Pedagogy of Play — UNC–Tübingen Workshop, Jul 2026
- Python for Humanities Teaching — Humanities Data @ UNC, Mar 2023

### Lab

Opening line: lorem ipsum.

All plates sit at the same heading level. Order: DLC Lab, Critical Game Studies Program, Carolina Seminar, Local LLM Project, then the two international partnerships on slightly smaller plates.

1. **Digital Literacy and Communications (DLC) Lab** — Director (2026–), Associate Director (2023–26). Department service unit and hub for game studies at UNC.
2. **Critical Game Studies Program and minor** — Director (2026–). Description includes one line noting that the program manages the Greenlaw Gameroom, linked to the public video of the Gameroom on the DLC site [URL TBD]. No separate Gameroom plate. Always "Greenlaw Gameroom"; never "lab" or "center."
3. **Carolina Seminar in Critical Game Studies** — Primary Convener (2023–); UNC, Duke, King's College London. Has an events sub-list (below).
4. **Local LLM Project** (2026–) — in-house, open-source language-model workflow for humanities research and teaching, with the AI Studio at Davis Library, UNC.

**Seminar events** (sub-list under the Carolina Seminar plate)

| Date | Title | Speaker | Type |
|---|---|---|---|
| Apr 22, 2025 | Self-Narrating Play: Games Life Writing as Critical Praxis | Dr. Rob Gallagher | invited lecture |
| Mar 21, 2025 | Auto-ethnography and Gaming While Asian | Dr. Edmond Y. Chang | methods workshop |
| Mar 20, 2025 | Queer Gaming, Close Playing, and Gaming Futures | Dr. Edmond Y. Chang | invited lecture |
| Mar 4, 2025 | GPU Shaders as Metaphors for and Materializers of Experience | | session |
| Nov 19, 2024 | Gamification and Value Capture | | session |
| Oct 8, 2024 | Materiality and Analog Play | | session |
| Apr 11, 2024 | Digital Ethnography for Game Studies Research | Dr. Kishonna Gray | methods workshop |
| Apr 10, 2024 | Augmenting Reality: Black Praxis in Digital Gaming | Dr. Kishonna Gray | invited lecture |
| Apr 4, 2024 | Intersectional Tech: Black Users in Digital Gaming | | session |
| Mar 7, 2024 | Critical Design and Development Reality | | session |
| Nov 28, 2023 | Transdisciplinary Theory | | session |
| Oct 24, 2023 | Critical Design Workshop 1: Unity 3D | | workshop |
| Sep 26, 2023 | Transdisciplinary Methods | | session |
| Mar 31, 2023 | Critical Worldbuilding with Tabletop Games (Critical Game Studies Initiative) | | session |
| Feb 20, 2023 | Inclusive Design Practices in Tabletop Gaming | Omari Akil | session |

[Add AY 2025–26 sessions; not yet on the CV.]

**International partnerships** (same heading level as the plates above; slightly smaller plates; each carries its own events sub-list)

5. **UNC–King's College London Partnership in Critical Game Studies**
   - Funding: [confirm — possibly Global Partnership Award, UNC Global Affairs (2024)]
   - Events:

     | Dates | Event |
     |---|---|
     | Apr 22–25, 2025 | UNC–KCL Critical Game Studies Symposium: Studying Games, Writing Play |
     | Jun 2–5, 2024 | UNC–KCL Critical Game Studies Symposium: Transatlantic Exchanges |

6. **UNC–University of Tübingen Partnership**
   - Funding: Seed Fund Award, UNC Global Affairs (2026); [confirm — International Collaboration Grant, Institute for the Arts & Humanities (2025)]
   - Events:

     | Dates | Event |
     |---|---|
     | Sep 2026 | Tübingen partners' visit to Chapel Hill [confirm whether to list] |
     | Jul 9–10, 2026 | UNC–Tübingen Workshop: Playful Media and Sustainable Futures, University of Tübingen |

---

## 3. Fields per entry type

Every entry has a fixed `id` (stable through retitling) and an `image` flag (yes/no). Keep fields consistent within each type.

- **Featured book:** title, subtitle, status, press and series, co-authors, long description, image (required), venue line (links to talks/pubs by id).
- **Paired project:** title, type, years, collaborators, short description, link, image, paired_with (id), venue line.
- **Design:** title, years, status, form, short description, image (required), link (rules PDF or playtest record), paired_with (optional).
- **Writing and talks entry:** title, subtitle, year/date, type (article, chapter, essay, review, contribution, conference paper, invited talk, workshop), venue or event, place, status (published, forthcoming, in progress), co-authors, link, one-line description, image flag, presented_as (optional), linked_to (optional id), home (research or pedagogy).
- **Past work:** title, years, type, collaborators, description, link, image, funding, venue line.
- **Course:** number (blank for proposed courses), title, status (taught or proposed), terms taught (taught only), course-site link (optional), one-line description, funding (optional), image.
- **Lab plate:** name, role, years, institutions, description, link, image.
- **Partnership:** name, partner institution, years, role, description, funding, link, image, events sub-list (dates, event, place).
- **Seminar event:** title, speaker, date, type.

Venue lines render compactly (e.g. "Presented at DiGRA, KCL, UNC–Duke") and link into the catalogue rather than listing full talk titles.

---

## 4. Image wish list (draft — confirm)

| Where | Image |
|---|---|
| About | Headshot (current file, or a new one) |
| *Working Models* | Photo of 18XX components: a board, share certificates, train cards |
| *Subject Matter: Tabletop* | The podcast's existing cover art |
| *Terminal Degree* | Archival photo of university computing (a campus computing center, punch cards) — check licensing |
| Skydiving-manual RPG | Spreads or pages of the finished game |
| *Keep Calm and Carry On* | Prototype board or map |
| MARXdown | Screenshot of the edition with annotations |
| Historical TV Guide | Still from the DHLG project video |
| The Frankenstein Complex | Installation photo from the exhibit |
| Courses | Course-site screenshots or Gameroom class photos (student consent needed) |
| Critical Game Studies Program | Still from the Gameroom video, or none (the line links to the video) |
| Carolina Seminar | Event posters |
| Symposia / workshop | Event photos or posters |
| Local LLM Project | Screenshot or simple diagram of the workflow |
| Writing and talks entries | Off by default |

---

## 5. Kept off the site (CV only)

CMU courses; service and memberships; CSA conference organizing; talks not tied to a project or listed above (2019 guest lecture); awards not attached to an entry.

## 6. Cut

NEH proposal; Keywords in Cultural Studies; old syllabi and draft-essay PDFs; social links except GitHub; old CV PDFs; Google Podcasts link; theme leftovers (contact boilerplate, documentation/facts/resources/sample pages, Google Analytics, Disqus, MathJax, Font Awesome 4, pagination, RSS); the blog-post page structure.

## 7. Open items

- Final copy for all pages (lorem ipsum until then)
- Final third nav label ("Lab" is working)
- Title of the October Tübingen talk (asking whether it can change)
- *Analog Game Studies* article title
- Skydiving RPG title
- Which course the 2024 Curricular Development Award attaches to
- URL for the public Greenlaw Gameroom video on the DLC site
- Proposed DH course: final title, level, and re-presented site URL (strip the course number first)
- MARXdown collaborators; partnership funding (which grants go with KCL vs. Tübingen)
- AY 2025–26 seminar sessions
- Keep the CC BY-NC-SA footer?
- Point stevegotzler.net at the new site directly instead of forwarding
- Add "Transacting the Future" to the CV
- Circle DC panel (SM:TT): title, date, and panelists; add to the talks catalogue once confirmed
- Podcast site cleanup ("Steve" spelling, Google Podcasts link)

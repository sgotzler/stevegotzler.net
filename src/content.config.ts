import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

// Every entry has a fixed `id` (stable through retitling) and an `image` flag.

const featureSchema = z.object({
    kind: z.enum(['book', 'paired', 'podcast']),
    order: z.number(),
    title: z.string(),
    subtitle: z.string().optional(),
    status: z.string().optional(),
    press: z.string().optional(),
    type: z.string().optional(),
    years: z.string().optional(),
    collaborators: z.array(z.string()).default([]),
    description: z.string().optional(),
    link: z.string().url().optional(),
    image: z.boolean().default(true),
    imageNote: z.string().optional(), // what the placeholder says
    imageAlt: z.string().optional(), // description for screen readers
    imageFocus: z.string().optional(), // which part to keep when cropped, e.g. "50% 100%"
    lineArt: z.boolean().default(false), // black-on-white drawing: blends into the page and inverts in dark mode
    gallery: z.array(z.object({ alt: z.string(), focus: z.string().optional() })).optional(), // one per carousel image
    pairedWith: z.string().optional(),
});

const books = defineCollection({ loader: file('src/data/books.yaml'), schema: featureSchema });
const podcast = defineCollection({ loader: file('src/data/podcast.yaml'), schema: featureSchema });

const design = defineCollection({
  loader: file('src/data/design.yaml'),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    years: z.string().optional(),
    status: z.string(),
    form: z.string(),
    description: z.string().optional(),
    grounding: z.string().optional(),
    slides: z.number().default(3), // number of images in the plate's carousel
    link: z.string().url().optional(),
    image: z.boolean().default(true),
    imageNote: z.string().optional(), // what the placeholder says
    imageAlt: z.string().optional(), // description for screen readers
    pairedWith: z.string().optional(),
  }),
});

const writing = defineCollection({
  loader: file('src/data/writing.yaml'),
  schema: z.object({
    kind: z.enum(['publication', 'talk']),
    sort: z.string(), // ISO-style key, newest first; display text is `date`
    date: z.string(),
    title: z.string(),
    subtitle: z.string().optional(),
    type: z.string(),
    venue: z.string(), // venue (publications) or event (talks)
    place: z.string().optional(),
    status: z.enum(['published', 'forthcoming', 'in progress']).optional(),
    coauthors: z.array(z.string()).default([]),
    link: z.string().url().optional(),
    description: z.string().optional(),
    image: z.boolean().default(false),
    presentedAs: z.string().optional(),
    linkedTo: z.string().optional(),
    home: z.enum(['research', 'pedagogy']).default('research'),
    short: z.string().optional(), // compact label used in venue lines
    note: z.string().optional(), // grey line under the source line, e.g. a special issue or series
  }),
});

const pastwork = defineCollection({
  loader: file('src/data/pastwork.yaml'),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    years: z.string(),
    type: z.string(),
    collaborators: z.array(z.string()).default([]),
    description: z.string(),
    link: z.string().url().optional(),
    linkLabel: z.string().optional(),
    repo: z.string().url().optional(), // code repository
    funding: z.string().optional(),
    image: z.boolean().default(true),
    imageNote: z.string().optional(), // what the placeholder says
    imageAlt: z.string().optional(), // description for screen readers
  }),
});

const courses = defineCollection({
  loader: file('src/data/courses.yaml'),
  schema: z.object({
    order: z.number(),
    featured: z.boolean().default(false),
    row: z.enum(['pair', 'trio']).default('pair'), // which block of plates a course sits in
    number: z.string().optional(), // left blank for proposed courses
    title: z.string(),
    subtitle: z.string().optional(),
    status: z.enum(['taught', 'proposed']),
    tag: z.string().optional(), // short outlined label, e.g. "Proposed"
    terms: z.array(z.string()).default([]),
    site: z.string().url().optional(),
    siteLabel: z.string().optional(),
    description: z.string(),
    funding: z.string().optional(),
    imageNote: z.string().optional(), // what the placeholder says
    imageAlt: z.string().optional(), // description for screen readers
  }),
});

const studentwork = defineCollection({
  loader: file('src/data/studentwork.yaml'),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    courses: z.string(), // course numbers shown in the meta line
    slides: z.number().default(3), // placeholder slides until real images exist
    description: z.string(),
    link: z.string().url().optional(),
    linkLabel: z.string().optional(),
    imageNote: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

const lab = defineCollection({
  loader: file('src/data/lab.yaml'),
  schema: z.object({
    kind: z.enum(['feature', 'child', 'seminar', 'partnership']),
    order: z.number(),
    name: z.string(),
    subtitle: z.string().optional(),
    short: z.string().optional(),
    role: z.string().optional(),
    years: z.string().optional(),
    roles: z.array(z.string()).default([]),
    institutions: z.string().optional(),
    description: z.string(),
    funding: z.string().optional(),
    link: z.string().url().optional(),
    linkLabel: z.string().optional(),
    imageNote: z.string().optional(),
    imageAlt: z.string().optional(),
    events: z
      .array(
        z.object({
          date: z.string().optional(),
          title: z.string(),
          speaker: z.string().optional(),
          type: z.string().optional(),
          place: z.string().optional(),
          // An event held in more than one sitting: the title shows once, then a row per session
          sessions: z.array(z.object({ date: z.string(), place: z.string().optional() })).optional(),
        }),
      )
      .default([]),
  }),
});

export const collections = { courses, studentwork, lab,  books, podcast, design, writing, pastwork };

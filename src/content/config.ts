import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const emptyToUndefined = (value: unknown) =>
  value === '' ? undefined : value;

const baseFields = z.object({
  title: z.string(),
  description: z.string().default(''),
  date: z.coerce.date(),
  category: z.string().default('未分类'),
  tags: z.array(z.string()).default([]),
  cover: z.preprocess(emptyToUndefined, z.string().optional()),
  url: z.preprocess(emptyToUndefined, z.string().url().optional()),
  draft: z.boolean().default(false),
});

const links = z
  .array(z.object({ label: z.string(), href: z.string().url() }))
  .default([]);

const fileList = z.array(z.string()).default([]);

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: baseFields,
});

const music = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/music' }),
  schema: baseFields.extend({
    artist: z.preprocess(emptyToUndefined, z.string().optional()),
    audio: z.preprocess(emptyToUndefined, z.string().optional()),
    video: z.preprocess(emptyToUndefined, z.string().optional()),
    links,
  }),
});

const course = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/course' }),
  schema: baseFields.extend({
    order: z.number().optional(),
    files: fileList,
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { course, writing, music, pages };

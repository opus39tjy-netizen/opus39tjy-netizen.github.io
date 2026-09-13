import { getCollection } from 'astro:content';

type Dated = { data: { date: Date } };

export function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

const byDateDesc = (a: Dated, b: Dated) =>
  b.data.date.valueOf() - a.data.date.valueOf();

export async function getWriting() {
  return (await getCollection('writing', ({ data }) => !data.draft)).sort(
    byDateDesc
  );
}

export async function getWorks() {
  return (await getCollection('works', ({ data }) => !data.draft)).sort(
    byDateDesc
  );
}

export async function getMusic() {
  return (await getCollection('music', ({ data }) => !data.draft)).sort(
    byDateDesc
  );
}

export async function getCourse() {
  return (await getCollection('course', ({ data }) => !data.draft)).sort(
    byDateDesc
  );
}

export interface RecentItem {
  title: string;
  description: string;
  category: string;
  date: Date;
  href: string;
  cover?: string;
}

export async function getRecent(limit = 4): Promise<RecentItem[]> {
  const [writing, works, music, course] = await Promise.all([
    getWriting(),
    getWorks(),
    getMusic(),
    getCourse(),
  ]);

  const items: RecentItem[] = [
    ...writing.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      category: entry.data.category,
      date: entry.data.date,
      href: `/writing/${entry.id}`,
      cover: entry.data.cover,
    })),
    ...works.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      category: entry.data.category,
      date: entry.data.date,
      href: `/works/${entry.id}`,
      cover: entry.data.cover,
    })),
    ...music.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      category: entry.data.category,
      date: entry.data.date,
      href: `/music/${entry.id}`,
      cover: entry.data.cover,
    })),
    ...course.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      category: entry.data.category,
      date: entry.data.date,
      href: `/course/${entry.id}`,
      cover: entry.data.cover,
    })),
  ];

  return items.sort((a, b) => b.date.valueOf() - a.date.valueOf()).slice(0, limit);
}

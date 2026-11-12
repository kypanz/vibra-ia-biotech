import type { MetadataRoute } from 'next';
import type { Lang } from '@/lib/content';
import { absoluteUrl, pathFor, type PageKey } from '@/lib/routes';

const languages: Lang[] = ['es', 'en'];
const pages: PageKey[] = ['home', 'ehvi', 'legal'];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((page) =>
    languages.map((lang) => ({
      url: absoluteUrl(pathFor(lang, page)),
    }))
  );
}

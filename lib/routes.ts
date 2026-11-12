import type { Lang } from './content';
import { siteUrl } from './site';

export type PageKey = 'home' | 'ehvi' | 'legal';

export function pathFor(lang: Lang, page: PageKey): string {
  const base = lang === 'es' ? '/' : '/en/';
  return page === 'home' ? base : `${base}${page}/`;
}

export function counterpartPath(lang: Lang, page: PageKey): string {
  return pathFor(lang === 'es' ? 'en' : 'es', page);
}

export function absoluteUrl(path: string): string {
  return `${siteUrl}${path}`;
}

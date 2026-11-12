import type { Metadata } from 'next';
import { dictionaries, type Lang } from './content';
import { absoluteUrl, pathFor, type PageKey } from './routes';
import { siteUrl } from './site';

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [{ url: '/assets/vibra-logo.jpg', type: 'image/jpeg' }],
  },
};

export function buildMetadata(lang: Lang, page: PageKey): Metadata {
  const t = dictionaries[lang];
  const title =
    page === 'home'
      ? `VIBRA IA BIOTECH | ${
          lang === 'es'
            ? 'Tecnología y negocio digital'
            : 'Technology and digital business'
        }`
      : page === 'ehvi'
        ? 'EHVI | VIBRA IA BIOTECH'
        : `${t.legalTitle} | VIBRA IA BIOTECH`;
  const description = page === 'ehvi' ? t.ehviIntro : t.intro;
  const canonical = absoluteUrl(pathFor(lang, page));

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        es: absoluteUrl(pathFor('es', page)),
        en: absoluteUrl(pathFor('en', page)),
        'x-default': absoluteUrl(pathFor('es', page)),
      },
    },
    openGraph: {
      title,
      description: t.intro,
      type: 'website',
      url: canonical,
    },
  };
}

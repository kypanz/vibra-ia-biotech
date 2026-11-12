import Link from 'next/link';
import type { Lang } from '@/lib/content';
import { dictionaries } from '@/lib/content';
import { counterpartPath, pathFor } from '@/lib/routes';

export function Footer({ lang }: { lang: Lang }) {
  const t = dictionaries[lang];
  const home = pathFor(lang, 'home');
  const otherLang: Lang = lang === 'es' ? 'en' : 'es';

  return (
    <footer className="wrap">
      <div>
        <Link className="brand" href={home}>
          <img
            className="brand-image"
            src="/assets/vibra-logo.jpg"
            width={1612}
            height={893}
            alt="VIBRA IA BIOTECH"
          />
        </Link>
        <p>{t.footer}</p>
      </div>
      <div className="footer-links">
        <Link href={pathFor(lang, 'ehvi')}>EHVI</Link>
        <Link href={pathFor(lang, 'legal')}>{t.legal}</Link>
        <Link href={counterpartPath(lang, 'home')} lang={otherLang}>
          {lang === 'es' ? 'English' : 'Español'}
        </Link>
      </div>
      <div className="copyright">© 2026 VIBRA IA BIOTECH LLC</div>
    </footer>
  );
}

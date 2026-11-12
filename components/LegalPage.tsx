import { Arrow } from './Arrow';
import type { Lang } from '@/lib/content';
import { dictionaries } from '@/lib/content';
import { mailto } from '@/lib/site';

export function LegalPage({ lang }: { lang: Lang }) {
  const t = dictionaries[lang];

  return (
    <main id="main" className="legal wrap">
      <p className="eyebrow">VIBRA IA BIOTECH LLC</p>
      <h1>{t.legalTitle}</h1>
      {t.legalSections.map((section) => (
        <section key={section[0]}>
          <h2>{section[0]}</h2>
          <p>{section[1]}</p>
        </section>
      ))}
      <a className="button dark contact-link" href={mailto()}>
        {t.contactCTA} <Arrow />
      </a>
    </main>
  );
}

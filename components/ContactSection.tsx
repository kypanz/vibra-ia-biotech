import { Arrow } from './Arrow';
import type { Lang } from '@/lib/content';
import { dictionaries } from '@/lib/content';
import { mailto } from '@/lib/site';

export function ContactSection({ lang }: { lang: Lang }) {
  const t = dictionaries[lang];

  return (
    <section id="contact" className="contact wrap">
      <div>
        <p className="eyebrow">{t.contactTag}</p>
        <h2 dangerouslySetInnerHTML={{ __html: t.contactTitle }} />
      </div>
      <div className="contact-right">
        <p>{t.contactText}</p>
        <a className="button dark contact-link" href={mailto('VIBRA IA BIOTECH')}>
          {t.contactCTA} <Arrow />
        </a>
        <span className="contact-note">{t.contactNote}</span>
      </div>
    </section>
  );
}

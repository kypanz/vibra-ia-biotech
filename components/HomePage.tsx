import Link from 'next/link';
import { Arrow } from './Arrow';
import { BrandShowcase } from './BrandShowcase';
import { ContactSection } from './ContactSection';
import type { Lang } from '@/lib/content';
import { areaName, areas, dictionaries, services } from '@/lib/content';
import { pathFor } from '@/lib/routes';
import { ehviHref } from '@/lib/site';

export function HomePage({ lang }: { lang: Lang }) {
  const t = dictionaries[lang];
  const ehvi = pathFor(lang, 'ehvi');
  const status = ehviHref ? t.statusAvailable : t.statusDevelopment;
  const projectNote = ehviHref
    ? t.projectNoteAvailable
    : t.projectNoteDevelopment;
  const previewAreas = [areas[0], areas[8], areas[42], areas[44]];

  return (
    <main id="main">
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1 dangerouslySetInnerHTML={{ __html: t.title }} />
          <p className="lead">{t.intro}</p>
          <div className="hero-actions">
            <a className="button dark" href="#work">{t.discover} <Arrow /></a>
            <Link className="text-link" href={ehvi}>{t.visit} <Arrow /></Link>
          </div>
          <div className="hero-small">
            <span className="tiny-line"></span>
            {t.scroll}
            <span aria-hidden="true">↓</span>
          </div>
        </div>
        <BrandShowcase />
      </section>

      <div className="intro-band">
        <div className="wrap">
          <p>{t.line}</p>
          <span>AI / SOFTWARE / DIGITAL BUSINESS</span>
        </div>
      </div>

      <section id="work" className="work wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">{t.workTag}</p>
            <h2 dangerouslySetInnerHTML={{ __html: t.workTitle }} />
          </div>
          <p>{t.workIntro}</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <details className="service" key={service.id}>
              <summary>
                <span className="service-num">{service.n}</span>
                <h3>{service[lang][0]}</h3>
                <span className="service-sub">{service[lang][1]}</span>
                <span className="service-plus" aria-hidden="true">+</span>
              </summary>
              <div className="service-body">
                <p>{service[lang][2]}</p>
                <ul>
                  {service[lang][3].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="ehvi-feature">
        <div className="wrap feature-layout">
          <div className="feature-copy">
            <p className="eyebrow">{t.projectTag}</p>
            <h2 dangerouslySetInnerHTML={{ __html: t.projectTitle }} />
            <p>{t.projectText}</p>
            <Link className="button lime" href={ehvi}>
              {t.projectLink} <Arrow />
            </Link>
            <span className="feature-note">
              <span className="status-dot"></span>
              {projectNote}
            </span>
            <div className="powered">
              {t.tech} <strong>COGNITUS BIOTECH</strong>
            </div>
          </div>
          <Link className="ehvi-preview" href={ehvi} aria-label={t.projectLink}>
            <div className="preview-head">
              <span className="ehvi-word">ehvi<span>+</span></span>
              <span className="preview-status">{status}</span>
            </div>
            <div className="preview-core">
              <div className="portal"><div></div><div></div><div></div></div>
              <p dangerouslySetInnerHTML={{ __html: t.guideTitle }} />
            </div>
            <div className="preview-areas">
              {previewAreas.map((area) => (
                <span key={`${area[1]}-${area[2]}`}>
                  {areaName(area, lang)} <Arrow />
                </span>
              ))}
            </div>
            <div className="preview-foot">
              <span>48 {t.results}</span>
              <span>ES / EN</span>
            </div>
          </Link>
        </div>
        <div className="wrap">
          <p className="feature-disclaimer">{t.guideDisclaimer}</p>
        </div>
      </section>

      <section id="company" className="company wrap">
        <div>
          <p className="eyebrow">{t.companyTag}</p>
          <h2>{t.companyTitle}</h2>
          <div className="company-tags">
            <span>{t.companyPoint1}</span>
            <span>{t.companyPoint2}</span>
            <span>{t.companyPoint3}</span>
          </div>
        </div>
        <div className="company-copy">
          <p>{t.companyText}</p>
          <p>{t.companyText2}</p>
        </div>
      </section>

      <ContactSection lang={lang} />
    </main>
  );
}

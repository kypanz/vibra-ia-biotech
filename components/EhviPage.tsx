import { ContactSection } from './ContactSection';
import { ConnectionPanel } from './ConnectionPanel';
import { Directory } from './Directory';
import { EhviClientShell } from './EhviClientShell';
import type { Lang } from '@/lib/content';
import { areaName, areas, dictionaries, groupNames } from '@/lib/content';
import { ehviHref } from '@/lib/site';

export function EhviPage({ lang }: { lang: Lang }) {
  const t = dictionaries[lang];
  const status = ehviHref ? t.statusAvailable : t.statusDevelopment;
  const areaNames = areas.map((area) => areaName(area, lang));

  return (
    <main id="main">
      <EhviClientShell
        areaNames={areaNames}
        areaText={t.areaText}
        areaAdult={t.areaAdult}
        areaLimits={t.areaLimits}
        areaPending={t.areaPending}
        closeLabel={t.close}
        aboutArea={t.aboutArea}
        openSpace={t.openSpace}
        ehviHref={ehviHref}
      >
        <section className="ehvi-hero wrap">
          <div>
            <p className="eyebrow">{t.ehviTag}</p>
            <span className="ehvi-word large">ehvi<span>+</span></span>
            <h1 dangerouslySetInnerHTML={{ __html: t.ehviTitle }} />
          </div>
          <div className="ehvi-intro">
            <span className="pill">
              <span className="status-dot"></span>
              {status}
            </span>
            <p className="lead">{t.ehviIntro}</p>
            <a href="#directory" className="button dark">
              {t.directory} <span aria-hidden="true">↓</span>
            </a>
            <div className="powered">
              {t.tech} <strong>COGNITUS BIOTECH</strong>
            </div>
          </div>
        </section>

        <div className="notice-band">
          <div className="wrap">
            <span className="info-icon" aria-hidden="true">i</span>
            <p>{t.notice}</p>
          </div>
        </div>

        <section className="journey wrap">
          {t.steps.map((step, index) => (
            <div key={step[0]}>
              <span className="step-no">0{index + 1}</span>
              <h3>{step[0]}</h3>
              <p>{step[1]}</p>
            </div>
          ))}
        </section>

        <section id="directory" className="directory wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">
                EHVI / {lang === 'es' ? 'DIRECTORIO' : 'DIRECTORY'}
              </p>
              <h2>{t.directory}</h2>
            </div>
            <p>{t.directoryText}</p>
          </div>
          <Directory
            areas={areas}
            areaNames={areaNames}
            groupNames={groupNames[lang]}
            allLabel={t.all}
            resultsLabel={t.results}
            emptyLabel={t.empty}
            resetLabel={t.reset}
            searchLabel={t.search}
            placeholder={t.placeholder}
            filterLabel={lang === 'es' ? 'Filtrar por tema' : 'Filter by topic'}
          />
        </section>

        <section id="interactive-space" className="interactive-section">
          <div className="wrap interactive-layout">
            <div>
              <p className="eyebrow">{t.spaceTag}</p>
              <h2 dangerouslySetInnerHTML={{ __html: t.spaceTitle }} />
              <p>{t.spaceText}</p>
            </div>
            <ConnectionPanel lang={lang} />
          </div>
        </section>

        <section className="faq wrap">
          <h2>{t.faqTitle}</h2>
          <div>
            {t.faqs.map((faq) => (
              <details key={faq[0]}>
                <summary>
                  {faq[0]}<span aria-hidden="true">+</span>
                </summary>
                <p>{faq[1]}</p>
              </details>
            ))}
          </div>
        </section>

        <ContactSection lang={lang} />
      </EhviClientShell>
    </main>
  );
}

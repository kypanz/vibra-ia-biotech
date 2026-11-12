import { Arrow } from './Arrow';
import type { Lang } from '@/lib/content';
import { dictionaries } from '@/lib/content';
import { ehviHref, mailto } from '@/lib/site';

export function ConnectionPanel({ lang }: { lang: Lang }) {
  const t = dictionaries[lang];

  return (
    <div className="connection-panel" id="ehvi-connection">
      <div className="portal small"><div></div><div></div><div></div></div>
      <h3>{ehviHref ? t.spaceReady : t.spacePending}</h3>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 10,
          justifyContent: 'center',
        }}
      >
        {ehviHref ? (
          <a
            className="button lime"
            href={ehviHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.openSpace} <Arrow />
          </a>
        ) : null}
        <a className="button light contact-link" href={mailto('EHVI')}>
          {t.spaceButton} <Arrow />
        </a>
      </div>
    </div>
  );
}

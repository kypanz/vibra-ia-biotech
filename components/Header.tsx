'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Arrow } from './Arrow';
import type { Lang } from '@/lib/content';
import { navText } from '@/lib/nav';
import { counterpartPath, pathFor, type PageKey } from '@/lib/routes';

type HeaderProps = {
  lang: Lang;
  page: PageKey;
};

export function Header({ lang, page }: HeaderProps) {
  const t = navText[lang];
  const home = pathFor(lang, 'home');
  const ehvi = pathFor(lang, 'ehvi');
  const otherLang: Lang = lang === 'es' ? 'en' : 'es';
  const counterpart = counterpartPath(lang, page);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <>
      <a href="#main" className="skip">{t.skip}</a>
      <header className="site-header wrap">
        <Link
          className="brand"
          href={home}
          aria-label={`VIBRA IA BIOTECH — ${t.brandHome}`}
        >
          <img
            className="brand-image"
            src="/assets/vibra-logo.jpg"
            width={1612}
            height={893}
            alt="VIBRA IA BIOTECH"
          />
        </Link>
        <nav className="desktop-nav" aria-label={t.navLabel}>
          <Link href={`${home}#work`}>{t.nav[0]}</Link>
          <Link href={ehvi} aria-current={page === 'ehvi' ? 'page' : undefined}>
            EHVI
          </Link>
          <Link href={`${home}#company`}>{t.nav[2]}</Link>
        </nav>
        <div className="nav-end">
          <Link
            className="language"
            href={counterpart}
            lang={otherLang}
            aria-label={t.otherName}
          >
            {t.other}
          </Link>
          <Link className="nav-contact" href={`${home}#contact`}>
            {t.nav[3]} <Arrow />
          </Link>
          <button
            ref={menuRef}
            className="menu-button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={t.menuLabel}
            onClick={() => setOpen((value) => !value)}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <nav id="mobile-nav" className="mobile-nav" hidden={!open}>
        <Link href={`${home}#work`} onClick={() => setOpen(false)}>{t.nav[0]}</Link>
        <Link href={ehvi} onClick={() => setOpen(false)}>EHVI</Link>
        <Link href={`${home}#company`} onClick={() => setOpen(false)}>{t.nav[2]}</Link>
        <Link href={`${home}#contact`} onClick={() => setOpen(false)}>{t.nav[3]}</Link>
      </nav>
    </>
  );
}

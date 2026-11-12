import type { Lang } from './content';

export type NavText = {
  skip: string;
  nav: [string, string, string, string];
  brandHome: string;
  navLabel: string;
  otherName: string;
  other: 'EN' | 'ES';
  menuLabel: string;
};

export const navText: Record<Lang, NavText> = {
  es: {
    skip: 'Saltar al contenido',
    nav: ['Áreas de trabajo', 'EHVI', 'La empresa', 'Contacto'],
    brandHome: 'Inicio',
    navLabel: 'Navegación principal',
    otherName: 'Read in English',
    other: 'EN',
    menuLabel: 'Abrir menú',
  },
  en: {
    skip: 'Skip to content',
    nav: ['Our work', 'EHVI', 'The company', 'Contact'],
    brandHome: 'Home',
    navLabel: 'Main navigation',
    otherName: 'Leer en español',
    other: 'ES',
    menuLabel: 'Open menu',
  },
};

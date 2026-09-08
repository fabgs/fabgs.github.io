export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'meta.description': 'Portfolio of Fabián Godoy: projects and experiments.',
    'nav.projects': 'Projects',
    'nav.language': 'Language',
    'hero.index': '01 — Portfolio',
    'hero.tagline': 'Software developer. A running index of the projects I publish.',
    'hero.mark': 'Guestbook',
    'projects.index': '02 — Index',
    'projects.title': 'Projects',
    'card.open': 'Open →',
    'card.code': 'Code ↗',
    'guestbook.index': '03 — Guestbook',
    'guestbook.title': 'Guestbook',
    'guestbook.wip': 'Work in progress.',
    'guestbook.soon':
      'Soon you will be able to sign in with GitHub and leave a message here. Come back in a while.',
    'guestbook.back': '← Back to portfolio',
    'footer.made': 'Built with',
  },
  es: {
    'meta.description': 'Portfolio de Fabián Godoy: proyectos y experimentos.',
    'nav.projects': 'Proyectos',
    'nav.language': 'Idioma',
    'hero.index': '01 — Portfolio',
    'hero.tagline': 'Desarrollador de software. Aquí recojo los proyectos que voy publicando.',
    'hero.mark': 'Libro de visitas',
    'projects.index': '02 — Índice',
    'projects.title': 'Proyectos',
    'card.open': 'Abrir →',
    'card.code': 'Código ↗',
    'guestbook.index': '03 — Libro de visitas',
    'guestbook.title': 'Libro de visitas',
    'guestbook.wip': 'En construcción.',
    'guestbook.soon':
      'Pronto podrás iniciar sesión con GitHub y dejar aquí un mensaje. Vuelve dentro de un tiempo.',
    'guestbook.back': '← Volver al portfolio',
    'footer.made': 'Hecho con',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UiKey = keyof (typeof ui)[typeof defaultLang];

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

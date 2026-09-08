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
    'nav.github': 'GitHub',
    'hero.index': '01 — Portfolio',
    'hero.tagline': 'Software developer. A running index of the projects I publish.',
    'projects.index': '02 — Index',
    'projects.title': 'Projects',
    'card.open': 'Open →',
    'card.code': 'Code ↗',
    'footer.made': 'Built with',
  },
  es: {
    'meta.description': 'Portfolio de Fabián Godoy: proyectos y experimentos.',
    'nav.projects': 'Proyectos',
    'nav.github': 'GitHub',
    'hero.index': '01 — Portfolio',
    'hero.tagline': 'Desarrollador de software. Aquí recojo los proyectos que voy publicando.',
    'projects.index': '02 — Índice',
    'projects.title': 'Proyectos',
    'card.open': 'Abrir →',
    'card.code': 'Código ↗',
    'footer.made': 'Hecho con',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UiKey = keyof (typeof ui)[typeof defaultLang];

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

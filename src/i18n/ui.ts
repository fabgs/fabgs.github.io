export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

/** Un texto en cada idioma; lo usan los ficheros de src/data */
export type Localized = Record<Lang, string>;
/** Una lista de textos en cada idioma (viñetas) */
export type LocalizedList = Record<Lang, string[]>;

export const ui = {
  en: {
    'meta.description':
      'Fabián Godoy, software engineer: projects, experience and skills.',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'nav.language': 'Language',
    'hero.index': '01 — Portfolio',
    'hero.tagline':
      'Software engineer, backend-leaning. Computer Engineering graduate from the University of Alicante, with a six-month internship shipping production mobile and web features.',
    'projects.index': '02 — Index',
    'projects.title': 'Projects',
    'card.open': 'Open →',
    'card.code': 'Code →',
    'card.role': 'My part',
    'experience.index': '03 — Work',
    'experience.title': 'Experience',
    'skills.index': '04 — Stack',
    'skills.title': 'Skills',
    'skills.coursework': 'Coursework',
    'education.index': '05 — Studies',
    'education.title': 'Education',
    'contact.index': '06 — Contact',
    'contact.title': "Let's talk",
    'contact.text':
      "I'm looking for a junior software engineering role, preferably on the backend. The quickest way to reach me is LinkedIn.",
    'guestbook.title': 'Guestbook',
    /** Titular grande; admite "\n" para forzar el salto de línea */
    'guestbook.heading': 'Guestbook',
    'guestbook.wip': 'Work in progress.',
    'guestbook.soon':
      'Soon you will be able to sign in with GitHub and leave a message here. Come back in a while.',
    'guestbook.back': '← Back to portfolio',
    'footer.made': 'Built with',
    'footer.source': 'Source',
  },
  es: {
    'meta.description':
      'Fabián Godoy, ingeniero de software: proyectos, experiencia y habilidades.',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.contact': 'Contacto',
    'nav.language': 'Idioma',
    'hero.index': '01 — Portfolio',
    'hero.tagline':
      'Ingeniero de software con preferencia por el backend. Graduado en Ingeniería Informática por la Universidad de Alicante, con seis meses de prácticas sacando a producción funcionalidades móviles y web.',
    'projects.index': '02 — Índice',
    'projects.title': 'Proyectos',
    'card.open': 'Abrir →',
    'card.code': 'Código →',
    'card.role': 'Mi parte',
    'experience.index': '03 — Trabajo',
    'experience.title': 'Experiencia',
    'skills.index': '04 — Stack',
    'skills.title': 'Habilidades',
    'skills.coursework': 'En la carrera',
    'education.index': '05 — Estudios',
    'education.title': 'Formación',
    'contact.index': '06 — Contacto',
    'contact.title': 'Hablamos',
    'contact.text':
      'Busco un puesto de ingeniero de software junior, a ser posible en backend. La forma más rápida de contactarme es LinkedIn.',
    'guestbook.title': 'Libro de visitas',
    'guestbook.heading': 'Libro de\nvisitas',
    'guestbook.wip': 'En construcción.',
    'guestbook.soon':
      'Pronto podrás iniciar sesión con GitHub y dejar aquí un mensaje. Vuelve dentro de un tiempo.',
    'guestbook.back': '← Volver al portfolio',
    'footer.made': 'Hecho con',
    'footer.source': 'Código fuente',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UiKey = keyof (typeof ui)[typeof defaultLang];

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

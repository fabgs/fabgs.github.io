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
    'meta.ogAlt': 'Fabián Godoy, software engineer: name, photo and fabgs.dev',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.language': 'Language',
    'hero.index': '01 — Portfolio',
    'hero.tagline':
      'Software engineer, backend-leaning. Computer Science Engineering graduate from the University of Alicante, with a six-month internship shipping production mobile and web features.',
    'hero.cv': 'Download CV',
    'hero.email': 'Email me',
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
    'about.index': '06 — Profile',
    'about.title': 'About me',
    'about.photo': 'Fabián Godoy in front of the Palace of Westminster, London',
    'contact.index': '07 — Contact',
    'contact.title': "Let's talk",
    'contact.text':
      "I'm looking for a junior software engineering role, preferably on the backend. Write to me by email or on LinkedIn.",
    'contact.cv': 'CV (PDF)',
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
    'meta.ogAlt': 'Fabián Godoy, ingeniero de software: nombre, foto y fabgs.dev',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
    'nav.language': 'Idioma',
    'hero.index': '01 — Portfolio',
    'hero.tagline':
      'Ingeniero de software con preferencia por el backend. Graduado en Ingeniería Informática por la Universidad de Alicante, con seis meses de prácticas sacando a producción funcionalidades móviles y web.',
    'hero.cv': 'Descargar CV',
    'hero.email': 'Escríbeme',
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
    'about.index': '06 — Perfil',
    'about.title': 'Sobre mí',
    'about.photo': 'Fabián Godoy frente al Palacio de Westminster, en Londres',
    'contact.index': '07 — Contacto',
    'contact.title': 'Hablamos',
    'contact.text':
      'Busco un puesto de ingeniero de software junior, a ser posible en backend. Escríbeme por email o por LinkedIn.',
    'contact.cv': 'CV (PDF)',
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

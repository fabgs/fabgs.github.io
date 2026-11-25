import type { Localized, LocalizedList } from '../i18n/ui';

/**
 * Datos del CV que se muestran en la portada. Todo lo que hay aquí es público:
 * no pongas teléfono, email ni dirección exacta.
 */

/** Franja de datos rápidos bajo el titular */
export interface Fact {
  label: Localized;
  value: Localized;
  note: Localized;
}

export const facts: Fact[] = [
  {
    label: { en: 'Based in', es: 'Vivo en' },
    value: { en: 'Alicante, Spain', es: 'Alicante, España' },
    note: { en: 'Open to relocating within Europe', es: 'Dispuesto a mudarme dentro de Europa' },
  },
  {
    label: { en: 'Status', es: 'Estado' },
    value: { en: 'Available now', es: 'Disponible ya' },
    note: {
      en: 'EU citizen: no visa needed in the EU, EEA or Switzerland',
      es: 'Ciudadano de la UE: no necesito visado en la UE, el EEE ni Suiza',
    },
  },
  {
    label: { en: 'English', es: 'Inglés' },
    value: { en: 'C1', es: 'C1' },
    note: { en: 'Native Spanish speaker', es: 'Español nativo' },
  },
];

/** Una entrada de experiencia o de formación */
export interface Entry {
  /** Empresa, organización o universidad */
  title: Localized;
  href?: string;
  /** Puesto o titulación */
  subtitle: Localized;
  period: Localized;
  place: Localized;
  points: LocalizedList;
  tags?: string[];
}

export const experience: Entry[] = [
  {
    title: { en: 'Lixsa.ai', es: 'Lixsa.ai' },
    href: 'https://lixsa.ai/',
    subtitle: { en: 'Software Engineer Intern', es: 'Ingeniero de software en prácticas' },
    period: { en: 'Jun 2025 — Dec 2025', es: 'jun. 2025 — dic. 2025' },
    place: { en: 'Alicante, Spain · Remote', es: 'Alicante, España · En remoto' },
    points: {
      en: [
        'Developed and maintained a cross-platform mobile app for iOS and Android in TypeScript (Ionic, Angular, Capacitor): 290+ commits and 4 production releases on both app stores.',
        'Implemented push notifications with Firebase Cloud Messaging, including permission handling and deep-link navigation.',
        'Built product modules end to end, from REST API integration to reusable UI components, and shipped real-time chat improvements, media messaging and internationalisation.',
        "Contributed 60+ commits to the company's Vue.js SaaS platform, including AI-assisted features and real-time updates over WebSocket.",
        "Reviewed teammates' pull requests and triaged and fixed bugs alongside feature work.",
      ],
      es: [
        'Desarrollé y mantuve una app móvil multiplataforma para iOS y Android en TypeScript (Ionic, Angular, Capacitor): más de 290 commits y 4 versiones publicadas en las dos tiendas.',
        'Implementé las notificaciones push con Firebase Cloud Messaging, con gestión de permisos y navegación por deep links.',
        'Construí módulos de producto de principio a fin, desde la integración con la API REST hasta componentes de interfaz reutilizables, y saqué mejoras del chat en tiempo real, mensajes multimedia e internacionalización.',
        'Hice más de 60 commits en la plataforma SaaS de la empresa en Vue.js, con funcionalidades asistidas por IA y actualizaciones en tiempo real por WebSocket.',
        'Revisé pull requests del equipo y clasifiqué y corregí bugs a la vez que desarrollaba funcionalidades.',
      ],
    },
    tags: ['TypeScript', 'Ionic', 'Angular', 'Capacitor', 'Firebase', 'Vue.js', 'WebSocket'],
  },
  {
    title: { en: 'MultitecUA', es: 'MultitecUA' },
    href: 'https://multitecua.com/',
    subtitle: { en: 'Co-director of the Rocketry Club', es: 'Codirector del club de cohetería' },
    period: { en: 'Sep 2025 — Present', es: 'sep. 2025 — actualidad' },
    place: { en: 'University of Alicante', es: 'Universidad de Alicante' },
    points: {
      en: [
        'Co-lead a student rocketry team: coordinating members and planning project milestones.',
        "Run the flight simulations of the club's MT1 rocket with RocketPy.",
        'Member of the MultitecUA technology community since November 2024; judge at a university game jam.',
      ],
      es: [
        'Codirijo un equipo de cohetería de estudiantes: coordino a los miembros y planifico los hitos del proyecto.',
        'Hago las simulaciones de vuelo del cohete MT1 del club con RocketPy.',
        'Miembro de la comunidad tecnológica MultitecUA desde noviembre de 2024; jurado en una game jam universitaria.',
      ],
    },
    tags: ['Python', 'RocketPy'],
  },
];

export const education: Entry[] = [
  {
    title: { en: 'University of Alicante', es: 'Universidad de Alicante' },
    href: 'https://www.ua.es/',
    subtitle: {
      en: "Bachelor's Degree in Computer Engineering, Software Engineering track",
      es: 'Grado en Ingeniería Informática, itinerario de Ingeniería del Software',
    },
    period: { en: 'Sep 2020 — Jul 2026', es: 'sep. 2020 — jul. 2026' },
    place: { en: 'Alicante, Spain', es: 'Alicante, España' },
    points: {
      en: [
        "Bachelor's thesis: decentralised, bio-inspired swarms of heterogeneous robots for search and rescue, extending the SAREnv framework.",
        'Activities: the MultitecUA student technology community and the Alicante Debate Association.',
      ],
      es: [
        'Trabajo de fin de grado: enjambres descentralizados y bioinspirados de robots heterogéneos para búsqueda y rescate, como extensión del framework SAREnv.',
        'Actividades: la comunidad tecnológica de estudiantes MultitecUA y la Asociación de Debate de Alicante.',
      ],
    },
  },
];

/** Un elemento de habilidad: el nombre propio de una tecnología o un texto traducido */
export type Skill = string | Localized;

export interface SkillGroup {
  name: Localized;
  items: Skill[];
  /** Lo que solo he usado en asignaturas; se muestra aparte */
  coursework?: Skill[];
}

export const skills: SkillGroup[] = [
  {
    name: { en: 'Languages', es: 'Lenguajes' },
    items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'C', 'SQL', 'HTML / CSS'],
    coursework: ['Go', 'C++'],
  },
  {
    name: { en: 'Frameworks', es: 'Frameworks' },
    items: [
      'Spring Boot (Data JPA, Security)',
      'Vue 3 (Pinia, Vue Router)',
      'Angular',
      'Ionic / Capacitor',
      'Tailwind CSS',
      'raylib',
      'OpenMP',
    ],
    coursework: ['Node.js / Express', 'FastAPI'],
  },
  {
    name: { en: 'Data & infra', es: 'Datos e infra' },
    items: ['MySQL', 'Redis', 'SQLite', 'Docker', 'Linux', 'GitHub Actions', 'Vercel', 'Render'],
  },
  {
    name: { en: 'Tools', es: 'Herramientas' },
    items: [
      'Git',
      'Vite',
      'Vitest',
      'ESLint',
      'Maven',
      'Swagger / OpenAPI',
      'IntelliJ',
      'VS Code',
      'GitHub Copilot',
      'Claude Code',
    ],
  },
  {
    name: { en: 'Practices', es: 'Metodología' },
    items: [
      { en: 'Agile (Scrum, Kanban)', es: 'Ágil (Scrum, Kanban)' },
      {
        en: 'Spec-driven development with AI assistants (OpenSpec)',
        es: 'Desarrollo guiado por especificaciones con asistentes de IA (OpenSpec)',
      },
    ],
  },
];

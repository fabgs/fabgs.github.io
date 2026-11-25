import type { Localized } from '../i18n/ui';

export interface RepoLink {
  /** Texto del botón. Si se omite se usa "Código" traducido. */
  label?: string;
  href: string;
}

export interface Project {
  slug: string;
  title: Localized;
  description: Localized;
  /** En proyectos de equipo: qué hice yo. Se muestra bajo la descripción. */
  role?: Localized;
  tags: string[];
  /**
   * URL de la demo. Relativa ("/boids/") si vive bajo fabgs.dev como project
   * site de GitHub Pages; absoluta si está alojada fuera. Sin ella, la tarjeta
   * entera enlaza al primer repositorio.
   */
  live?: string;
  /** Al menos un repositorio. Con varios, cada uno necesita su label. */
  repos: [RepoLink, ...RepoLink[]];
}

// Primero, en el mismo orden, los repositorios fijados en github.com/fabgs;
// después, el resto de páginas publicadas bajo fabgs.dev.
export const projects: Project[] = [
  {
    slug: 'tpv-virtual',
    title: { en: 'TPV Virtual', es: 'TPV Virtual' },
    description: {
      en: 'Academic virtual point-of-sale payment gateway. Hosted checkout, workspaces for merchants, support and admins, refunds and a ticket system. Vue 3 frontend and Spring Boot API with JWT, roles and Redis rate limiting.',
      es: 'Pasarela de pago TPV virtual académica. Checkout alojado, espacios para comercios, soporte y administración, reembolsos y sistema de tickets. Frontend en Vue 3 y API en Spring Boot con JWT, roles y limitación de peticiones con Redis.',
    },
    role: {
      en: 'Team project (4 students) for the Web Engineering course. I wrote most of the code.',
      es: 'Proyecto en equipo (4 estudiantes) de la asignatura Ingeniería Web. Escribí la mayor parte del código.',
    },
    tags: ['Vue 3', 'Spring Boot', 'Java', 'MySQL', 'Redis', 'JWT'],
    live: 'https://tpv-frontend.vercel.app/',
    repos: [
      { label: 'Frontend', href: 'https://github.com/fabgs/tpv-frontend' },
      { label: 'Backend', href: 'https://github.com/fabgs/tpv-backend' },
    ],
  },
  {
    slug: 'sarenv-swarm',
    title: { en: 'SARenv Swarm', es: 'SARenv Swarm' },
    description: {
      en: "Bachelor's thesis. Extends the SARenv search-and-rescue framework with a decentralised, bio-inspired swarm module for heterogeneous teams of UAVs and ground robots, with real-time 3D visualisation in GAMA.",
      es: 'Trabajo de fin de grado. Extiende el framework de búsqueda y rescate SARenv con un módulo de enjambre descentralizado y bioinspirado para equipos heterogéneos de drones y robots terrestres, con visualización 3D en GAMA.',
    },
    tags: ['Python', 'Multi-agent', 'UAV', 'GAMA Platform'],
    repos: [{ href: 'https://github.com/fabgs/SARenv-swarm' }],
  },
  {
    slug: 'cronometro-ada',
    title: { en: 'ADA Debate Timer', es: 'Cronómetro ADA' },
    description: {
      en: 'Projection-ready timer for the Alicante Debate Association. Academic and British Parliamentary formats, configurable timings, phase navigation and keyboard control.',
      es: 'Cronómetro para debates de la Asociación de Debate de Alicante. Formatos académico y parlamentario británico, tiempos configurables, navegación por fases y manejo por teclado.',
    },
    tags: ['JavaScript', 'Vite', 'Vitest', 'PWA'],
    live: '/cronometro-ada/',
    repos: [{ href: 'https://github.com/fabgs/cronometro-ada' }],
  },
  {
    slug: 'boids',
    title: { en: 'Boids 3D', es: 'Boids 3D' },
    description: {
      en: 'Real-time flocking simulator written in C with raylib. Thousands of agents thanks to a spatial grid, multithreading and GPU instanced rendering. Compiled to WebAssembly.',
      es: 'Simulador de bandadas en tiempo real escrito en C con raylib. Miles de agentes gracias a una rejilla espacial, multihilo y renderizado instanciado en GPU. Compilado a WebAssembly.',
    },
    tags: ['C', 'raylib', 'WebAssembly', 'OpenMP', 'GLSL'],
    live: '/boids/',
    repos: [{ href: 'https://github.com/fabgs/boids' }],
  },
  {
    slug: 'torneo-agentes-debate',
    title: { en: 'AI Debate Tournament', es: 'Torneo de agentes de debate' },
    description: {
      en: "Tournaments between teams of AI agents debating in the Alicante Debate Association's Academic format, scored by AI judges with the official ballot and generated with my adaptation of DeepDebater. Each debate replays in an animated room with a voice per speaker, alongside standings and a searchable evidence bank.",
      es: 'Torneos entre equipos de agentes de IA que debaten en el Formato Académico de la Asociación de Debate de Alicante, puntuados por jueces también agentes con la hoja oficial y generados con mi adaptación de DeepDebater. Cada debate se reproduce en una sala animada con una voz por orador, junto a la clasificación y un banco de evidencias con buscador.',
    },
    tags: ['Python', 'AG2', 'Multi-agent', 'LLM', 'JavaScript', 'Web Speech API'],
    live: '/torneo-agentes-debate/',
    repos: [{ href: 'https://github.com/fabgs/torneo-agentes-debate' }],
  },
  {
    slug: 'guitar-tabs',
    title: { en: 'Guitar Tabs', es: 'Guitar Tabs' },
    description: {
      en: 'Guitar tab player. It reads plain-text tabs, works out the rhythm, the chords and the fingering for both hands, and plays them with synthesised strings at any tempo. A practice mode listens through the microphone and only moves on when you play the right notes. Includes a tuner.',
      es: 'Reproductor de tablaturas de guitarra. Lee tabs en texto plano, deduce el ritmo, los acordes y la digitación de las dos manos, y los toca con cuerdas sintetizadas al tempo que quieras. El modo práctica escucha por el micrófono y solo avanza cuando tocas las notas correctas. Incluye afinador.',
    },
    tags: ['JavaScript', 'Web Audio API', 'YIN', 'Karplus-Strong'],
    live: '/guitar-tabs/',
    repos: [{ href: 'https://github.com/fabgs/guitar-tabs' }],
  },
];

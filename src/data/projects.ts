import type { Lang } from '../i18n/ui';

type Localized = Record<Lang, string>;

export interface RepoLink {
  /** Texto del botón. Si se omite se usa "Código" traducido. */
  label?: string;
  href: string;
}

export interface Project {
  slug: string;
  title: Localized;
  description: Localized;
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

export const projects: Project[] = [
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
    slug: 'tpv-virtual',
    title: { en: 'TPV Virtual', es: 'TPV Virtual' },
    description: {
      en: 'Academic virtual point-of-sale payment gateway. Hosted checkout, workspaces for merchants, support and admins, refunds and a ticket system. Vue 3 frontend and Spring Boot API with JWT, roles and Redis rate limiting.',
      es: 'Pasarela de pago TPV virtual académica. Checkout alojado, espacios para comercios, soporte y administración, reembolsos y sistema de tickets. Frontend en Vue 3 y API en Spring Boot con JWT, roles y limitación de peticiones con Redis.',
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
];

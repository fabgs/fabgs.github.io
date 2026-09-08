import type { Lang } from '../i18n/ui';

type Localized = Record<Lang, string>;

export interface Project {
  slug: string;
  title: Localized;
  description: Localized;
  /** Path under fabgs.dev (GitHub Pages project site) */
  path: string;
  repo: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: 'boids',
    title: { en: 'Boids 3D', es: 'Boids 3D' },
    description: {
      en: 'Real-time flocking simulator written in C with raylib. Thousands of agents thanks to a spatial grid, multithreading and GPU instanced rendering. Compiled to WebAssembly.',
      es: 'Simulador de bandadas en tiempo real escrito en C con raylib. Miles de agentes gracias a una rejilla espacial, multihilo y renderizado instanciado en GPU. Compilado a WebAssembly.',
    },
    path: '/boids/',
    repo: 'https://github.com/fabgs/boids',
    tags: ['C', 'raylib', 'WebAssembly', 'OpenMP', 'GLSL'],
  },
  {
    slug: 'cronometro-ada',
    title: { en: 'ADA Debate Timer', es: 'Cronómetro ADA' },
    description: {
      en: 'Projection-ready timer for the Alicante Debate Association. Academic and British Parliamentary formats, configurable timings, phase navigation and keyboard control.',
      es: 'Cronómetro para debates de la Asociación de Debate de Alicante. Formatos académico y parlamentario británico, tiempos configurables, navegación por fases y manejo por teclado.',
    },
    path: '/cronometro-ada/',
    repo: 'https://github.com/fabgs/cronometro-ada',
    tags: ['JavaScript', 'Vite', 'Vitest', 'PWA'],
  },
];

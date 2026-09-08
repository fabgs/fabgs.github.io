export interface Project {
  slug: string;
  title: string;
  description: string;
  /** Ruta bajo fabgs.dev (project site de GitHub Pages) */
  path: string;
  repo: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: 'boids',
    title: 'Boids 3D',
    description:
      'Simulador de bandadas en tiempo real escrito en C con raylib. Miles de agentes gracias a una rejilla espacial, multihilo y renderizado instanciado en GPU. Compilado a WebAssembly.',
    path: '/boids/',
    repo: 'https://github.com/fabgs/boids',
    tags: ['C', 'raylib', 'WebAssembly', 'OpenMP', 'GLSL'],
  },
  {
    slug: 'cronometro-ada',
    title: 'Cronómetro ADA',
    description:
      'Cronómetro para debates de la Asociación de Debate de Alicante. Formatos académico y parlamentario británico, tiempos configurables, navegación por fases y manejo por teclado.',
    path: '/cronometro-ada/',
    repo: 'https://github.com/fabgs/cronometro-ada',
    tags: ['JavaScript', 'Vite', 'Vitest', 'PWA'],
  },
];

# fabgs.dev

Sitio principal de [fabgs.dev](https://fabgs.dev), construido con [Astro](https://astro.build) y publicado en GitHub Pages.

Los proyectos (`/boids`, `/cronometro-ada`, ...) viven en sus propios repositorios y se sirven bajo este dominio como *project sites* de GitHub Pages.

## Desarrollo

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/
```

Los proyectos de la portada se definen en `src/data/projects.ts`.

## Despliegue

Cada push a `master` ejecuta `.github/workflows/deploy.yml`, que construye el sitio y lo publica en Pages. Los PRs solo ejecutan el build como comprobación.

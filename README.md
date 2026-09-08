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

Los proyectos de la portada se definen en `src/data/projects.ts`. Los textos de la interfaz están en `src/i18n/ui.ts`.

## Idiomas

El sitio está en inglés por defecto (`/`) y en español en `/es/`. En la primera visita a `/`, un script redirige a `/es/` si el navegador está en español. El selector EN/ES de la cabecera guarda la elección en `localStorage` y tiene prioridad sobre el idioma del navegador.

## Despliegue

Cada push a `master` ejecuta `.github/workflows/deploy.yml`, que construye el sitio y lo publica en Pages. Los PRs solo ejecutan el build como comprobación.

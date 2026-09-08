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

## Estructura

```
src/
  config/site.ts        nombre, dominio y redes sociales (añade aquí un enlace nuevo)
  data/projects.ts      proyectos de la portada, con título y descripción por idioma
  i18n/ui.ts            textos de la interfaz por idioma
  i18n/utils.ts         utilidades de rutas con prefijo de idioma
  layouts/Base.astro    <head>, cabecera, pie y redirección por idioma
  components/           piezas con sus estilos propios (SiteHeader, ProjectCard, ...)
  pages/                una página por ruta e idioma; solo eligen componente e idioma
  styles/global.css     tokens de diseño, base y utilidades compartidas (rejilla, .label)
```

Para añadir un proyecto: una entrada en `src/data/projects.ts`. Para una página nueva: un componente en `components/` que use `Base` y dos ficheros en `pages/` y `pages/es/` que lo rendericen con su idioma. Los textos nuevos van a `src/i18n/ui.ts`, que obliga a definirlos en todos los idiomas.

## Idiomas

El sitio está en inglés por defecto (`/`) y en español en `/es/`. En la primera visita a `/`, un script redirige a `/es/` si el navegador está en español. El selector EN/ES de la cabecera guarda la elección en `localStorage` y tiene prioridad sobre el idioma del navegador.

## Despliegue

Cada push a `master` ejecuta `.github/workflows/deploy.yml`, que construye el sitio y lo publica en Pages. Los PRs solo ejecutan el build como comprobación.

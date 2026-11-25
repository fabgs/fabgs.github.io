# fabgs.dev

Sitio principal de [fabgs.dev](https://fabgs.dev), construido con [Astro](https://astro.build) y publicado en GitHub Pages.

Los proyectos con demo (`/boids`, `/cronometro-ada`, `/guitar-tabs`, `/torneo-agentes-debate`) viven en sus propios repositorios y se sirven bajo este dominio como *project sites* de GitHub Pages.

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
  config/site.ts        nombre, dominio, email, ruta del CV y redes sociales (añade aquí un enlace nuevo)
  data/projects.ts      proyectos de la portada: título y descripción por idioma, mi parte en los de equipo (role), demo opcional (live) y repositorios
  data/cv.ts            datos del CV: franja del hero, experiencia, formación, sobre mí y habilidades (solo datos públicos)
  assets/fabian.jpg     foto de "Sobre mí"; Astro la sirve en AVIF y WebP a varios tamaños
  i18n/ui.ts            textos de la interfaz por idioma y los tipos Localized / LocalizedList
  i18n/utils.ts         utilidades de rutas con prefijo de idioma
  layouts/Base.astro    <head>, cabecera, pie y redirección por idioma
  components/           piezas con sus estilos propios (SiteHeader, Section, ProjectCard, Entries, Skills, ...)
  pages/                una página por ruta e idioma; solo eligen componente e idioma
  styles/global.css     tokens de diseño, base y utilidades compartidas (rejilla, .label, .slashes)
```

`public/cv/` guarda el CV en PDF (el mismo que en LinkedIn); al cambiarlo, sustituye el fichero o actualiza `site.cv`.

La portada tiene siete secciones numeradas: hero con los botones de CV y email y la franja de datos, proyectos, experiencia, habilidades, formación, sobre mí y contacto. Cada sección usa `Section` (índice, título y ancla); la experiencia y la formación comparten el componente `Entries`.

Para añadir un proyecto: una entrada en `src/data/projects.ts`. Si tiene demo, `live` es su URL (relativa si vive bajo fabgs.dev, absoluta si no); sin `live`, la tarjeta entera enlaza al primer repositorio. Con varios repositorios, cada uno lleva su `label`. Para un puesto, un estudio o una tecnología nueva: una entrada en `src/data/cv.ts`. Para una página nueva: un componente en `components/` que use `Base` y dos ficheros en `pages/` y `pages/es/` que lo rendericen con su idioma. Los textos nuevos van a `src/i18n/ui.ts`, que obliga a definirlos en todos los idiomas.

## Idiomas

El sitio está en inglés por defecto (`/`) y en español en `/es/`. En la primera visita a `/`, un script redirige a `/es/` si el navegador está en español. El selector EN/ES de la cabecera guarda la elección en `localStorage` y tiene prioridad sobre el idioma del navegador.

## Despliegue

Cada push a `master` ejecuta `.github/workflows/deploy.yml`, que construye el sitio y lo publica en Pages. Los PRs solo ejecutan el build como comprobación.

## Licencia

El código se publica con la [licencia MIT](LICENSE). Los textos sobre mí (biografía, experiencia, formación y descripciones de proyectos), la foto y el CV no entran en ella, y la fuente Archivo tiene su propia licencia OFL; consulta [NOTICE](NOTICE).

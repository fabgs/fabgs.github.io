import { defaultLang, languages, type Lang } from './ui';

const nonDefaultLangs = (Object.keys(languages) as Lang[]).filter((l) => l !== defaultLang);

/**
 * Quita el prefijo de idioma de una ruta ("/es/guestbook/" -> "/guestbook/").
 * Sirve para construir canonical, hreflang y el selector de idioma de la
 * página actual sin acoplar cada página a su ruta.
 */
export function stripLocale(pathname: string): string {
  for (const lang of nonDefaultLangs) {
    const prefix = `/${lang}`;
    if (pathname === prefix || pathname.startsWith(`${prefix}/`)) {
      return pathname.slice(prefix.length) || '/';
    }
  }
  return pathname || '/';
}

/**
 * Datos del sitio que no dependen del idioma.
 * Para añadir una red social basta con añadir una entrada a `socialLinks`.
 */
export const site = {
  name: 'Fabián Godoy',
  domain: 'fabgs.dev',
  url: 'https://fabgs.dev',
  repo: 'https://github.com/fabgs/fabgs.github.io',
  email: 'fabgodsil@gmail.com',
  /** CV en PDF, servido desde public/cv/ (el mismo que en LinkedIn) */
  cv: '/cv/CV_Fabian_Godoy_Silvestre.pdf',
} as const;

export interface SocialLink {
  label: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/fabgs' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fabian-godoy-silvestre' },
];

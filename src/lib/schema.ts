import type { Project } from '../data/profile';

const SITE_URL = __SITE_URL__;

interface SocialProfile {
  linkedin: string;
  github: string;
}

export function personSchema(name: string, jobTitle: string, email: string, sameAs: SocialProfile) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    email,
    url: SITE_URL,
    sameAs: [sameAs.linkedin, sameAs.github],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Bernardo do Campo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Diego Herrera da Silva — Portfólio',
    url: SITE_URL,
    description:
      'Portfólio de Diego Herrera da Silva — Estagiário de TI, Suporte, Infraestrutura e Estudante de Ciência da Computação',
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

const CATEGORY_MAP: Record<string, string> = {
  Python: 'BusinessApplication',
  Java: 'BusinessApplication',
  ReactJS: 'WebApplication',
  TypeScript: 'WebApplication',
  JavaScript: 'WebApplication',
  HTML: 'WebApplication',
  CSS: 'WebApplication',
};

function inferCategory(stack: string[]): string {
  for (const tech of stack) {
    const cat = CATEGORY_MAP[tech];
    if (cat) return cat;
  }
  return 'WebApplication';
}

export function projectSchema(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    description: project.description,
    applicationCategory: inferCategory(project.stack),
    operatingSystem: 'Web',
    author: {
      '@type': 'Person',
      name: 'Diego Herrera da Silva',
    },
  };
}

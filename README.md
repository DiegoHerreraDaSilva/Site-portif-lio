# Diego Herrera da Silva — Portfólio

Portfólio pessoal desenvolvido com **React 18**, **TypeScript** e **Vite**. Design dark mode, responsivo e com foco em performance e SEO.

## Stack

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **React Router DOM** (SPA routing)
- **Framer Motion** (animações e transições)
- **react-helmet-async** (metadados por página)
- **CSS Modules** (estilização por componente)

## Funcionalidades

- Grid interativo animado no background (Canvas)
- Transições de página com AnimatePresence
- Revelação de seções ao scroll (IntersectionObserver)
- Timeline de experiência profissional
- Preview de certificados ao hover
- Barra de progresso de leitura
- Scroll suave e scroll-to-top na navegação
- Código separado por página (lazy loading)
- Metadados SEO únicos por rota (Open Graph, Twitter Cards)
- Dados estruturados JSON-LD (Person, WebSite, SoftwareApplication, BreadcrumbList)
- Sitemap XML e robots.txt gerados automaticamente
- Google Fonts com carregamento não-bloqueante
- Acessibilidade WCAG AA (skip link, aria-labels, foco visível)
- Modo reduzido de movimento (prefers-reduced-motion)

## Páginas

| Rota | Conteúdo |
|---|---|
| `/` | Home com hero animado e call-to-actions |
| `/sobre` | Experiência, formação, habilidades técnicas, idiomas e certificações |
| `/projetos` | Grid de projetos com cards interativos |
| `/contato` | Informações de contato e formulário |

## Scripts

```bash
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção
npm run preview  # preview do build
```

## Deploy

Pronto para deploy na **Vercel**. Conecte o repositório ou use:

```bash
npm run build
npx vercel --prod
```

> A URL base usada nos metadados (OG tags, sitemap, canonical) é injetada automaticamente via variável de ambiente `VERCEL_URL` (Vercel) ou `VITE_SITE_URL`.

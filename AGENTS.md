# Portfólio — Diego Herrera da Silva

## Stack
- React 18 + TypeScript + Vite
- React Router DOM (SPA routing)
- Framer Motion (animações)
- react-helmet-async (SEO/metadados)
- CSS Modules (estilização)
- vite-plugin-sitemap (sitemap + robots)

## Estrutura
```
src/
├── components/     # Header, Footer, HeroGrid, ProjectCard, TimelineItem, SkillTag, SectionTitle, SEO, PageLoader
├── pages/          # Home, Sobre, Projetos, Contato (lazy loaded)
├── data/           # profile.ts (dados do usuário, projetos, certificações)
├── hooks/          # useScrollReveal, useScrollProgress
├── lib/            # schema.ts (JSON-LD helpers)
└── styles/         # global.css, tokens.css
```

## Design Tokens
- Paleta: dark mode (bg `oklch(0.08 0 0)`, surface `oklch(0.135 0.008 150)`)
- Primary (verde): `oklch(0.58 0.16 150)`
- Accent (âmbar): `oklch(0.72 0.15 80)`
- Tipografia: JetBrains Mono (headings) + Figtree (body)
- Ver `src/styles/tokens.css`

## SEO
- `src/components/SEO.tsx` — title, description, OG, Twitter Cards, canonical, JSON-LD
- `src/lib/schema.ts` — helpers p/ Person, WebSite, BreadcrumbList, SoftwareApplication
- Sitemap + robots gerados pelo `vite-plugin-sitemap`
- URL base: injetada via `VERCEL_URL` (Vercel) ou `VITE_SITE_URL`; fallback `https://diegoherrerasilvadev.vercel.app`

## Páginas
| Rota | Componente | SEO title |
|---|---|---|
| `/` | Home | Início |
| `/sobre` | Sobre | Sobre |
| `/projetos` | Projetos | Projetos |
| `/contato` | Contato | Contato |

## Funcionalidades implementadas
- [x] HeroGrid animado (Canvas, fixed, pointer-events: none)
- [x] Transições de página (AnimatePresence)
- [x] ScrollReveal (IntersectionObserver)
- [x] Scroll progress bar
- [x] Scroll to top na navegação
- [x] Header shrink no scroll (blur)
- [x] Dark mode completo
- [x] Preview de certificados ao hover (acordeão)
- [x] Code splitting (React.lazy + Suspense)
- [x] Sticky footer (flexbox, min-height: 100vh)
- [x] Footer fade-in no mount (400ms delay)
- [x] PageLoader durante carregamento lazy
- [x] Formulário funcional (Formspree)
- [x] Google Fonts não-bloqueante (media="print")
- [x] SEO por página (Helmet)
- [x] JSON-LD estruturado
- [x] Sitemap + robots.txt
- [x] Google Search Console verification
- [x] Acessibilidade (skip link, aria-labels, focus-visible, prefers-reduced-motion)
- [x] Deploy automático na Vercel (master → produção)

## Comandos
```bash
npm run dev      # servidor local
npm run build    # build produção (tsc + vite)
npm run preview  # preview do build
git add -A && git commit -m "..." && git push  # deploy automático
```

## Deploy
- Domínio: `https://diegoherrerasilvadev.vercel.app`
- Repo: `DiegoHerreraDaSilva/Site-portif-lio` (branch master)
- Conectado à Vercel (auto-deploy em cada push)

## Contato
- Formulário: Formspree (`/f/xykqqeak`)
- Email: `diego` + `herrerasilva12` + `@` + `gmail.com` (ofuscado no código)
- LinkedIn: `/in/diegoherreradasilva`
- GitHub: `/DiegoHerreraDaSilva`

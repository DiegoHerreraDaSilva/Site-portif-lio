import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { HeroGrid } from './components/HeroGrid';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';
import { useScrollProgress } from './hooks/useScrollProgress';
import { personSchema, websiteSchema } from './lib/schema';
import { profile } from './data/profile';

const Home = lazy(() => import('./pages/Home'));
const Sobre = lazy(() => import('./pages/Sobre'));
const Projetos = lazy(() => import('./pages/Projetos'));
const Contato = lazy(() => import('./pages/Contato'));

const easeOutQuart = [0.25, 1, 0.5, 1] as const;

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOutQuart } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.25, ease: easeOutQuart } },
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  const progress = useScrollProgress();

  return (
    <>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
        role="progressbar"
        aria-valuenow={Math.round(progress * 100)}
        aria-label="Progresso da página"
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Suspense fallback={null}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/projetos" element={<Projetos />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

function GlobalSEO() {
  const jsonLd = [
    personSchema(profile.name, profile.role, profile.email, {
      linkedin: profile.linkedin,
      github: profile.github,
    }),
    websiteSchema(),
  ];

  return (
    <SEO
      title="Portfólio"
      description="Portfólio de Diego Herrera da Silva — Estagiário de TI, Suporte, Infraestrutura e Estudante de Ciência da Computação"
      jsonLd={jsonLd}
    />
  );
}

function App() {
  return (
    <BrowserRouter>
      <GlobalSEO />
      <ScrollToTop />
      <HeroGrid />
      <a href="#main" className="skip-link">Pular para o conteúdo</a>
      <Header />
      <main id="main">
        <AnimatedRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

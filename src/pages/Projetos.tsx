import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { ProjectCard } from '../components/ProjectCard';
import { SectionTitle } from '../components/SectionTitle';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { profile, projects } from '../data/profile';
import { breadcrumbSchema, projectSchema } from '../lib/schema';
import styles from './Projetos.module.css';

const easeOutQuart = [0.25, 1, 0.5, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeOutQuart },
  },
};

export default function Projetos() {
  const { ref: headerRef, isVisible: headerVis } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVis } = useScrollReveal({ threshold: 0.05 });
  const { ref: ctaRef, isVisible: ctaVis } = useScrollReveal();

  const projectJsonLd = projects.map(projectSchema);
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Projetos', url: '/projetos' },
  ]);

  return (
    <div className={styles.page}>
      <SEO
        title="Projetos"
        description={`Projetos de ${profile.name} — de automações com IA a aplicações full-stack. Veja o que eu desenvolvi.`}
        path="/projetos"
        jsonLd={[...projectJsonLd, breadcrumbJsonLd]}
      />
      <section ref={headerRef} className={`${styles.intro} ${headerVis ? styles.introVisible : ''}`}>
        <div className={styles.introInner}>
          <p className={styles.introLabel}>Projetos</p>
          <h1 className={styles.introTitle}>Trabalhos & Projetos</h1>
          <p className={styles.introText}>
            Projetos profissionais e pessoais que mostram minha evolução — de automações com IA a aplicações full-stack.
          </p>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div
          ref={gridRef}
          className={`${styles.gridInner} ${gridVis ? styles.gridVisible : ''}`}
        >
          <SectionTitle>Em Destaque</SectionTitle>
          <motion.div
            className={styles.grid}
            variants={containerVariants}
            initial="hidden"
            animate={gridVis ? 'visible' : 'hidden'}
          >
            {projects.map((project) => (
              <motion.div key={project.title} variants={cardVariants}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section ref={ctaRef} className={`${styles.cta} ${ctaVis ? styles.ctaVisible : ''}`}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Gostou do que viu?</h2>
          <p className={styles.ctaText}>
            Estou aberto a oportunidades, parcerias e novos desafios. Vamos conversar!
          </p>
          <Link to="/contato" className={styles.ctaLink}>
            Fale comigo &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}

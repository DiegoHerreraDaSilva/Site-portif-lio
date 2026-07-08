import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { profile } from '../data/profile';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Home.module.css';

const nameWords = profile.name.split(' ');

const easeOutQuart = [0.25, 1, 0.5, 1] as const;

const nameVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: easeOutQuart, delay: 0.2 + i * 0.12 },
  }),
};

export default function Home() {
  const { ref: heroRef, isVisible: heroVis } = useScrollReveal<HTMLElement>({ threshold: 0.1 });
  const { ref: aboutRef, isVisible: aboutVis } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <>
      <SEO
        title="Início"
        description={`Portfólio de ${profile.name} — ${profile.role}. Conheça meus projetos, experiência e habilidades em TI.`}
        path="/"
      />
      <section
        ref={heroRef}
        className={`${styles.hero} ${heroVis ? styles.heroVisible : ''}`}
      >
        <div className={styles.heroContent}>
          <motion.p
            className={styles.heroLabel}
            initial={{ opacity: 0, y: 20 }}
            animate={heroVis ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: easeOutQuart, delay: 0.1 }}
          >
            Olá, eu sou
          </motion.p>

          <h1 className={styles.heroName}>
            {nameWords.map((word, i) => (
              <motion.span
                key={i}
                className={i === nameWords.length - 1 ? styles.heroNameAccent : ''}
                custom={i}
                variants={nameVariants}
                initial="hidden"
                animate={heroVis ? 'visible' : 'hidden'}
                style={{ display: 'inline-block', marginRight: '0.15em' }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className={styles.heroRole}
            initial={{ opacity: 0, y: 20 }}
            animate={heroVis ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: easeOutQuart, delay: 0.7 }}
          >
            {profile.role}
          </motion.p>

          <motion.p
            className={styles.heroLocation}
            initial={{ opacity: 0, y: 20 }}
            animate={heroVis ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: easeOutQuart, delay: 0.85 }}
          >
            {profile.location}
          </motion.p>

          <motion.div
            className={styles.heroActions}
            initial={{ opacity: 0, y: 20 }}
            animate={heroVis ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: easeOutQuart, delay: 1.0 }}
          >
            <Link to="/projetos" className={styles.btnPrimary}>
              Ver Projetos
            </Link>
            <Link to="/contato" className={styles.btnOutline}>
              Entrar em Contato
            </Link>
          </motion.div>
        </div>
      </section>

      <section
        ref={aboutRef}
        className={`${styles.about} ${aboutVis ? styles.aboutVisible : ''}`}
      >
        <div className={styles.aboutInner}>
          <h2 className={styles.aboutHeading}>Sobre</h2>
          <p className={styles.aboutText}>{profile.summary}</p>
          <div className={styles.aboutCta}>
            <Link to="/sobre" className={styles.aboutLink}>
              Mais sobre mim &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import { useState, useCallback, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { SectionTitle } from '../components/SectionTitle';
import { TimelineItem } from '../components/TimelineItem';
import { SkillTag } from '../components/SkillTag';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { experience, education, skills, languages, certifications, profile } from '../data/profile';
import styles from './Sobre.module.css';

const easeOutQuart = [0.25, 1, 0.5, 1] as const;

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutQuart },
  },
};

const staggerSkills = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const skillFade = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: easeOutQuart },
  },
};

export default function Sobre() {
  const { ref: expRef, isVisible: expVis } = useScrollReveal();
  const { ref: eduRef, isVisible: eduVis } = useScrollReveal();
  const { ref: skillsRef, isVisible: skillsVis } = useScrollReveal();
  const { ref: certRef, isVisible: certVis } = useScrollReveal();
  const { ref: ctaRef, isVisible: ctaVis } = useScrollReveal();
  const [openCert, setOpenCert] = useState<string | null>(null);
  const certListRef = useRef<HTMLUListElement>(null);

  const toggleCert = useCallback((name: string) => {
    setOpenCert((prev) => (prev === name ? null : name));
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (certListRef.current && !certListRef.current.contains(e.target as Node)) {
        setOpenCert(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenCert(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={styles.page}>
      <SEO
        title="Sobre"
        description={`Conheça a trajetória de ${profile.name} — ${profile.role}. Experiência, formação, habilidades técnicas e certificações.`}
        path="/sobre"
      />
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <p className={styles.introLabel}>Sobre</p>
          <h1 className={styles.introTitle}>Quem é Diego</h1>
          <p className={styles.introText}>{profile.summary}</p>
        </div>
      </section>

      <section
        ref={expRef}
        className={`${styles.section} ${expVis ? styles.sectionVisible : ''}`}
      >
        <div className={styles.sectionInner}>
          <SectionTitle>Experiência</SectionTitle>
          <motion.div
            className={styles.timeline}
            variants={staggerContainer}
            initial="hidden"
            animate={expVis ? 'visible' : 'hidden'}
          >
            {experience.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                variants={fadeUp}
                style={{ marginBottom: i < experience.length - 1 ? '4rem' : 0 }}
              >
                <TimelineItem {...exp} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        ref={eduRef}
        className={`${styles.sectionAlt} ${eduVis ? styles.sectionVisible : ''}`}
      >
        <div className={styles.sectionInner}>
          <SectionTitle>Formação</SectionTitle>
          <motion.div
            className={styles.eduGrid}
            variants={staggerContainer}
            initial="hidden"
            animate={eduVis ? 'visible' : 'hidden'}
          >
            {education.map((edu) => (
              <motion.div key={edu.institution} variants={fadeUp}>
                <div className={styles.eduCard}>
                  <h3 className={styles.eduDegree}>{edu.degree}</h3>
                  <p className={styles.eduInst}>{edu.institution}</p>
                  <p className={styles.eduPeriod}>{edu.period}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        ref={skillsRef}
        className={`${styles.section} ${skillsVis ? styles.sectionVisible : ''}`}
      >
        <div className={styles.sectionInner}>
          <SectionTitle>Competências</SectionTitle>
          <div className={styles.skillsGrid}>
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className={styles.skillCategory}>{group.category}</h3>
                <motion.div
                  className={styles.skillTags}
                  variants={staggerSkills}
                  initial="hidden"
                  animate={skillsVis ? 'visible' : 'hidden'}
                >
                  {group.items.map((skill) => (
                    <motion.span key={skill} variants={skillFade}>
                      <SkillTag>{skill}</SkillTag>
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={certRef}
        className={`${styles.sectionAlt} ${styles.certSection} ${certVis ? styles.sectionVisible : ''}`}
      >
        <div className={styles.sectionInner}>
          <SectionTitle>Idiomas & Certificações</SectionTitle>
          <div className={styles.langGrid}>
            {languages.map((lang) => (
              <div key={lang.language} className={styles.langCard}>
                <span className={styles.langName}>{lang.language}</span>
                <span className={styles.langLevel}>{lang.level}</span>
              </div>
            ))}
          </div>
          <ul ref={certListRef} className={styles.certList}>
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className={`${styles.certItem} ${openCert === cert.name ? styles.certItemOpen : ''}`}
                onClick={() => toggleCert(cert.name)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleCert(cert.name); } }}
                role="button"
                tabIndex={0}
                aria-expanded={openCert === cert.name}
              >
                <span className={styles.certName}>
                  {cert.name}
                  <span className={styles.certArrowWrap}>
                    <svg className={styles.certArrow} viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className={styles.certCloseHint}>(clique para fechar)</span>
                  </span>
                </span>
                <div className={styles.certPreview}>
                  <div className={styles.certPreviewInner}>
                    <div className={styles.certFrame}>
                      <img src={cert.image} alt={cert.name} className={styles.certImg} loading="lazy" width="800" height="600" />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        ref={ctaRef}
        className={`${styles.cta} ${ctaVis ? styles.ctaVisible : ''}`}
      >
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Quer ver meus projetos?</h2>
          <p className={styles.ctaText}>
            Conheça os trabalhos que desenvolvi — de automações com IA a aplicações full-stack.
          </p>
          <Link to="/projetos" className={styles.ctaLink}>
            Ver Projetos &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { profile } from '../data/profile';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Contato.module.css';

export default function Contato() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div className={styles.page}>
      <SEO
        title="Contato"
        description={`Entre em contato com ${profile.name} — ${profile.role}. Estou aberto a oportunidades e novos desafios.`}
        path="/contato"
      />
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <p className={styles.introLabel}>Contato</p>
          <h1 className={styles.introTitle}>Vamos conversar</h1>
          <p className={styles.introText}>
            Estou aberto a oportunidades e novos desafios. Se você tem uma vaga, um projeto ou só quer trocar uma ideia, me chame!
          </p>
        </div>
      </section>

      <section
        ref={ref}
        className={`${styles.contact} ${isVisible ? styles.contactVisible : ''}`}
      >
        <div className={styles.contactInner}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Informações</h2>

            <div className={styles.item}>
              <span className={styles.itemLabel}>Email</span>
              <a href={`mailto:${profile.email}`} className={styles.itemValue}>
                {profile.email}
              </a>
            </div>

            <div className={styles.item}>
              <span className={styles.itemLabel}>Localização</span>
              <span className={styles.itemValue}>{profile.location}</span>
            </div>

            <div className={styles.links}>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                LinkedIn &rarr;
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                GitHub &rarr;
              </a>
            </div>
          </div>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <h2 className={styles.cardTitle}>Envie uma mensagem</h2>

            <div className={styles.field}>
              <label htmlFor="nome" className={styles.label}>Nome</label>
              <input type="text" id="nome" className={styles.input} placeholder="Seu nome" required />
            </div>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input type="email" id="email" className={styles.input} placeholder="seu@email.com" required />
            </div>

            <div className={styles.field}>
              <label htmlFor="mensagem" className={styles.label}>Mensagem</label>
              <textarea id="mensagem" className={styles.textarea} rows={5} placeholder="Sua mensagem..." required />
            </div>

            <motion.button
              type="submit"
              className={styles.btn}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.1, ease: [0.25, 1, 0.5, 1] }}
            >
              Enviar Mensagem
            </motion.button>
          </form>
        </div>
      </section>
    </div>
  );
}

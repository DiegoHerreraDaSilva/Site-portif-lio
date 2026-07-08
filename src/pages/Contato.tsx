import type { FormEvent } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { profile } from '../data/profile';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Contato.module.css';

export default function Contato() {
  const { ref, isVisible } = useScrollReveal();
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })
      .then((res) => {
        if (res.ok) setSent(true);
        else alert('Erro ao enviar. Tente novamente.');
      })
      .catch(() => alert('Erro de conexão. Tente novamente.'));
  }

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

          {sent ? (
            <div className={styles.form}>
              <h2 className={styles.cardTitle}>Mensagem enviada!</h2>
              <p className={styles.sentText}>Obrigado pelo contato. Responderei em breve.</p>
            </div>
          ) : (
          <form
            className={styles.form}
            action="https://formspree.io/f/xykqqeak"
            method="POST"
            onSubmit={handleSubmit}
          >
            <h2 className={styles.cardTitle}>Envie uma mensagem</h2>

            <div className={styles.field}>
              <label htmlFor="nome" className={styles.label}>Nome</label>
              <input type="text" id="nome" name="nome" className={styles.input} placeholder="Seu nome" required />
            </div>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input type="email" id="email" name="email" className={styles.input} placeholder="seu@email.com" required />
            </div>

            <div className={styles.field}>
              <label htmlFor="mensagem" className={styles.label}>Mensagem</label>
              <textarea id="mensagem" name="mensagem" className={styles.textarea} rows={5} placeholder="Sua mensagem..." required />
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
          )}
        </div>
      </section>
    </div>
  );
}

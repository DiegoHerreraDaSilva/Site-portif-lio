import { useEffect, useState } from 'react';
import { profile } from '../data/profile';
import styles from './Footer.module.css';

export function Footer() {
  const [ready, setReady] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className={`${styles.footer} ${ready ? styles.visible : ''}`}>
      <div className={styles.inner}>
        <div className={styles.links}>
          <a href={`mailto:${profile.email}`} className={styles.link}>
            Email
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={styles.link}>
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
            GitHub
          </a>
        </div>
        <p className={styles.copy}>
          &copy; {year} {profile.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';

interface Props {
  title: string;
  description: string;
  stack: string[];
  github?: string;
}

export function ProjectCard({ title, description, stack, github }: Props) {
  return (
    <motion.article
      className={styles.card}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.25, 1, 0.5, 1] } }}
    >
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.stack}>
          {stack.map((tech) => (
            <span key={tech} className={styles.tag}>{tech}</span>
          ))}
        </div>
      </div>
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Ver no GitHub &rarr;
        </a>
      )}
    </motion.article>
  );
}

import styles from './SkillTag.module.css';

interface Props {
  children: string;
}

export function SkillTag({ children }: Props) {
  return <span className={styles.tag}>{children}</span>;
}

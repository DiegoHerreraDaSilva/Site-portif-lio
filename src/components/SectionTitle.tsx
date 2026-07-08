import styles from './SectionTitle.module.css';

interface Props {
  children: string;
  id?: string;
}

export function SectionTitle({ children, id }: Props) {
  return (
    <h2 id={id} className={styles.title}>
      {children}
    </h2>
  );
}

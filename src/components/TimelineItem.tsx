import styles from './TimelineItem.module.css';

interface Props {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

export function TimelineItem({ role, company, period, location, highlights }: Props) {
  return (
    <div className={styles.item}>
      <div className={styles.dot} aria-hidden="true" />
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.period}>{period}</span>
          <span className={styles.sep}>·</span>
          <span className={styles.location}>{location}</span>
        </div>
        <h3 className={styles.role}>{role}</h3>
        <p className={styles.company}>{company}</p>
        <ul className={styles.highlights}>
          {highlights.map((h, i) => (
            <li key={i} className={styles.highlight}>{h}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

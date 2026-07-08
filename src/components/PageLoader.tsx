import styles from './PageLoader.module.css';

const HEADER_HEIGHT = 64;

export function PageLoader() {
  return (
    <div
      className={styles.loader}
      style={{ minHeight: `calc(100vh - ${HEADER_HEIGHT}px)` }}
      aria-hidden="true"
    />
  );
}

import styles from "./editorial.module.css";

export function EditorialPageIntro({ label, title, description }: { label: string; title: string; description: string }) {
  return (
    <header className={styles.pageIntro}>
      <p className={styles.label}>{label}</p>
      <h1>{title}</h1>
      <p className={styles.description}>{description}</p>
    </header>
  );
}

import styles from "./header.module.scss";

export default function Header({ title, subtitle }) {
  return (
    <>
      <header className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
      </header>
    </>
  );
}

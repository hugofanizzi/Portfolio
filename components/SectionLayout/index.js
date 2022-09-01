import styles from "./sectionlayout.module.scss";

export default function SectionLayout({ children }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.line}></div>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}

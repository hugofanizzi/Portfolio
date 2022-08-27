import styles from "./sectionlayout.module.scss";

export default function SectionLayout({ children }) {
  return (
    <>
      <div className={styles.container}>
        <main>{children}</main>
        <div className={styles.line}></div>
      </div>
    </>
  );
}

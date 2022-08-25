import styles from "./sectionlayout.module.scss";

export default function SectionLayout({ childrem }) {
  return (
    <>
      <div className={styles.container}>
        <main>{childrem}</main>
        <div className={styles.line}></div>
      </div>
    </>
  );
}

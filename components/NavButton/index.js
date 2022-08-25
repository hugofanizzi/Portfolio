import Link from "next/link";
import styles from "./navbutton.module.scss";

export default function NavButton({ tittle, src, description }) {
  return (
    <div className={styles.container}>
      <Link href={src}>
        <a className={styles.navItem}>{tittle}</a>
      </Link>
      <p className={description && styles.navItemDescription}>{description}</p>
    </div>
  );
}

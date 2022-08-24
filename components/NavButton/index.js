import Link from "next/link";
import styles from "./navbutton.module.scss";

export default function NavButton({ tittle, src }) {
  return (
    <>
      <Link href={src}>
        <a className={styles.navItem}>{tittle}</a>
      </Link>
    </>
  );
}

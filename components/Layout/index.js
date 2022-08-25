import styles from "./layout.module.scss";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta http-Equiv="Content-Type" content="text/html;charset=UTF-8" />
        <title>Hugo José Esparza Fanizzi</title>
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.profession}>WEB DEVELOPER</h1>
          <h2 className={styles.name}>HUGO ESPARZA</h2>
        </header>
        <main>{children}</main>
      </div>
    </>
  );
}

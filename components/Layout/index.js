import styles from "./layout.module.scss";
import Head from "next/head";
import Header from "components/Header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="initial-scale=1" />
        <title>Hugo Esparza</title>
      </Head>
      <Header title={"Web Developer"} subtitle={"Hugo Esparza"} />
      <main className={styles.main}>{children}</main>
    </>
  );
}

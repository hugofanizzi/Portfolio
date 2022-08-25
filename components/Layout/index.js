import styles from "./layout.module.scss";
import Head from "next/head";
import Header from "components/Header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta http-Equiv="Content-Type" content="text/html;charset=UTF-8" />
        <title>Hugo José Esparza Fanizzi</title>
      </Head>
      <div className={styles.container}>
        <Header
          title={"Web Developer"}
          subtitle={"Hugo José Esparza Fanizzi"}
        />
        <main>{children}</main>
      </div>
    </>
  );
}

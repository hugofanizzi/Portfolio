import styles from "./Layout.module.scss";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta http-Equiv="Content-Type" content="text/html;charset=UTF-8" />
        <title>Hugo José Esparza Fanizzi</title>
      </Head>
      <main>{children}</main>
    </>
  );
}

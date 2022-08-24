import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import photo_profile from "images/profile.png";
import NavButton from "components/NavButton";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Image
          className={styles.profilePicture}
          src={photo_profile}
          alt="profile picture"
          width={400}
          height={400}
        />
        <nav className={styles.navContainer}>
          <NavButton tittle={"ABOUT ME"} src={"#"}></NavButton>
          <NavButton tittle={"EDUCATION"} src={"#"}></NavButton>
          <NavButton tittle={"PROYECTS"} src={"#"}></NavButton>
          <NavButton tittle={"CONTACT ME"} src={"#"}></NavButton>
        </nav>
      </div>
    </>
  );
}

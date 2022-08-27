import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import photo_profile from "images/profile.png";
import NavButton from "components/NavButton";
import SectionLayout from "components/SectionLayout";
import AboutMe from "components/AboutMe";

export default function Home({ information }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.photoProfileContainer}>
          <Image
            className={styles.profilePicture}
            src={photo_profile}
            alt="profile picture"
            layout="responsive"
          />
        </div>
        <div className={styles.navContainer}>
          <nav className={styles.nav}>
            {information.map((info) => (
              <NavButton
                tittle={info.name}
                src={"#"}
                description={info.summary}
              />
            ))}
          </nav>
        </div>
      </div>
      <SectionLayout>
        <AboutMe
          name={information[0].name}
          title={information[0].title}
          subtitle={information[0].story}
          personalObjectives={information[0].personalObjectives}
          jobsGoals={information[0].jobsGoals}
          whyMe={information[0].whyMe}
        />
      </SectionLayout>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/information");
  const information = await response.json();
  return {
    props: {
      information,
    },
  };
}

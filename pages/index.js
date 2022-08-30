import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import photo_profile from "images/profile.png";
import NavButton from "components/NavButton";
import SectionLayout from "components/SectionLayout";
import AboutMe from "components/AboutMe";
import Education from "components/Education";
import Experience from "components/Experience";
import ContactMe from "components/ContactMe";

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
                key={info.id}
                tittle={info.name}
                src={info.name}
                description={info.summary}
              />
            ))}
          </nav>
        </div>
      </div>
      <SectionLayout>
        <a name={information[0].name}></a>
        <AboutMe
          name={information[0].name}
          title={information[0].title}
          subtitle={information[0].subtitle}
          story={information[0].story}
          personalObjetives={information[0].personalObjetives}
          jobsGoals={information[0].jobsGoals}
          whyMe={information[0].whyMe}
        />
      </SectionLayout>
      <SectionLayout>
        <a name={information[1].name}></a>
        <Education
          name={information[1].name}
          trainings={information[1].trainings}
        />
      </SectionLayout>
      <SectionLayout>
        <a name={information[2].name}></a>
        <Experience
          name={information[2].name}
          experiences={information[2].experiences}
        />
      </SectionLayout>
      <SectionLayout>
        <a name={information[3].name}></a>
        <ContactMe
          name={information[3].name}
          titleName={information[3].titleName}
          titleMessage={information[3].titleMessage}
          titleEmail={information[3].titleEmail}
          titleSend={information[3].titleSend}
        />
      </SectionLayout>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    "https://portfolio-hugofanizzi.vercel.app/api/information"
  );
  const information = await response.json();
  return {
    props: {
      information,
    },
  };
}

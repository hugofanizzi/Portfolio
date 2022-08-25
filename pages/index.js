import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import photo_profile from "images/profile.png";
import NavButton from "components/NavButton";

export default function Home() {
  const descriptionAboutMe = `He empezado a trabajar desde los 15 años siempre me han enseñado a resolver problemas y poco a poco voy aprendiendo a medida que los voy solucionando, esto me ha llevado a siempre salir de la zona de confort y avanzar. Me gusta aprender constantemente y si puedo mejorar algo en el `;

  const descriptionEducation = `Adecco Tu Carrera DigitalAdecco Tu Carrera Digital
  Full stack developer Junior / Java, Programación informática, aplicaciones específicasFull stack developer Junior / Java, Programación informática, aplicaciones específicas
  abr. 2022 - jul. 2022abr. 2022 - jul. 2022
  Titulación: Certificado de Aprovechamiento // Garantía JuvenilTitulación: Certificado de Aprovechamiento // Garantía Juvenil
  Estudios realizados a través del programa garantía Juvenil`;

  const descriptionContactMe = `Tu perfil
  linkedin.com/in/hugo-jose-esparza-fanizzi-desarrollador-web
  Sitio web
  github.com/hugofanizzi (Personal)
  Número de teléfono
  675385466 (Móvil)
  Dirección
  Madrid
  Email
  hj.esparzaf@gmail.com`;
  return (
    <>
      <div className={styles.container}>
        <div className={styles.div}>
          <Image
            className={styles.profilePicture}
            src={photo_profile}
            alt="profile picture"
            layout="responsive"
          />
        </div>
        <div className={styles.navContainer}>
          <nav className={styles.nav}>
            <NavButton
              tittle={"ABOUT ME"}
              src={"#"}
              description={descriptionAboutMe}
            ></NavButton>
            <NavButton
              tittle={"EDUCATION"}
              src={"#"}
              description={descriptionEducation}
            ></NavButton>
            <NavButton tittle={"PROYECTS"} src={"#"}></NavButton>
            <NavButton
              tittle={"CONTACT ME"}
              src={"#"}
              description={descriptionContactMe}
            ></NavButton>
          </nav>
        </div>
      </div>
    </>
  );
}

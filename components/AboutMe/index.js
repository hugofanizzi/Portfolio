import styles from "./aboutme.module.scss";

export default function AboutMe({
  name,
  title,
  subtitle,
  story,
  personalObjectives,
  jobsGoals,
  whyMe,
  photoURL,
  callToAction,
}) {
  <div className={styles.container}>
    <h1 className={styles.name}>{name}</h1>
    <h2 className={styles.title}>{title}</h2>
    <h3 className={styles.subtitle}>{subtitle}</h3>
    <br />
    <text className={styles.story}>{story}</text>
  </div>;
}

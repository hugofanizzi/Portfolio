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
  function createMarkup(c) {
    return { __html: c };
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.name}>{name}</h1>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.subtitle}>{subtitle}</h3>
      <br />
      <text
        className={styles.story}
        dangerouslySetInnerHTML={createMarkup(story)}
      ></text>
      <ul className={styles.personalObjectives}>
        {personalObjectives.map((objetive) => (
          <li>{objetive}</li>
        ))}
      </ul>
      <ul className={styles.jobsGoals}>
        {jobsGoals.map((goals) => (
          <li>{goals}</li>
        ))}
      </ul>
      <p className={styles.whyMe}>{whyMe}</p>
    </div>
  );
}

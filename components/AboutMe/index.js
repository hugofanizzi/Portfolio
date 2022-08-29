import styles from "./aboutme.module.scss";
import { createMarkup } from "utilities";

export default function AboutMe({
  name,
  title,
  subtitle,
  story,
  personalObjetives,
  jobsGoals,
  whyMe,
  photoURL,
  callToAction,
}) {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>{name}</h1>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.subtitle}>{subtitle}</h3>
      <div className={styles.containerContentTitle}>
        <h3 className={styles.contentTitle}>{story.contentTitle}</h3>
      </div>
      <p
        className={styles.story}
        dangerouslySetInnerHTML={createMarkup(story.content)}
      ></p>
      <div className={styles.containerContentTitle}>
        <h3 className={styles.contentTitle}>
          {personalObjetives.contentTitle}
        </h3>
      </div>
      <ul className={styles.personalObjetives}>
        {personalObjetives.content.map((objetive) => (
          <li>{objetive}</li>
        ))}
      </ul>
      <div className={styles.containerContentTitle}>
        <h3 className={styles.contentTitle}>{jobsGoals.contentTitle}</h3>
      </div>
      <ul className={styles.jobsGoals}>
        {jobsGoals.content.map((goals) => (
          <li>{goals}</li>
        ))}
      </ul>
      <div className={styles.containerContentTitle}>
        <h3 className={styles.contentTitle}>{whyMe.contentTitle}</h3>
      </div>
      <p
        className={styles.whyMe}
        dangerouslySetInnerHTML={createMarkup(whyMe.content)}
      ></p>
    </div>
  );
}

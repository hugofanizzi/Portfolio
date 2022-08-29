import styles from "./education.module.scss";

export default function Education({ name, trainings }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>{name}</h1>

      {trainings.map((training) => (
        <div className={styles.trainingsContainer}>
          <div className={styles.containerTrainingTitle}>
            <h3 className={styles.trainingTitle}>{training.title}</h3>
          </div>
          <h3 className={styles.trainingCenter}>
            {training.trainingCenter} / {training.year}
          </h3>
          <h3 className={styles.timeContents}>{training.timeContents}</h3>
          <ul>
            {training.contents &&
              training.contents.map((content) => (
                <li className={styles.title}>{content}</li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

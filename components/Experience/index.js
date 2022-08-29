import styles from "./experience.module.scss";

export default function Experience({ name, experiences }) {
  return (
    <>
      <h1>{name}</h1>
      {experiences.map((experience) => (
        <div>
          <div className={styles.containerJobTitle}>
            <h3 className={styles.jobTitle}>{experience.job}</h3>
          </div>
          <h3>
            {experience.company} / {experience.timeWorking}
          </h3>
          <ul>
            {experience.functions &&
              experience.functions.map((eachFunction) => (
                <li>{eachFunction}</li>
              ))}
          </ul>
        </div>
      ))}
    </>
  );
}

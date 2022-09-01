import styles from "./experience.module.scss";

export default function Experience({ name, experiences }) {
  return (
    <>
      <h1>{name}</h1>
      {experiences.map((experience) => (
        <div key={experience.id}>
          <div className={styles.containerr}>
            <h3 className={styles.jobTitle}>{experience.job}</h3>
            <div className={styles.underlineJobTitle}></div>
          </div>
          <h3>
            {experience.company} / {experience.timeWorking}
          </h3>
          <ul>
            {experience.functions &&
              experience.functions.map((eachFunction) => (
                <li key={eachFunction.id}>{eachFunction.description}</li>
              ))}
          </ul>
        </div>
      ))}
    </>
  );
}

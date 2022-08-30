import styles from "./contactme.module.scss";

export default function ContactMe({
  name,
  titleName,
  titleMessage,
  titleEmail,
  titleSend,
  isDisabled,
}) {
  return (
    <>
      <form className={styles.formContainer} action="#">
        <h1>{name}</h1>
        <h3>{titleName}</h3>
        <input className={styles.inputName} type="text" />
        <h3>{titleEmail}</h3>
        <input className={styles.inputEmail} type="email" />
        <h3>{titleMessage}</h3>
        <textarea className={styles.textAreaMessage} name="" id=""></textarea>
        <input
          className={styles.inputSubmit}
          type="submit"
          name={titleSend}
          id=""
        />
      </form>
    </>
  );
}

import styles from "./contactme.module.scss";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe({
  name,
  titleName,
  titleMessage,
  titleEmail,
  titleSend,
  titleSending,
}) {
  const form = useRef();

  const [titleSubmit, setTitleSubmit] = useState(titleSend);

  const sendEmail = (e) => {
    e.preventDefault();

    setTitleSubmit(titleSending);

    emailjs
      .sendForm(
        "service_dv0viuq",
        "template_ynrye2e",
        form.current,
        "JY0pkAQiJ3vqHPG_3"
      )
      .then(
        (result) => {
          setTitleSubmit(titleSend);
          alert(`Su mensaje ha sido enviado correctamente`);
          e.target.reset();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <form
        className={styles.formContainer}
        action="post"
        ref={form}
        onSubmit={sendEmail}
      >
        <h1>{name}</h1>
        <label>{titleName}</label>
        <input
          className={styles.inputName}
          type="text"
          name="user_name"
          required
        />
        <label>{titleEmail}</label>
        <input
          className={styles.inputEmail}
          type="email"
          name="user_email"
          required
        />
        <label>{titleMessage}</label>
        <textarea
          className={styles.textAreaMessage}
          name="message"
          required
        ></textarea>
        <input
          className={styles.inputSubmit}
          type="submit"
          value={titleSubmit}
        />
      </form>
    </>
  );
}

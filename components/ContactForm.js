import React, { useState } from "react";
import axios from "axios";
import styles from "./Form.module.css";

const ContactForm = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    message: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/[your-formspree-endpoint]",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <div>
      <h2 className={styles.title}>RSVP</h2>
      <form onSubmit={handleOnSubmit} className={styles.form}>
        <input type="text" name="text" className={styles.myclass} />
        <input type="hidden" name="_subject" value="RSVP från hemsidan" />
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
          placeholder="ex hjalmar@gmail.com"
          className={styles.input}
        />
        <label htmlFor="name" className={styles.label}>
          Namn
        </label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleOnChange}
          required
          value={inputs.name}
          className={styles.input}
          placeholder="ex Hjalmar Borgert, Thea Fridh, Sonja Fridh"
          multiple
        />
        <label htmlFor="svar_1" className={styles.label}>
          Kan komma
        </label>

        <input
          type="checkbox"
          id="svar_1"
          name="svar_ja"
          value="ja"
          className={styles.checkbox}
        />

        <label htmlFor="svar_2" className={styles.label}>
          Kan inte komma
        </label>
        <input
          type="checkbox"
          id="svar_2"
          name="svar_nej"
          value="nej"
          className={styles.checkbox}
        />
        <label htmlFor="message" className={styles.label}>
          Kostpreferenser
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="ex Hjalmar: vegetarian och/eller Tove: nötallergi"
          onChange={handleOnChange}
          value={inputs.message}
          className={styles.input}
        />
        <button
          type="submit"
          disabled={status.submitting}
          className={styles.button}
        >
          {!status.submitting
            ? !status.submitted
              ? "Skicka"
              : "Submitted"
            : "Submitting..."}
        </button>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </div>
  );
};

export default ContactForm;

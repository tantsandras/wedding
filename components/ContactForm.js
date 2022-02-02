import React, { useState } from "react";
import axios from "axios";
import styles from "./Form.module.css";

const ContactForm = () => {
  const [status, setStatus] = useState({
    skickat: false,
    skickas: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: "",
    namn: "",
    kan_komma: "",
    kostpreferenser: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        skickat: true,
        skickas: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        namn: "",
        kan_komma: "",
        kostpreferenser: "",
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
      skickat: false,
      skickas: false,
      info: { error: false, msg: null },
    });
    console.log(inputs);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, skickas: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/xnqwpvqg",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(true, "Tack! Ditt svar har skickats.");
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <div>
      <h2 className={styles.title}>RSVP</h2>
      <form id="RSVP form" onSubmit={handleOnSubmit} className={styles.form}>
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
        <label htmlFor="namn" className={styles.label}>
          Namn
        </label>
        <input
          id="namn"
          name="namn"
          type="text"
          onChange={handleOnChange}
          required
          value={inputs.namn}
          className={styles.input}
          placeholder="ex Hjalmar Borgert, Thea Fridh, Sonja Fridh"
          multiple
        />
        <label htmlFor="kan_komma" className={styles.label}>
          Kan komma?
        </label>
        <select
          id="kan_komma"
          name="kan_komma"
          type="select"
          required
          value={inputs.kan_komma}
          form="RSVP form"
          className={styles.input}
          onChange={handleOnChange}
        >
          <option value="ja">Ja</option>
          <option value="nej">Nej</option>
        </select>
        <label htmlFor="kostpreferenser" className={styles.label}>
          Kostpreferenser
        </label>
        <textarea
          id="kostpreferenser"
          name="kostpreferenser"
          placeholder="ex Hjalmar: vegetarian och/eller Tove: nötallergi"
          onChange={handleOnChange}
          value={inputs.kostpreferenser}
          className={styles.input}
        />
        <button
          type="submit"
          disabled={status.skickas}
          className={styles.button}
        >
          {!status.skickas
            ? !status.skickat
              ? "Skicka"
              : "Skickat"
            : "Skickas..."}
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

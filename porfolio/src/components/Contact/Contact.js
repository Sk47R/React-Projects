import React, { useContext, useRef, useState } from "react";
import style from "./Contact.module.css";
import phone from "../../img/phone.png";
import email from "../../img/email.png";
import address from "../../img/address.png";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../Context";

function Contact() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const formRef = useRef();
  const [filled, updateFilled] = useState(false);
  const [enteredName, updateEnteredName] = useState("");
  const [enteredSubject, updateEnteredSubject] = useState("");
  const [enteredMail, updateEnteredMail] = useState("");
  const [enteredMessage, updateEnteredMessage] = useState("");

  const nameHandler = (event) => {
    updateEnteredName(event.target.value);
  };
  const subjectHandler = (event) => {
    updateEnteredSubject(event.target.value);
  };
  const mailHandler = (event) => {
    updateEnteredMail(event.target.value);
  };
  const messageHandler = (event) => {
    updateEnteredMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_9chjbml",
        "template_otp3jey",
        formRef.current,
        "user_eX0DHCKDPEGMNUaioUhpp"
      )
      .then(
        (result) => {
          console.log(result.text);
          updateFilled(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    updateEnteredMail("");
    updateEnteredMessage("");
    updateEnteredName("");
    updateEnteredSubject("");
  };

  return (
    <div className={style.contact}>
      <div className={style["contact-bg"]}></div>
      <div className={style["contact-wrapper"]}>
        <div className={style["contact-left"]}>
          <h1 className={style["contact-title"]}>Let's discuss your project</h1>
          <div className={style["contact-info"]}>
            <div className={style["contact-info-item"]}>
              <img src={phone} className={style["contact-icon"]}></img>
              +977-9810151219
            </div>
            <div className={style["contact-info-item"]}>
              <img src={email} className={style["contact-icon"]}></img>
              sujankapali50@gmail.com
            </div>
            <div className={style["contact-info-item"]}>
              <img src={address} className={style["contact-icon"]}></img>
              Mangalbazzar, Lalitpur
            </div>
          </div>
        </div>
        <div className={style["contact-right"]}>
          <p className={style["contact-desc"]}>
            <strong>What's your story?</strong> Write a mail to get in touch.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
              onChange={nameHandler}
              value={enteredName}
            ></input>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="subject"
              onChange={subjectHandler}
              value={enteredSubject}
            ></input>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
              onChange={mailHandler}
              value={enteredMail}
            ></input>
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
              onChange={messageHandler}
              value={enteredMessage}
            ></textarea>
            <button>Submit</button>
            {filled && "ThankYou!..."}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

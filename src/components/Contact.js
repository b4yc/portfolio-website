import ProfileImg from "../images/thumbs-up.png";
import "./contact.css";
import { FontAwesome } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import React, { useState } from "react";
AOS.init();
init("user_0PcpR2PKFTLkwaRXJOTMc");

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [messageSentError, setMessageSentError] = useState(false);

  function validateEmail(email) {
    const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
    return re.test(String(email).toLowerCase());
  }

  const clearError = () => {
    console.log("clearing error");
    setError(false);
    setErrorMessage(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    clearError();
    if (!name) {
      setErrorMessage("Please enter your name");
      setError(true);
      return;
    }
    if (!email) {
      setErrorMessage("Please enter an email");
      setError(true);
      return;
    }
    if (validateEmail(email) === false) {
      setErrorMessage("Your email is invalid");
      setError(true);
      return;
    }

    if (!subject) {
      setErrorMessage("Please enter a subject");
      setError(true);
      return;
    }

    if (!message) {
      setErrorMessage("Please enter your message");
      setError(true);
      return;
    }

    let templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };
    emailjs
      .send(
        "service_r2rtdrn",
        "template_vsufaj9",
        templateParams,
        "user_0PcpR2PKFTLkwaRXJOTMc"
      )
      .then(
        (result) => {
          setMessageSent(true);
        },
        (error) => {
          setMessageSentError(true);
        }
      );
  };

  return (
    <div id="contact">
      <h1>Contact</h1>
      <div className="contact-container">
        <div className="received-container" data-aos="zoom-in-right">
          <img src={ProfileImg} width="100px" height="100px"></img>
          <div>
            <p className="received-message">
              I'd love to chat with you about anything! Don't like forms? No
              worries - you can send me an
              <a href="mailto:cbaylee123@gmail.com"> email </a>
              instead.
            </p>
          </div>
        </div>
        <div className="error-message">{error && errorMessage}</div>
        {messageSentError && (
          <div className="error-message">
            Sorry, something went wrong and your message couldn't be sent. Try
            sending me an email instead.
          </div>
        )}
        <div className="send-container">
          {!messageSent && (
            <form onSubmit={handleSubmit}>
              <div className="input">
                <input
                  className="input-field"
                  type="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="input-field"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="input-field"
                  placeholder="Subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                  className="input-field message-field"
                  placeholder="Message  "
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <FaPaperPlane
                className="icon send-icon"
                type="submit"
                onClick={handleSubmit}
              />
            </form>
          )}
          {messageSent && (
            <div className="sent-message" data-aos="zoom-in-left">
              <p>{message}</p>
            </div>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Contact;

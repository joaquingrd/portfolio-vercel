import "./Contact.css";
import React from "react";
import { useSelector } from "react-redux";

const Contact = () => {
  const language = useSelector((state) => state.language);
  console.log("Language = " + language + " About");

  const ContactData = useSelector((state) => state.data);

  return (
    <section className="Contact" id="contact">
      <div className="skills-title">
        <p>{ContactData.contact}</p>
      </div>
      <div className="contact-icon">
        <a
          href="https://www.linkedin.com/in/joaquindev/"
          rel="noopener noreferrer"
          target="_blank"
          title="https://www.linkedin.com/in/joaquindev/"
        >
          <i className="icon bi bi-linkedin"></i>
        </a>
        <a
          href="https://github.com/joaquingrd"
          rel="noopener noreferrer"
          target="_blank"
          title="https://github.com/joaquingrd"
        >
          <i className="icon bi bi-github"></i>
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=5491160327735&text=Hola+Joaquin%21+Me+interesa+tu+perfil+como+Full-Stack+Developer&type=phone_number&app_absent=0"
          rel="noopener noreferrer"
          target="_blank"
          title="+54 11 6032 7735"
        >
          <i className="icon bi bi-whatsapp"></i>
        </a>
        <a
          href="mailto:joaquing.ruizdiaz@gmail.com?subject=Portfolio - Full Stack Developer&body=Hola Joaquin, vi tu portfolio y me gustaria marcar una entrevista para conocerte un poco mas."
          title="joaquing.ruizdiaz@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="icon bi bi-envelope"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;

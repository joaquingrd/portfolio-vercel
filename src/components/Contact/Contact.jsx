import "./Contact.css";

const Contact = () => {
  return (
    <section class="Contact" id="contact">
      <div class="skills-title">
        <p>Contacto</p>
      </div>
      <div class="contact-icon">
        <a
          href="https://www.linkedin.com/in/joaquindev/"
          rel="noopener noreferrer"
          target="_blank"
          title="https://www.linkedin.com/in/joaquindev/"
        >
          <i class="icon bi bi-linkedin"></i>
        </a>
        <a
          href="https://github.com/joaquingrd"
          rel="noopener noreferrer"
          target="_blank"
          title="https://github.com/joaquingrd"
        >
          <i class="icon bi bi-github"></i>
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=5491160327735&text=Hola+Joaquin%21+Me+interesa+tu+perfil+como+Full-Stack+Developer&type=phone_number&app_absent=0"
          rel="noopener noreferrer"
          target="_blank"
          title="+54 11 6032 7735"
        >
          <i class="icon bi bi-whatsapp"></i>
        </a>
        <a
          href="mailto:joaquing.ruizdiaz@gmail.com?subject=Portfolio - Full Stack Developer&body=Hola Joaquin, vi tu portfolio y me gustaria marcar una entrevista para conocerte un poco mas."
          title="joaquing.ruizdiaz@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="icon bi bi-envelope"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;

import "./About.css";
import { Icon } from "@iconify/react";

const About = () => {
  return (
    <section class="about" id="about">
      <div
        class="about-text1"
        data-aos="fade-right"
        data-aos-anchor-placement="bottom-bottom"
      >
        <p>
          Como Desarrollador Web Full Stack, cuento con amplia experiencia en
          diversas tecnologías como{" "}
          <b>
            Javascript, EcmaScript 6, React, Redux, Node.js, Express,
            PostgreSQL, Sequelize, HTML5, CSS3 y TypeScript.{" "}
          </b>
          Además, estoy familiarizado con herramientas de trabajo colaborativo
          como <b>Git, GitHub, Slack y Trello</b>, y he trabajado en equipos
          ágiles bajo <b>metodologías Scrum</b>.
        </p>
      </div>

      <div
        class="about-text2"
        data-aos="fade-left"
        data-aos-anchor-placement="center-bottom"
      >
        <p>
          Soy una persona
          <b> comunicativa, analítica y organizada</b>, con una gran capacidad
          para <b>adaptarme</b> a diferentes situaciones y{" "}
          <b>trabajar en equipo</b>. <b>Disfruto aprendiendo</b> y estoy
          <b> constantemente en busca de nuevos conocimientos</b>, tecnologías y
          metodologías de trabajo eficientes para seguir desarrollándome y
          creciendo en mi carrera profesional.
        </p>
      </div>
    </section>
  );
};

export default About;

import "./Skills.css";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import React from "react";

const Skills = () => {
  const skillsData = useSelector((state) => state.data);

  return (
    <section className="Skills">
      <div className="skills-title" id="techSkills">
        <p>{skillsData.titleSkills}</p>
      </div>
      <div
        className="iconos"
        data-aos="fade-right"
        data-aos-anchor-placement="top-bottom"
      >
        <p className="title" title="NextJS">
          <Icon className="ic" icon="logos:nextjs-icon" />
          <span className="name">NextJS</span>
        </p>
        <p className="title" title="React">
          <Icon className="ic" icon="logos:react" />
          <span className="name">React</span>
        </p>
        <p className="title" title="Redux">
          <Icon className="ic" icon="logos:redux" />
          <span className="name">Redux</span>
        </p>
        <p className="title" title="Sass">
          <Icon className="ic" icon="skill-icons:sass" />
          <span className="name">Sass</span>
        </p>
        <p className="title" title="JavaScript">
          <Icon className="ic " icon="logos:javascript" />
          <span className="name">JavaScript</span>
        </p>
        <p className="title" title="TypeScript">
          <Icon className="ic" icon="logos:typescript-icon" />
          <span className="name">TypeScript</span>
        </p>
      </div>
      <div className="iconos" data-aos="fade-left">
        <p className="title" title="NodeJS">
          <Icon className="ic" icon="vscode-icons:file-type-node2" />
          <span className="name">NodeJS</span>
        </p>
        <p className="title" title="ExpressJS">
          <Icon className="ic" icon="skill-icons:expressjs-light" />
          <span className="name">ExpressJS</span>
        </p>
        <p className="title" title="MongoDB">
          <Icon className="ic" icon="skill-icons:mongodb" />
          <span className="name">MongoDB</span>
        </p>
        <p className="title" title="PostgreSQL">
          <Icon className="ic" icon="logos:postgresql" />
          <span className="name">PostgreSQL</span>
        </p>
        <p className="title" title="Sequelize">
          <Icon className="ic" icon="skill-icons:sequelize-light" />
          <span className="name">Sequelize</span>
        </p>
      </div>
      <div className="iconos" data-aos="fade-right">
        <p className="title" title="HTML">
          <Icon className="ic" icon="vscode-icons:file-type-html" />
          <span className="name">HTML</span>
        </p>
        <p className="title" title="CSS">
          <Icon className="ic" icon="vscode-icons:file-type-css" />
          <span className="name">CSS</span>
        </p>
        <p className="title" title="Bootstrap">
          <Icon className="ic" icon="logos:bootstrap" />
          <span className="name">Bootstrap</span>
        </p>
        <p className="title" title="git">
          <Icon className="ic icono-git" icon="mdi:git" />
          <span className="name">Git</span>
        </p>
        <p className="title" title="GitHub">
          <Icon className="ic icono-github" icon="radix-icons:github-logo" />
          <span className="name">GitHub</span>
        </p>
        <p className="title" title="Agile - Scrum">
          <Icon className="ic icono-agile" icon="iconoir:agile" />
          <span className="name">Scrum</span>
        </p>
      </div>
    </section>
  );
};

export default Skills;

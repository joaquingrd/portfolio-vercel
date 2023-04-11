import "./Skills.css";
import { Icon } from "@iconify/react";

const Skills = () => {
  return (
    <section class="Skills">
      <div class="skills-title" id="techSkills">
        <p>Habilidades Tecnicas</p>
      </div>
      <div
        class="iconos"
        data-aos="fade-right"
        data-aos-anchor-placement="top-bottom"
      >
        <p title="HTML">
          <Icon className="ic" icon="vscode-icons:file-type-html" />
        </p>
        <p title="CSS">
          <Icon className="ic" icon="vscode-icons:file-type-css" />
        </p>
        <p title="Bootstrap">
          <Icon className="ic" icon="logos:bootstrap" />
        </p>
        <p title="JavaScript">
          <Icon className="ic " icon="logos:javascript" />
        </p>
        <p title="TypeScript">
          <Icon className="ic" icon="logos:typescript-icon" />
        </p>
      </div>
      <div class="iconos" data-aos="fade-left">
        <p title="React JS">
          <Icon className="ic" icon="logos:react" />
        </p>
        <p title="Redux">
          <Icon className="ic" icon="logos:redux" />
        </p>
        <p title="Node JS">
          <Icon className="ic" icon="vscode-icons:file-type-node2" />
        </p>
        <p title="Express JS">
          <Icon className="ic" icon="skill-icons:expressjs-light" />
        </p>
        <p title="Postgre SQL">
          <Icon className="ic" icon="logos:postgresql" />
        </p>
        <p title="Sequelize">
          <Icon className="ic" icon="skill-icons:sequelize-light" />
        </p>
      </div>
      <div class="iconos" data-aos="fade-right">
        <p title="git">
          <Icon className="ic icono-git" icon="mdi:git" />
        </p>
        <p title="GitHub">
          <Icon className="ic icono-github" icon="radix-icons:github-logo" />
        </p>
        <p title="Agile - Scrum">
          <Icon className="ic icono-agile" icon="iconoir:agile" />
        </p>
      </div>
    </section>
  );
};

export default Skills;

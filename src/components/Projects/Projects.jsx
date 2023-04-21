import "./Projects.css";

import { useSelector } from "react-redux";
import React from "react";
import Project from "../Project/Project";

const Projects = () => {
  const language = useSelector((state) => state.language);
  console.log("Language = " + language + " Projects");
  const data = useSelector((state) => state.data);
  console.log(data.btnModal);

  const projectData = useSelector((state) => state.projects);
  console.log(projectData);
  return (
    <section className="projects" id="project">
      {projectData.map((character) => {
        return (
          <Project
            carruselId={character.carruselId}
            imgActive={character.imgActive}
            img={character.img}
            projectName={character.projectName}
            modalId={character.modalId}
            btnModal={data.btnModal}
            modalTitle={character.modalTitle}
            text1={character.text1}
            text2={character.text2}
            text3={character.text3}
            text4={character.text4}
            text5={character.text5}
            github={character.github}
            deploy={character.deploy}
          />
        );
      })}
    </section>
  );
};

export default Projects;

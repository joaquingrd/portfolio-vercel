import "./Projects.css";
import { Icon } from "@iconify/react";
import Porfolio from "../../images/portfolio.jpg";
import Porfolio1 from "../../images/portfolio1.jpg";
import Porfolio2 from "../../images/portfolio2.jpg";
import Countries from "../../images/countries.jpg";
import Countries1 from "../../images/countries1.jpg";
import Countries2 from "../../images/countries2.jpg";
import Countries3 from "../../images/countries3.jpg";
import Countries4 from "../../images/countries4.jpg";
import Countries5 from "../../images/countries5.jpg";
import Countries6 from "../../images/countries6.jpg";
import Rick from "../../images/rick.jpg";
import Rick1 from "../../images/rick1.jpg";
import Rick2 from "../../images/rick2.jpg";
import Rick3 from "../../images/rick3.jpg";
import Rick4 from "../../images/rick4.jpg";
import Bootstrap1 from "../../images/bootstrap1.jpg";
import Bootstrap2 from "../../images/bootstrap2.jpg";
import Bootstrap4 from "../../images/bootstrap4.jpg";

import Clon1 from "../../images/clone1.jpg";
import Clon2 from "../../images/clone2.jpg";

const Projects = () => {
  return (
    <section class="projects" id="project">
      <article>
        <div class="project-wrapper">
          {/* CARRUSEL */}

          {/* PORTFOLIO */}

          <div id="carruselPorfolio" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={Porfolio} class="d-block w-100" alt="Portfolio" />
              </div>
              <div class="carousel-item">
                <img src={Porfolio1} class="d-block w-100" alt="Portfolio" />
              </div>
              <div class="carousel-item">
                <img src={Porfolio2} class="d-block w-100" alt="Portfolio" />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carruselPorfolio"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carruselPorfolio"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div class="project-body">
            <div class="project-name">
              <h2>Portfolio</h2>
            </div>
            {/* MODAL */}

            {/* Button trigger modal */}
            <div class="btn-project">
              <button
                type="button"
                class="btn btn-outline-light btn-modal"
                data-bs-toggle="modal"
                data-bs-target="#portfolio"
              >
                Leer más
              </button>
            </div>
            {/* <!-- Modal --> */}
            <div
              class="modal fade"
              id="portfolio"
              tabindex="-1"
              aria-labelledby="portfolioLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="portfolioLabel">
                      Portfolio App
                    </h1>

                    <button
                      type="button"
                      class="btn-close "
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    {" "}
                    Para diseñar la interfaz gráfica, fue utilizado{" "}
                    <b>HTML5, CSS3 y Bootrsap</b> para establecer el estilo y
                    diseño visual, luego agregué funcionalidad interactiva
                    utilizando <b>JavaScript</b> para crear animaciones,
                    transiciones y efectos visuales. Para mejorar la eficiencia
                    y escalabilidad del sitio, integré la biblioteca de{" "}
                    <b>React</b>. Además, aseguré que el sitio fuera
                    completamente <b>responsive</b> para su acceso desde
                    cualquier dispositivo.
                  </div>
                  <div class="modal-body">
                    {" "}
                    Este proyecto fue una gran oportunidad para demostrar mis
                    habilidades en diseño web y programación, así como para
                    demostrar mi creatividad e innovación en la creación de
                    soluciones técnicas.
                  </div>
                  <div class="btn-group">
                    <a
                      href="https://github.com/joaquingrd/portfolio-vercel"
                      class="btn btn-secondary"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://portfolio-joaquinrd.vercel.app/"
                      class="btn btn-secondary"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Deploy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* COUNTRIES */}

      <article>
        <div class="project-wrapper">
          {/* CARRUSEL */}

          <div id="carruselCountries" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={Countries} class="d-block w-100" alt="Countries" />
              </div>
              <div class="carousel-item">
                <img src={Countries1} class="d-block w-100" alt="Countries" />
              </div>
              <div class="carousel-item">
                <img src={Countries2} class="d-block w-100" alt="Countries" />
              </div>
              <div class="carousel-item">
                <img src={Countries3} class="d-block w-100" alt="Countries" />
              </div>
              <div class="carousel-item">
                <img src={Countries4} class="d-block w-100" alt="Countries" />
              </div>
              <div class="carousel-item">
                <img src={Countries5} class="d-block w-100" alt="Countries" />
              </div>
              <div class="carousel-item">
                <img src={Countries6} class="d-block w-100" alt="Countries" />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carruselCountries"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carruselCountries"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div class="project-body">
            <div class="project-name">
              <h2>Countries App - Full Stack</h2>
            </div>
            {/* MODAL */}

            {/* Button trigger modal */}
            <button
              type="button"
              class="btn btn-outline-light btn-modal"
              data-bs-toggle="modal"
              data-bs-target="#countries"
            >
              Leer más
            </button>

            {/* <!-- Modal --> */}
            <div
              class="modal fade"
              id="countries"
              tabindex="-1"
              aria-labelledby="countriesLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="countriesLabel">
                      Countries App
                    </h1>
                    <button
                      type="button"
                      class="btn-close "
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    {" "}
                    Se diseñó y desarrolló una App interactiva de países que
                    incluyó una landing page, home page con las cartas de los
                    países y sus banderas, detail page por cada país.
                  </div>
                  <div class="modal-body">
                    {" "}
                    Las funcionalidades incluian paginado, búsquedas por nombre
                    o ID, filtrados combinados para los países y para las
                    actividades turísticas, ordenamiento alfabético y/o por
                    número de habitantes, formulario para la creación de nuevas
                    actividades turísticas.
                  </div>
                  <div class="modal-body">
                    {" "}
                    Se utilizaron componentes basados en estándares para
                    garantizar la calidad y la compatibilidad de la App.
                  </div>
                  <div class="modal-body">
                    {" "}
                    <b>
                      Las tecnologías utilizadas incluyen JavaScript, React,
                      Redux, NodeJS, Express, Sequelize, PostgreSQL.
                    </b>
                  </div>

                  <div class="btn-group">
                    <a
                      href="https://github.com/joaquingrd/PI-Countries-Joaquin-Ruiz-Diaz"
                      class="btn btn-secondary"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://pi-countries-two.vercel.app/"
                      class="btn btn-secondary"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Deploy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* RICK AND MORTY */}

      <article>
        <div class="project-wrapper">
          {/* CARRUSEL */}

          <div id="carruselRick" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={Rick} class="d-block w-100" alt="Rick And Morty" />
              </div>
              <div class="carousel-item">
                <img src={Rick1} class="d-block w-100" alt="Rick And Morty" />
              </div>
              <div class="carousel-item">
                <img src={Rick2} class="d-block w-100" alt="Rick And Morty" />
              </div>
              <div class="carousel-item">
                <img src={Rick3} class="d-block w-100" alt="Rick And Morty" />
              </div>
              <div class="carousel-item">
                <img src={Rick4} class="d-block w-100" alt="Rick And Morty" />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carruselRick"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carruselRick"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div class="project-body">
            <div class="project-name">
              <h2>Rick & Morty - Front End</h2>
            </div>
            {/* MODAL */}

            {/* Button trigger modal */}
            <button
              type="button"
              class="btn btn-outline-light btn-modal"
              data-bs-toggle="modal"
              data-bs-target="#rick"
            >
              Leer más
            </button>

            {/* <!-- Modal --> */}
            <div
              class="modal fade"
              id="rick"
              tabindex="-1"
              aria-labelledby="rickLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="rickLabel">
                      Rick & Morty App
                    </h1>
                    <button
                      type="button"
                      class="btn-close "
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    {" "}
                    Se diseñó y desarrolló una App interactiva consumiendo los
                    datos de la API de Rick & Morty. Incluia un landing page,
                    home page con las cartas de los personajes, detail page con
                    los datos y fotos de los personajes.
                  </div>
                  <div class="modal-body">
                    {" "}
                    Las funcionalidades incluian búsquedas por nombre o ID y
                    formulario para la creación de nuevos personajes.
                  </div>
                  <div class="modal-body">
                    {" "}
                    Se utilizaron componentes basados en estándares para
                    garantizar la calidad y la compatibilidad de la App.
                  </div>
                  <div class="modal-body">
                    {" "}
                    <b>
                      Las tecnologías utilizadas incluyen JavaScript, React,
                      Redux, HTML5 y CSS3.
                    </b>
                  </div>

                  <div class="btn-group">
                    <a
                      href="https://github.com/joaquingrd/appRickandMortyM2"
                      class="btn btn-secondary"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      GitHub
                    </a>
                    {/* <a
                      href="https://pi-countries-two.vercel.app/"
                      class="btn btn-secondary"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Deploy
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* BOOTSTRAP free Code Camp*/}

      <article>
        <div class="project-wrapper">
          {/* CARRUSEL */}

          <div id="carruselBoostrap" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={Bootstrap1} class="d-block w-100" alt="Bootstrap" />
              </div>
              <div class="carousel-item">
                <img src={Bootstrap2} class="d-block w-100" alt="Bootstrap" />
              </div>
              <div class="carousel-item">
                <img src={Bootstrap4} class="d-block w-100" alt="Bootstrap" />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carruselBoostrap"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carruselBoostrap"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div class="project-body">
            <div class="project-name">
              <h2>Bootstrap - Front End</h2>
            </div>
            {/* MODAL */}

            {/* Button trigger modal */}
            <button
              type="button"
              class="btn btn-outline-light btn-modal"
              data-bs-toggle="modal"
              data-bs-target="#bootst"
            >
              Leer más
            </button>

            {/* <!-- Modal --> */}
            <div
              class="modal fade"
              id="bootst"
              tabindex="-1"
              aria-labelledby="bootstrapLevel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="bootstrapLevel">
                      Bootstrap
                    </h1>
                    <button
                      type="button"
                      class="btn-close "
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    {" "}
                    Este proyecto simple fue creado como parte de un curso de
                    Bootstrap. Se trata de un sitio web responsivo que tiene
                    como objetivo mostrar el portfolio de proyectos de un
                    programador, así como su experiencia en el uso de Bootstrap.
                  </div>
                  <div class="modal-body">
                    {" "}
                    <b>
                      Las tecnologías utilizadas incluyen HTML5, CSS3 y
                      Bootstrap5.
                    </b>
                  </div>

                  <div class="btn-group">
                    <a
                      href="https://github.com/joaquingrd/bootstrapfCC"
                      class="btn btn-secondary"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      GitHub
                    </a>
                    {/* <a
                      href="https://pi-countries-two.vercel.app/"
                      class="btn btn-secondary"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Deploy
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CLON free Code Camp */}

      <article>
        <div class="project-wrapper">
          {/* CARRUSEL */}

          <div id="carruselClon" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={Clon1} class="d-block w-100" alt="Clon" />
              </div>
              <div class="carousel-item">
                <img src={Clon2} class="d-block w-100" alt="Clon" />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carruselClon"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carruselClon"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div class="project-body">
            <div class="project-name">
              <h2>Clone React - Front End</h2>
            </div>
            {/* MODAL */}

            {/* Button trigger modal */}
            <button
              type="button"
              class="btn btn-outline-light btn-modal"
              data-bs-toggle="modal"
              data-bs-target="#clon"
            >
              Leer más
            </button>

            {/* <!-- Modal --> */}
            <div
              class="modal fade"
              id="clon"
              tabindex="-1"
              aria-labelledby="bootstrapLevel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="bootstrapLevel">
                      Clone React JS
                    </h1>
                    <button
                      type="button"
                      class="btn-close "
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    {" "}
                    Para reforzar mis conocimientos en React JS, decidí clonar
                    una página web como parte de un curso de freeCodeCamp.
                    Durante este proyecto, pude aplicar y conectar los conceptos
                    aprendidos sobre React, mientras que también adquiría nuevas
                    habilidades en CSS y mejoraba mis prácticas de desarrollo.
                    El objetivo fue mejorar la presentación visual del sitio web
                    y crear una experiencia de usuario más atractiva y
                    funcional.
                  </div>
                  <div class="modal-body">
                    {" "}
                    <b>
                      Las tecnologías utilizadas incluyen HTML5, CSS3 y React
                      JS.
                    </b>
                  </div>

                  <div class="btn-group">
                    <a
                      href="https://github.com/joaquingrd/projectFCC1/tree/main/mi-app-clonessssss"
                      class="btn btn-secondary"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      GitHub
                    </a>
                    {/* <a
                      href="https://pi-countries-two.vercel.app/"
                      class="btn btn-secondary"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Deploy
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Projects;

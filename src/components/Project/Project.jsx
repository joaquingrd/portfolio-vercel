import "./Project.css";
import React from "react";

import pictures from "../../images/pictures";

const Project = ({
  carruselId,
  imgActive,
  img,
  projectName,
  modalId,
  btnModal,
  modalTitle,
  text1,
  text2,
  text3,
  text4,
  text5,
  gituhub,
  deploy,
}) => {
  return (
    <section className="project" id="project">
      {/* PROYECTO = */}

      <article>
        <div className="project-wrapper">
          {/* CARRUSEL */}

          <div id={carruselId} className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={pictures[imgActive]} />
              </div>
              <div>
                {img.map((image) => (
                  <div className="carousel-item">
                    <img src={pictures[image.name]} />
                  </div>
                ))}
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={`#${carruselId}`}
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={`#${carruselId}`}
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div className="project-body">
            <div className="project-name">
              <h2>{projectName}</h2>
            </div>
            {/* MODAL */}

            {/* Button trigger modal */}
            <button
              type="button"
              className="btn btn-outline-light btn-modal"
              data-bs-toggle="modal"
              data-bs-target={`#${modalId}`}
            >
              {btnModal}
            </button>

            <div
              className="modal fade"
              id={modalId}
              tabIndex="-1"
              aria-labelledby={`${modalId}Label`}
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id={`${modalId}Label`}>
                      {modalTitle}
                    </h1>
                    <button
                      type="button"
                      className="btn-close "
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">{text1}</div>
                  <div className="modal-body">{text2}</div>
                  <div className="modal-body">{text3}</div>
                  <div className="modal-body">
                    <b>{text4}</b>
                  </div>
                  <div className="modal-body">
                    <b>{text5}</b>
                  </div>

                  <div className="btn-group">
                    <a
                      href={gituhub}
                      className="btn btn-secondary"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      GitHub
                    </a>
                    <a
                      href={deploy}
                      className="btn btn-secondary"
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
    </section>
  );
};

export default Project;

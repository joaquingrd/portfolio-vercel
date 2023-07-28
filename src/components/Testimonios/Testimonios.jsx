import "./Testimonios.css";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import React from "react";

import pictures from "../../images/pictures";

const Testimonios = () => {
  const data = useSelector((state) => state.data);
  const mode = useSelector((state) => state.mode);

  const testimoniosData = useSelector((state) => state.testimonios);

  return (
    <section className={`testimonios ${mode === "dark" && "testimonios-dark"}`}>
      <div className="testimonio-title">
        <h3 className="testi-title">
          {data.testimoniosTitle}
          <Icon icon="bi:linkedin" color="#0077b5" width="45" />{" "}
        </h3>
      </div>

      <div
        id="carouselTestimonios"
        className="carousel slide carrusel-testimonio"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner carousel-in">
          <div className="carousel-item  active " data-bs-interval="8000">
            <div className="container carrusel-testimonio-item">
              <img
                src={pictures[testimoniosData.active.img]}
                className="d-block w-5 testimonio-imagen"
                alt="..."
              />

              <h5 className="testimonio-text">
                {testimoniosData.active.text1}
              </h5>
              <h5 className="testimonio-name">{testimoniosData.active.name}</h5>
            </div>
          </div>
          {testimoniosData.pasive.map((testimonio) => (
            <div className="carousel-item" data-bs-interval="8000">
              <div className="container carrusel-testimonio-item">
                <img
                  src={pictures[testimonio.img]}
                  className="d-block w-5 testimonio-imagen"
                  alt="name"
                />
                <h5 className="testimonio-text">{testimonio.text1}</h5>
                <h5 className="testimonio-name">{testimonio.name}</h5>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselTestimonios"
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
          data-bs-target="#carouselTestimonios"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Testimonios;

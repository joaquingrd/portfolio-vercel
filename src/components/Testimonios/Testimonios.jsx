import "./Testimonios.css";

import { useSelector } from "react-redux";
import React from "react";

import pictures from "../../images/pictures";

const Testimonios = () => {
  const data = useSelector((state) => state.data);

  const testimoniosData = useSelector((state) => state.testimonios);

  return (
    <section className="Testimonios">
      <div className="testimonio-title">
        <h3>{data.testimoniosTitle}</h3>
      </div>

      <div
        id="carouselTestimonios"
        class="carousel slide carrusel-testimonio"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active " data-bs-interval="8000">
            <div className="container">
              <img
                src={pictures[testimoniosData.active.img]}
                class="d-block w-5 testimonio-imagen"
                alt="..."
              />

              <h5 className="testimonio-text">
                {testimoniosData.active.text1}
              </h5>
              <h6 className="testimonio-name">{testimoniosData.active.name}</h6>
            </div>
          </div>
          {testimoniosData.pasive.map((testimonio) => (
            <div className="carousel-item " data-bs-interval="8000">
              <div className="container">
                <img
                  src={pictures[testimonio.img]}
                  class="d-block w-5 testimonio-imagen"
                  alt="name"
                />
                <h5 className="testimonio-text">{testimonio.text1}</h5>
                <h5 className="testimonio-name">{testimonio.name}</h5>
              </div>
            </div>
          ))}
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselTestimonios"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselTestimonios"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Testimonios;

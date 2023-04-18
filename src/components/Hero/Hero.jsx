import "./Hero.css";
import Perfil from "../../images/verde.png";
import Perfil1 from "../../images/transparente.png";
import CVe from "../../pdfs/CVe_Joaquin_RuizDiaz.pdf";
import CVp from "../../pdfs/CVp_Joaquin_RuizDiaz.pdf";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";
import { selectLanguage } from "../../redux/actions";
import React, { useState } from "react";

const Hero = () => {
  const [lastLanguage, setLastLanguage] = useState("es"); // estado local para recordar el último idioma seleccionado
  const language = useSelector((state) => state.language);
  console.log("Language = " + language + " Hero");
  const dispatch = useDispatch();

  const handleLanguageChange = () => {
    const newLanguage = lastLanguage === "es" ? "pt" : "es"; // cambia al último idioma seleccionado
    setLastLanguage(newLanguage); // guarda el último idioma seleccionado
    dispatch(selectLanguage(newLanguage));
  };

  const heroData = useSelector((state) => state.data);

  return (
    <section className="hero" id="inicio">
      <div className="row">
        <div className="contenedor1 col-md-9">
          <div className="hero-text">
            <h1 className="hero-title">{heroData.title1}</h1>
            <h1 className="hero-title2">{heroData.title2}</h1>
            <h2 className="hero-subtitle">{heroData.subtitle}</h2>
          </div>
          <div className="descargar">
            <a
              href={language === "es" ? CVe : CVp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="btn-descargar btn btn-outline-light "
              >
                {heroData.downloadBtnText}
              </button>
            </a>
          </div>
        </div>
        <div className="contenedor2  col-md-3">
          <div className="language-btn-container">
            <button className="language-btn" onClick={handleLanguageChange}>
              {lastLanguage === "es" ? (
                <Icon className="ic-language" icon="twemoji:flag-brazil" />
              ) : (
                <Icon className="ic-language" icon="twemoji:flag-spain" />
              )}
            </button>
          </div>
          <img className="hero-image" src={Perfil} alt={heroData.altText} />
          <div className="div-img" data-aos="zoom-in">
            <img className="hero-image1" src={Perfil1} alt={heroData.altText} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

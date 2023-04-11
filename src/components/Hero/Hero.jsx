import "./Hero.css";
import Perfil from "../../images/verde.png";
import Perfil1 from "../../images/transparente.png";

const Hero = () => {
  return (
    <section class="hero" id="inicio">
      <div class="row">
        <div class="contenedor1 col-md-9">
          <div class="hero-text">
            <h1 class="hero-title">Joaquin Ruiz Diaz</h1>
            <h1 class="hero-title2">Hola, soy Joaquin Ruiz Diaz</h1>

            <h2 class="hero-subtitle">Full Stack Web Developer</h2>
          </div>
        </div>
        <div class="contenedor2  col-md-3">
          <img class="hero-image" src={Perfil} alt="Foto de Joaquin" />
          <div class="div-img">
            <img class="hero-image1" src={Perfil1} alt="Foto de Joaquin" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

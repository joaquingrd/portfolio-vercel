import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <section class="navBar">
      <nav class="navbar navbar-expand-sd ">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#inicio">
                  Inicio
                </a>
                <a class="nav-link" href="#about">
                  Sobre mi
                </a>
                <a class="nav-link" href="#techSkills">
                  Skills
                </a>
                <a class="nav-link" href="#project">
                  Proyectos
                </a>
                <a class="nav-link" href="#contact">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;

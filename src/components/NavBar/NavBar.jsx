import React from "react";
import "./NavBar.css";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";

const NavBar = () => {
  const language = useSelector((state) => state.language);
  console.log("Language = " + language + " About");

  const navBarData = useSelector((state) => state.data);

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
                  {navBarData.nav1}
                </a>
                <a class="nav-link" href="#about">
                  {navBarData.nav2}
                </a>
                <a class="nav-link" href="#techSkills">
                  {navBarData.nav3}
                </a>
                <a class="nav-link" href="#project">
                  {navBarData.nav4}
                </a>
                <a class="nav-link" href="#contact">
                  {navBarData.nav5}
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

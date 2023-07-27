import React, { useState } from "react";
import "./NavBar.css";
import { useSelector } from "react-redux";
import { selectMode } from "../../redux/actions";

const NavBar = () => {
  const navBarData = useSelector((state) => state.data);
  const mode = useSelector((state) => state.mode);

  return (
    <section className="navBar">
      <nav className="navbar navbar-expand-sd ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul
              className={`navbar-nav ${mode === "dark" && "navbar-nav-dark"}`}
            >
              <li className={`nav-item ${mode === "dark" && "nav-item-dark"}`}>
                <a className="nav-link " aria-current="page" href="#inicio">
                  {navBarData.nav1}
                </a>
                <a className="nav-link" href="#about">
                  {navBarData.nav2}
                </a>
                <a className="nav-link" href="#techSkills">
                  {navBarData.nav3}
                </a>
                <a className="nav-link" href="#project">
                  {navBarData.nav4}
                </a>
                <a className="nav-link" href="#contact">
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

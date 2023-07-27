import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import Testimonios from "./components/Testimonios/Testimonios";
import { useSelector } from "react-redux";

function App() {
  const mode = useSelector((state) => state.mode);

  return (
    <BrowserRouter>
      <div className={`App ${mode === "dark" && "App-dark"}`}>
        <NavBar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonios />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

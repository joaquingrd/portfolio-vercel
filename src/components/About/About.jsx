import "./About.css";
import { useSelector } from "react-redux";
import React from "react";

const About = () => {
  const language = useSelector((state) => state.language);
  console.log("Language = " + language + " About");

  const AboutData = useSelector((state) => state.data);

  return (
    <section class="about" id="about">
      <div
        class="about-text1"
        data-aos="fade-right"
        data-aos-anchor-placement="bottom-bottom"
      >
        <p>
          {AboutData.text1}
          <b>{AboutData.text2}</b>
          {AboutData.text3}
          <b>{AboutData.text4}</b>
          {AboutData.text5}
          <b>{AboutData.text6}</b>.
        </p>
      </div>

      <div
        class="about-text2"
        data-aos="fade-left"
        data-aos-anchor-placement="center-bottom"
      >
        <p>
          {AboutData.text7}
          <b> {AboutData.text8}</b>
          {AboutData.text9}
          <b>{AboutData.text10}</b> {AboutData.text11}
        </p>
      </div>
    </section>
  );
};

export default About;

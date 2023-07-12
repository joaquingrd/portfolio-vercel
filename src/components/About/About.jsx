import "./About.css";
import { useSelector } from "react-redux";
import React from "react";

const About = () => {
  const AboutData = useSelector((state) => state.data);

  return (
    <section className="about" id="about">
      <div
        className="about-text1"
        data-aos="fade-right"
        data-aos-anchor-placement="bottom-bottom"
      >
        <p>
          {AboutData.text1}
          <b className="b">{AboutData.text2}</b>
          {AboutData.text3}
          <b className="b">{AboutData.text4}</b>
          {AboutData.text5}
          <b className="b">{AboutData.text6}</b>
          {AboutData.text7}
          <b className="b">{AboutData.text8}</b>
          {AboutData.text9}
          <b className="b">{AboutData.text10}</b>
        </p>
      </div>

      <div
        className="about-text2"
        data-aos="fade-left"
        data-aos-anchor-placement="center-bottom"
      >
        <p>
          {AboutData.text11}
          <b className="b"> {AboutData.text12}</b>
          {AboutData.text13}
          <b className="b">{AboutData.text14}</b>
          {AboutData.text15}
          <b className="b">{AboutData.text16}</b>
          {AboutData.text17}
          <b className="b">{AboutData.text18}</b>
          {AboutData.text19}
          <b className="b">{AboutData.text20}</b>
        </p>
      </div>
    </section>
  );
};

export default About;

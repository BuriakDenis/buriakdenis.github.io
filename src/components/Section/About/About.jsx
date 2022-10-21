import React from "react";
import "../About/About.scss";
import BtnDownload from "../../Button/ButtonDownload/BtnDownload";
import Image from "../../Image/Image"
import imageHero from "../About/Img/BFD1.png"
import CV from "../About/CV/Buriak_Denis_React_developer_CV.pdf"

const About = () => {
  return (
    <section className="about" id={"about"}>
      <div className="about__container">
        <h2 className="about__name-section element-animation-right">About</h2>
        <div className="about__hero">
          <div className="about__hero-img img element-animation-right">
            <Image src={imageHero} className="img__hero-about" />
          </div>
          <div className="about__content element-animation-top">
            <p className="about__title">Who I Am?</p>
            <p className="about__info">
              Junior Front-end developer with 2 month of commercial experience.
              Well oriented in HTML/CSS, JavaScript technologies. Used React and Redux.
              Daily studying and improving my knowledge of frameworks and technologies.
              Doing my own projects, on which I improve my skills.
              Able to work in a team and striving for professional development
            </p>
            <BtnDownload href={CV} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

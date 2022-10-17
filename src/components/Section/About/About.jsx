import React from "react";
import "../About/About.scss";
import BtnDownload from "../../Button/ButtonDownload/BtnDownload";
import Image from "../../Image/Image"
import imageHero from "../About/Img/BFD1.png"


const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
      <h2 className="about__name-section element-animation-right">About</h2>
        <div className="about__hero">
          <div className="about__hero-img img element-animation-right">
            <Image image={imageHero} className="img__hero-about"/>
          </div>
          <div className="about__content element-animation-top">
           <p className="about__title">Who I Am?</p>
            <p className="about__info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            architecto illo voluptas, repellat beatae rem assumenda labore est?
            Vel praesentium fuga doloribus voluptates sed quibusdam nisi qui
            dicta, consequuntur quae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Odit architecto illo voluptas, repellat beatae rem
            assumenda labore est? Vel praesentium fuga doloribus voluptates sed
            quibusdam nisi qui dicta, consequuntur quae.
          </p>
         <BtnDownload />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React, { useEffect } from "react";
import "../Introduce/Introduce.scss";
import introduceImage from "../../../components/Section/Introduce/Img/bfd.png";
import BtnOpenModal from "../../Button/ButtonOpenModal/BtnOpenModal";
import ArrowsDown from "../../Animations/ArrowDown/ArrowDown";
import Image from "../../Image/Image";
import showElemByScroll from "../../Animations/ShowElemByScroll/ShowElemByScroll"

const Introduce = () => {
  useEffect(() => {
   showElemByScroll()
  })
  return (
    <section className="introduce" id="home" >
      <div className="introduce__container">
        <div className="introduce__content-contain">
          <div className="introduce__intro">
            <div className="introduce__content element-animation-top">
              <p className="introduce__hello">Hello, I'm</p>
              <h1 className="introduce__name">Burjak Denis</h1>
              <p className="introduce__job-name">Junior Web Developer</p>
            </div>
            <BtnOpenModal title="GET IN TOUCH" href="#contact" className="element-animation-right"/>
          </div>
          <div className="introduce__hero element-animation-left">
            <Image image={introduceImage} className="img__hero"/>
          </div>
        </div>
        <ArrowsDown />
      </div>
    </section>
  );
};

export default Introduce;

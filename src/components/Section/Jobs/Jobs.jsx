import React from "react";
import "./Jobs.scss";
import Image from "../../Image/Image";
import silpoMavka from "../../../components/Section/Jobs/Img/Mavka.jpg";
import fishDepartment from "../../../components/Section/Jobs/Img/Fishdep.png";
import Rectangle from "../../../components/Section/Jobs/Img/Rectangle.png";

const Jobs = (props) => {
  return (
    <section className="jobs" id="jobs">
      <div className="jobs__container">
        <h2 className="jobs__section-name element-animation-left">Jobs</h2>
        <div className="jobs__content">
          <div className="jobs__block-content-1 element-animation-top">
            <div className="jobs__block-img">
              <Image image={silpoMavka} alt="1" className="img__block-1" />
            </div>
            <div className="jobs__block-info">
              <p className="jobs__block-info-name">
                My creative <span>skills</span> and
                <span>experiences.</span>
              </p>
              <p className="jobs__block-info-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                id sed, laboriosam rerum blanditiis iure quam cumque iste
                similique, omnis tenetur repellendus voluptate suscipit earum
                cupiditate mollitia repellat voluptatibus nemo!
              </p>
            </div>
          </div>
          <div className="jobs__block-content-2 element-animation-right">
            <div className="jobs__block-img img__block">
              <Image image={fishDepartment} alt="2" className="img__block-2" />
            </div>
            <div className="jobs__block-info">
              <p className="jobs__block-info-name">
                My creative <span>skills</span> and
                <span>experiences.</span>
              </p>
              <p className="jobs__block-info-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                id sed, laboriosam rerum blanditiis iure quam cumque iste
                similique, omnis tenetur repellendus voluptate suscipit earum
                cupiditate mollitia repellat voluptatibus nemo!
              </p>
            </div>
          </div>
          <div className="jobs__block-content-1 element-animation-left">
            <div className="jobs__block-img">
              <Image image={Rectangle} alt="2" className="img__block-3" />
            </div>
            <div className="jobs__block-info">
              <p className="jobs__block-info-name">
                My creative <span>skills</span> and
                <span>experiences.</span>
              </p>
              <p className="jobs__block-info-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                id sed, laboriosam rerum blanditiis iure quam cumque iste
                similique, omnis tenetur repellendus voluptate suscipit earum
                cupiditate mollitia repellat voluptatibus nemo!
              </p>
            </div>
          </div>
          <div className="jobs__block-content-2 element-animation-bottom">
            <div className="jobs__block-img">
              <Image image={Rectangle} alt="2" className="img__block-4" />
            </div>
            <div className="jobs__block-info">
              <p className="jobs__block-info-name">
                My creative <span>skills</span> and
                <span>experiences.</span>
              </p>
              <p className="jobs__block-info-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                id sed, laboriosam rerum blanditiis iure quam cumque iste
                similique, omnis tenetur repellendus voluptate suscipit earum
                cupiditate mollitia repellat voluptatibus nemo!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;

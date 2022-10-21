import React from "react";
import "./Jobs.scss";
import Image from "../../Image/Image";
import silpoMavka from "../../../components/Section/Jobs/Img/Mavka.jpg";
import fishDepartment from "../../../components/Section/Jobs/Img/Fishdep.png";
import Rectangle from "../../../components/Section/Jobs/Img/Rectangle.png";

const Jobs = () => {
  return (
    <section className="jobs" id={"jobs"}>
      <div className="jobs__container">
        <h4 className="jobs__section-name element-animation-left">Jobs</h4>
        <div className="jobs__content">
          <div className="jobs__block-content-1 element-animation-top">
            <div className="jobs__block-img">
              <Image src={Rectangle} alt="1" className="img__block" />
            </div>
            <div className="jobs__block-info">
              <p className="jobs__block-info-name">
                NDA
              </p>
              <p className="jobs__block-info-content">
                Frontend Developer
              </p>
              <small>
                From August 2022 to October 2022 - 2 month
              </small>
              <p className="jobs__block-info-content">
                Development of a cross-browser responsive application from scratch on the
                React, adaptive and responsive for all media screens for showing property presentations to buyers.
                Includes pop-ups, forms and animations.
              </p>
            </div>
          </div>
          <div className="jobs__block-content-2 element-animation-right">
            <div className="jobs__block-img">
              <Image src={Rectangle} alt="2" className="img__block" />
            </div>
            <div className="jobs__block-info">
              <p className="jobs__block-info-name">
                Silpo LTD.
              </p>
              <p className="jobs__block-info-content">
                Deputy Store Manager - shop "Silpo" 8a Heroes of Stalingrad Ave
              </p>
              <small>
                From June 2022 to August 2022 - 2 month
              </small>
            </div>
          </div>
          <div className="jobs__block-content-1 element-animation-left">
            <div className="jobs__block-img">
              <Image src={silpoMavka} alt="2" className="img__block" />
            </div>
            <div className="jobs__block-info">
              <p className="jobs__block-info-name">
                Silpo LTD.
              </p>
              <p className="jobs__block-info-content">
                Deputy Store Manager - shop "Mavka" 36 Stepana Bandera Ave
              </p>
              <small>
                From November 2021 to June 2022 - 9 month
              </small>
            </div>
          </div>
          <div className="jobs__block-content-2 element-animation-bottom">
            <div className="jobs__block-img">
              <Image src={fishDepartment} alt="2" className="img__block" />
            </div>
            <div className="jobs__block-info">
              <p className="jobs__block-info-name">
                Silpo LTD.
              </p>
              <p className="jobs__block-info-content">
                Department Manager - shop "Mavka" 36 Stepana Bandera Ave
              </p>
              <small>
                From February 2019 to November 2021 - 2 years
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;

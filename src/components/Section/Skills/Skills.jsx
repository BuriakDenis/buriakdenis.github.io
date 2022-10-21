import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {navStateActive} from "../../../Store/Reducers/SetActiveNavLink"
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import "../Skills/Skills.scss";

const Skills = () => {
  const dispatch = useDispatch()
  const navActive = () => dispatch(navStateActive())
  return (
    <section className="skills" id="skills">
      <div className="skills__container element-animation-right">
        <h2 className="skills__section-name">Skills</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          centeredSlides={false}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 50,
            },
            630: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 50,
            },
            660: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1023: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="skills__swiper swiper element-animation-left"
        >
          <div className="skills__card-info swiper-wrapper">
            <SwiperSlide className="skills__info-slide swiper-slide" onClick={() =>navActive()}>
              <Link to="skills" className={"skills__info-link"}>
                <h3 className="skills__title">Tech</h3>
                <p className="skills__button-read-more">Learn more</p>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="skills__swiper-slide swiper-slide">
              <Link to="skills" className={"skills__info-link"} onClick={() =>navActive()}>
                <h3 className="skills__title">VCS </h3>
                <p className="skills__button-read-more">Learn more</p>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="skills__swiper-slide swiper-slide">
              <Link to="skills" className={"skills__info-link"} onClick={() =>navActive()}>
                <h3 className="skills__title">Education</h3>
                <p className="skills__button-read-more">Learn more</p>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="skills__swiper-slide swiper-slide">
              <Link to="skills" className={"skills__info-link"} onClick={() =>navActive()}>
                <h3 className="skills__title">Languages</h3>
                <p className="skills__button-read-more">Learn more</p>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="skills__swiper-slide swiper-slide">
              <Link to="skills" className={"skills__info-link"} onClick={() =>navActive()}>
                <h3 className="skills__title">Additional</h3>
                <p className="skills__button-read-more">Learn more</p>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="skills__swiper-slide swiper-slide">
              <Link to="skills" className={"skills__info-link"} onClick={() =>navActive()}>
                <h3 className="skills__title">Courses</h3>
                <p className="skills__button-read-more">Learn more</p>
              </Link>
            </SwiperSlide>
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import "../Skills/Skills.scss";

const Skills = (props) => {
  return (
    <section className="skills" id="skills">
      <div className="skills__container element-animation-right">
        <h3 className="skills__section-name">Skills</h3>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          centeredSlides={false}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="skills__swiper swiper element-animation-left"
        >
          <div className="skills__card-info swiper-wrapper">
            <SwiperSlide className="skills__info-slide swiper-slide">
              <a href="pageSkills.html" className="skills__info-link">
                <h4 className="skills__title">Languages</h4>
                <p className="skills__button-read-more">Learn more</p>
              </a>
            </SwiperSlide>
            <SwiperSlide className="skills__swiper-slide swiper-slide">
              <a href="!" className="skills__info-link">
                <h4 className="skills__title">IT Skills</h4>
                <p className="skills__button-read-more">Learn more</p>
              </a>
            </SwiperSlide>
            <SwiperSlide className="skills__swiper-slide swiper-slide">
              <a href="!" className="skills__info-link">
                <h4 className="skills__title">Additional skills</h4>
                <p className="skills__button-read-more">Learn more</p>
              </a>
            </SwiperSlide>
            <SwiperSlide className="skills__swiper-slide swiper-slide">
              <a href="!" className="skills__info-link">
                <h4 className="skills__title">Slide 4</h4>
                <p className="skills__button-read-more">Learn more</p>
              </a>
            </SwiperSlide>
            <SwiperSlide className="skills__swiper-slide swiper-slide">
              <a href="!" className="skills__info-link">
                <h4 className="skills__title">Slide 5</h4>
                <p className="skills__button-read-more">Learn more</p>
              </a>
            </SwiperSlide>
            <SwiperSlide className="skills__swiper-slide swiper-slide">
              <a href="!" className="skills__info-link">
                <h4 className="skills__title">Slide 6</h4>
                <p className="skills__button-read-more">Learn more</p>
              </a>
            </SwiperSlide>
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;

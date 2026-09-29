
"use client"

import React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const BrandAbout = () => {
  return (
    <>
      <div className="partner-section fix">
        <div className="container">
          <div className="space-top">
            <h4 className="text-center black fw-bold mb-60 wow fadeInUp" data-wow-delay=".3s">Over 2,000 Company
              worldwide
              rely on Reail
            </h4>
            <div className="swiper instagram-banner-slider">
              <Swiper
                spaceBetween={30}
                speed={1500}
                loop={false}
                centeredSlides={true}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".partner-prev",
                  prevEl: ".partner-next",
                }}
                breakpoints={{
                  1399: {
                    slidesPerView: 6,
                  },
                  1199: {
                    slidesPerView: 5,
                  },
                  991: {
                    slidesPerView: 4,
                  },
                  767: {
                    slidesPerView: 3,
                  },
                  650: {
                    slidesPerView: 2,
                  },
                  575: {
                    slidesPerView: 2,
                  },
                  0: {
                    slidesPerView: 2,
                  },
                }}
                className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="banner-image"><img src="assets/img/icon/brnd-logo.png" alt="icon" /></div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="banner-image"><img src="assets/img/icon/brnd-logo.png" alt="icon" /></div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="banner-image"><img src="assets/img/icon/brnd-logo.png" alt="icon" /></div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="banner-image"><img src="assets/img/icon/brnd-logo.png" alt="icon" /></div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="banner-image"><img src="assets/img/icon/brnd-logo.png" alt="icon" /></div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="banner-image"><img src="assets/img/icon/brnd-logo.png" alt="icon" /></div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="banner-image"><img src="assets/img/icon/brnd-logo.png" alt="icon" /></div>
                </SwiperSlide>
              </Swiper>
              <div className="partner-btn-inner d-flex align-items-center mt-60">
                <span className="line"></span>
                <div className="d-flex align-items-center justify-content-center gap-2">
                  <button type="button" className="partner-prev cmn-arrows rounded-2 p2-bg">
                    <i className="fa-solid fa-chevron-left fs-eight"></i>
                  </button>
                  <button type="button" className="partner-next cmn-arrows rounded-2 p2-bg">
                    <i className="fa-solid fa-chevron-right fs-eight"></i>
                  </button>
                </div>
                <span className="line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandAbout;
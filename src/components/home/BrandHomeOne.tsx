
"use client"

import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
 

const BrandHomeOne = () => {
  return (
    <>
      <div className="partnered-section fix">
        <div className="partnered-wrapper swiper">
          <Swiper
            speed={6000}
            loop={true}
            slidesPerView={"auto"}
            centeredSlides={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
            }}
            breakpoints={{
              991: {
                spaceBetween: 20,
              },
              600: {
                spaceBetween: 16,
              },
              400: {
                spaceBetween: 15,
              },
              0: {
                spaceBetween: 12,
              },
            }}
            className="swiper-wrapper">
            <SwiperSlide className="swiper-slide w-fit">
              <div className="partnered-item">
                10K+ Users Worldwide
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide w-fit">
              <div className="partnered-item">
                -
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide w-fit">
              <div className="partnered-item">
                450+ Popular Features
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide w-fit">
              <div className="partnered-item">
                -
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide w-fit">
              <div className="partnered-item">
                1020+ Satisfied Clients
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide w-fit">
              <div className="partnered-item">
                -
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide w-fit">
              <div className="partnered-item">
                80+ Team Members
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide w-fit">
              <div className="partnered-item">
                -
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide w-fit">
              <div className="partnered-item">
                020+ Satisfied Clients
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide w-fit">
              <div className="partnered-item">
                10K+ Users Worldwide
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide w-fit">
              <div className="partnered-item">
                -
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide w-fit">
              <div className="partnered-item">
                450+ Popular Features
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide w-fit">
              <div className="partnered-item">
                -
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide w-fit">
              <div className="partnered-item">
                1020+ Satisfied Clients
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide w-fit">
              <div className="partnered-item">
                -
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide w-fit">
              <div className="partnered-item">
                80+ Team Members
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide w-fit">
              <div className="partnered-item">
                -
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide w-fit">
              <div className="partnered-item">
                020+ Satisfied Clients
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </>
  );
};

export default BrandHomeOne;
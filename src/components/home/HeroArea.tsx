
"use client" 
import Link from 'next/link';
import React from 'react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const HeroArea = ({setIsVideoOpen} : any) => {

  return (
    <>
      <section className="banner-section position-relative cmn-bg swiper">
        <Swiper
          slidesPerView={1}
          loop={false}
          speed={1300}
          effect="fade"
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".dot",
            clickable: true,
          }}
          navigation={{
            nextEl: ".array-prev",
            prevEl: ".array-next",
          }}
          modules={[Navigation, EffectFade, Autoplay, Pagination]}

        >
          <SwiperSlide className="swiper-slide">
            <div className="banner-inner-item hero-images1">
              <div className="container z-1 position-relative">
                <div className="banner-content">
                  <span className="p2-clr fs-five fw_500 body-font mb-xl-4 mb-3 d-block">Virtual Reality</span>
                  <h1 className="white fw_700 mb-xl-4 mb-3">
                    Explore The World
                    Using Virtual Reality
                  </h1>
                  <p className="white fs-six mb-40">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla
                    pariatur occaecat cupidatat
                  </p>
                  <div
                    className="banner-video d-flex flex-sm-nowrap flex-wrap align-items-center gap-xl-4 gap-lg-3 gap-2 mb-60 position-relative">
                    <Link href="/contact"
                      className="common-btn sub-font box-style first-box d-inline-flex px-4 justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black2 overflow-hidden white-bg rounded-2">
                      Discover More
                    </Link>
                    <div className="d-flex align-items-center gap-3">
                      <a
                        onClick={() => setIsVideoOpen(true)}
                        style={{ cursor: 'pointer' }}
                        className="video-style p2-bg rounded-circle d-center video-popup">
                        <i className="fa-solid fa-play fs-six"></i>
                      </a>
                      <span className="white fw_600 sub-font">Play Video</span>
                    </div>

                    <img src="assets/img/element/hero-element.png" alt="element" className="hero-text-element" />
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <h3 className="white fw_700">4.9 Rating</h3>
                    <ul className="d-flex align-items-center gap-1">
                      <li><i className="fa-solid fa-star fs-six ratting"></i></li>
                      <li><i className="fa-solid fa-star fs-six ratting"></i></li>
                      <li><i className="fa-solid fa-star fs-six ratting"></i></li>
                      <li><i className="fa-solid fa-star fs-six ratting"></i></li>
                      <li><i className="fa-solid fa-star fs-six ratting"></i></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div className="banner-inner-item hero-images2">
              <div className="container z-1 position-relative">
                <div className="banner-content">
                  <span className="p2-clr fs-five fw_500 body-font mb-xl-4 mb-3 d-block">Virtual Reality</span>
                  <h1 className="white fw_700 mb-xl-4 mb-3">
                    Where Reality Ends and Imagination Begins
                  </h1>
                  <p className="white fs-six mb-40">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla
                    pariatur occaecat cupidatat
                  </p>
                  <div
                    className="banner-video d-flex flex-sm-nowrap flex-wrap align-items-center gap-xl-4 gap-lg-3 gap-2 mb-60 position-relative">
                    <Link href="/contact"
                      className="common-btn sub-font box-style first-box d-inline-flex px-4 justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black2 overflow-hidden white-bg rounded-2">
                      Discover More
                    </Link>
                    <div className="d-flex align-items-center gap-3">
                      <a
                        onClick={() => setIsVideoOpen(true)}
                        style={{ cursor: 'pointer' }}
                        className="video-style p2-bg rounded-circle d-center video-popup">
                        <i className="fa-solid fa-play fs-six"></i>
                      </a>
                      <span className="white fw_600 sub-font">Play Video</span>
                    </div>

                    <img src="assets/img/element/hero-element.png" alt="element" className="hero-text-element" />
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <h3 className="white fw_700">4.9 Rating</h3>
                    <ul className="d-flex align-items-center gap-1">
                      <li><i className="fa-solid fa-star fs-six ratting"></i></li>
                      <li><i className="fa-solid fa-star fs-six ratting"></i></li>
                      <li><i className="fa-solid fa-star fs-six ratting"></i></li>
                      <li><i className="fa-solid fa-star fs-six ratting"></i></li>
                      <li><i className="fa-solid fa-star fs-six ratting"></i></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div className="banner-inner-item hero-images1">
              <div className="container z-1 position-relative">
                <div className="banner-content">
                  <span className="p2-clr fs-five fw_500 body-font mb-xl-4 mb-3 d-block">Virtual Reality</span>
                  <h1 className="white fw_700 mb-xl-4 mb-3">
                    Get Transported to New Worlds Through VR
                  </h1>
                  <p className="white fs-six mb-40">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla
                    pariatur occaecat cupidatat
                  </p>
                  <div
                    className="banner-video d-flex flex-sm-nowrap flex-wrap align-items-center gap-xl-4 gap-lg-3 gap-2 mb-60 position-relative">
                    <Link href="/contact"
                      className="common-btn sub-font box-style first-box d-inline-flex px-4 justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black2 overflow-hidden white-bg rounded-2">
                      Discover More
                    </Link>
                    <div className="d-flex align-items-center gap-3">
                      <a
                        onClick={() => setIsVideoOpen(true)}
                        style={{ cursor: 'pointer' }}
                        className="video-style p2-bg rounded-circle d-center video-popup">
                        <i className="fa-solid fa-play fs-six"></i>
                      </a>
                      <span className="white fw_600 sub-font">Play Video</span>
                    </div>

                    <img src="assets/img/element/hero-element.png" alt="element" className="hero-text-element" />
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <h3 className="white fw_700">4.9 Rating</h3>
                    <ul className="d-flex align-items-center gap-1">
                      <li><i className="fa-solid fa-star fs-six ratting"></i></li>
                      <li><i className="fa-solid fa-star fs-six ratting"></i></li>
                      <li><i className="fa-solid fa-star fs-six ratting"></i></li>
                      <li><i className="fa-solid fa-star fs-six ratting"></i></li>
                      <li><i className="fa-solid fa-star fs-six ratting"></i></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
        <div className="banner-controller">
          <div className="swiper-dot text-center">
            <div className="dot"></div>
          </div>
          <div className="line"></div>
          <div className="array-button d-flex gap-lg-3 gap-2">
            <button className="array-prev"><i className="fa-solid fa-angle-left"></i></button>
            <button className="array-next active"><i className="fa-solid fa-angle-right"></i></button>
          </div>
        </div>
      </section>

     

    </>
  );
};

export default HeroArea;
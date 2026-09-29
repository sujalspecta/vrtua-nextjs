"use client";

import Link from 'next/link';
import React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const CtaAreaHomeOne = ({ style_2, style_3, style_4 }: any) => {
  return (
    <>
      <div className={`${style_4 ? "get-start-section fix white-bg space-bottom" : "partner-section fix space-top"}`}>
        <div className="container">
          {style_2 ?
            <>


              {style_3 ? null :
                <div className="partner-section space-bottom fix">
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
              }

              <section className={`${style_4? "get-start-section fix white-bg" : "get-starteds before-none position-relative fix space-bottom"}`}>
                <div className="container">
                  <div className="partnert-get-wrapper space-bottom space-top rounded-3 text-center">
                    <div className="section-title">
                      <h6 className="body-font white-sub-badge white mb-xxl-4 mb-sm-3 mb-3 text-uppercase wow fadeInUp"
                        data-wow-delay=".3s">
                        GET STARTED
                      </h6>
                      <h2 className="white visible-slowly-bottom fw-bold d-block mb-40">
                        Discover the possibilities of virtual
                        reality for your business.
                      </h2>
                      <Link href="/contact"
                        className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden p2-bg rounded-2">
                        Contact With Us
                      </Link>
                    </div>
                  </div>
                </div>
              </section>



            </>
            :
            <>

              <div className="partnert-get-wrapper space-bottom space-top rounded-3 text-center">
                <div className="section-title">
                  <h6 className="body-font white-sub-badge white mb-xxl-4 mb-sm-3 mb-3 text-uppercase wow fadeInUp"
                    data-wow-delay=".3s">
                    GET STARTED
                  </h6>
                  <h2 className="white visible-slowly-bottom fw-bold d-block mb-40">
                    Discover the possibilities of virtual
                    reality for your business.
                  </h2>
                  <Link href="/contact"
                    className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden p2-bg rounded-2">
                    Contact With Us
                  </Link>
                </div>
              </div>

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

            </>

          }




        </div>
      </div>
    </>
  );
};

export default CtaAreaHomeOne;
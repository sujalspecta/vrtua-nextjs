
"use client"
import Link from 'next/link';
import React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

 


const BlogBreadcrumbs = () => {
  return (
    <>
      <section className="banner-breadcrumbs position-relative section-padding">
        <div className="container">
          <div className="row justify-content-center space-bottom">
            <div className="col-lg-6">
              <div className="breadcrumbs-content text-center">
                <h2 className="fw-bold black mb-lg-3 mb-2 wow fadeInUp" data-wow-delay="0.4s">News & Blog</h2>
                <p className="pra fs-six wow fadeInUp" data-wow-delay="0.5s">
                  Enjoy the limitless entertainment possibilities with VR. Witness, play, and explore new
                  worlds
                </p>
              </div>
            </div>
          </div>
          <div className="area-hidden-wrap position-relative">
            <div className="blog-wrapper-slider swiper">
              <Swiper
                speed={1500}
                loop={false}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".array-prev",
                  prevEl: ".array-next",
                }}
                breakpoints={{
                  1199: {
                    slidesPerView: 1,
                  },
                  767: {
                    slidesPerView: 1,
                  },
                  575: {
                    slidesPerView: 1,
                  },
                  0: {
                    slidesPerView: 1,
                  },
                }}

                className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="blog-wrap-items2">
                    <div className="thumb w-100 rounded-2 position-relative">
                      <img src="assets/img/blog/blog-big1.jpg" alt="img" className="w-100 rounded-2" />
                      <div className="news-content">
                        <span className="fs-seven pra sub-font mb-xl-3 mb-2 d-block">Virtual / June 16,
                          2024</span>
                        <h3 className="fw_700 mb-xxl-3 mb-2">
                          <Link href="/blog-details" className="black visible-slowly-right">How Virtual
                            Reality Changes Our
                            Lives In The Future</Link>
                        </h3>
                        <p className="pra">
                          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                          sed quia consequuntur magni dolores eos
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="blog-wrap-items2">
                    <div className="thumb w-100 rounded-2 position-relative">
                      <img src="assets/img/blog/blog-big2.jpg" alt="img" className="w-100 rounded-2" />
                      <div className="news-content">
                        <span className="fs-seven pra sub-font mb-xl-3 mb-2 d-block">Virtual / June 16,
                          2024</span>
                        <h3 className="fw_700 mb-xxl-3 mb-2">
                          <Link href="/blog-details" className="black visible-slowly-right">How Virtual
                            Reality Changes Our
                            Lives In The Future</Link>
                        </h3>
                        <p className="pra">
                          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                          sed quia consequuntur magni dolores eos
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="array-button wow fadeInUp" data-wow-delay=".5s">
              <button className="array-prev"><i className="fa-solid fa-arrow-left"></i></button>
              <button className="array-next active"><i className="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogBreadcrumbs;

"use client"
import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

 

const TestimonialAreaHomeOne = () => {
  return (
    <>
      <section className="testimonial-section position-relative fix space-top">
        <div className="container">
          <div className="section-title-area align-items-end mb-60">
            <div className="section-title">
              <h6 className="body-font white-sub-badge left-sub-maintain white mb-xxl-3 mb-sm-3 mb-2 text-uppercase wow fadeInUp"
                data-wow-delay=".3s">
                Testimonial
              </h6>
              <h2 className="white visible-slowly-right fw-bold d-block">
                Our Clients Say About Reail
              </h2>
            </div>
            <div className="array-button wow fadeInUp" data-wow-delay=".5s">
              <button className="array-prev"><i className="fa-solid fa-angle-left"></i></button>
              <button className="array-next active"><i className="fa-solid fa-angle-right"></i></button>
            </div>
          </div>
          <div className="swiper testimonial-slider">
            <Swiper
            spaceBetween={30}
            speed={1500}
            loop={false}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".dot3",
              clickable: true,
            }}
            navigation={{
              nextEl: ".array-prev",
              prevEl: ".array-next",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              1199: {
                slidesPerView: 2,
              },
              767: {
                slidesPerView: 2,
              },
              575: {
                slidesPerView: 1,
              },
              0: {
                slidesPerView: 1,
              },
            }}
             className="swiper-wrapper space-bottom">
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-items">
                  <div className="thumb w-100">
                    <img src="assets/img/blog/testimonial-seora.png" alt="img" className="w-100 rounded-3" />
                  </div>
                  <div className="testimonial-content">
                    <div className="d-flex align-items-center gap-1 mb-xxl-4 mb-xl-3 mb-2">
                      <i className="fa-solid fa-star p2-clr fs-five"></i>
                      <i className="fa-solid fa-star p2-clr fs-five"></i>
                      <i className="fa-solid fa-star p2-clr fs-five"></i>
                      <i className="fa-solid fa-star p2-clr fs-five"></i>
                      <i className="fa-solid fa-star p2-clr fs-five"></i>
                    </div>
                    <p>
                      Duis aute irure dolor in reprehenderit in velit esse cillum dolore eu fugiat nulla
                      occaecat cupidatat non proident, sunt
                      in culpa officia deserunt mollit anim
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="cont">
                        <h5 className="black">Senora Jackson</h5>
                        <span className="pra fs-seven">Customer</span>
                      </div>
                      <img src="assets/img/element/quote.png" alt="icon" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-items">
                  <div className="thumb w-100">
                    <img src="assets/img/blog/testimonial-jack.png" alt="img" className="w-100 rounded-3" />
                  </div>
                  <div className="testimonial-content">
                    <div className="d-flex align-items-center gap-1 mb-xxl-4 mb-xl-3 mb-2">
                      <i className="fa-solid fa-star p2-clr fs-five"></i>
                      <i className="fa-solid fa-star p2-clr fs-five"></i>
                      <i className="fa-solid fa-star p2-clr fs-five"></i>
                      <i className="fa-solid fa-star p2-clr fs-five"></i>
                      <i className="fa-solid fa-star p2-clr fs-five"></i>
                    </div>
                    <p>
                      Duis aute irure dolor in reprehenderit in velit esse cillum dolore eu fugiat nulla
                      occaecat cupidatat non proident, sunt
                      in culpa officia deserunt mollit anim
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="cont">
                        <h5 className="black">Jack William</h5>
                        <span className="pra fs-seven">Customer</span>
                      </div>
                      <img src="assets/img/element/quote.png" alt="icon" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-items">
                  <div className="thumb w-100">
                    <img src="assets/img/blog/testimonial-seora.png" alt="img" className="w-100" />
                  </div>
                  <div className="testimonial-content">
                    <div className="d-flex align-items-center gap-1 mb-xxl-4 mb-xl-3 mb-2">
                      <i className="fa-solid fa-star p2-clr fs-five"></i>
                      <i className="fa-solid fa-star p2-clr fs-five"></i>
                      <i className="fa-solid fa-star p2-clr fs-five"></i>
                      <i className="fa-solid fa-star p2-clr fs-five"></i>
                      <i className="fa-solid fa-star p2-clr fs-five"></i>
                    </div>
                    <p>
                      Duis aute irure dolor in reprehenderit in velit esse cillum dolore eu fugiat nulla
                      occaecat cupidatat non proident, sunt
                      in culpa officia deserunt mollit anim
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="cont">
                        <h5 className="black">Senora Jackson</h5>
                        <span className="pra fs-seven">Customer</span>
                      </div>
                      <img src="assets/img/element/quote.png" alt="icon" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swiper-dot text-center">
              <div className="dot3"></div>
            </div>
          </div>
        </div>

        <img src="assets/img/element/testimonial-dot-shape.png" alt="img" className="testimonial-dot-shape" />
      </section>
    </>
  );
};

export default TestimonialAreaHomeOne;
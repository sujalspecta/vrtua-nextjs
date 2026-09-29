
import React from 'react';

const GetinTouchHomeOne = () => {
  return (
    <>
      <section className="getin-touch section-padding cmnbg-bg">
        <div className="container position-relative">
          <div className="getin-touch-wrap white-bg rounded-2 position-relative">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="getin-touch">
                  <div className="section-title">
                    <h6 className="body-font left-sub-maintain p1-clr mb-xxl-3 mb-sm-3 mb-2 text-uppercase wow fadeInUp"
                      data-wow-delay=".3s">GET IN TOUCH
                    </h6>
                    <h2 className="black visible-slowly-right fw-bold d-block mb-xxl-4 mb-lg-3 mb-2">
                      Need Help? Contact
                      our Support Team
                    </h2>
                    <p className="pra mb-xxl-4 mb-3 visible-from-bottom">Nemo enim ipsam voluptatem quia
                      voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores</p>
                    <h4 className="black fw-bold mb-1">We’r always happy to help.</h4>
                    <a href="#" className="black fw-semibold fs-six">contact22@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 get-in-touch wow fadeInUp" data-wow-delay="0.4s">
                <div className="row g-xxl-4 g-3">
                  <div className="col-lg-12">
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div className="col-lg-6">
                    <input type="email" placeholder="Your Email" />
                  </div>
                  <div className="col-lg-6">
                    <input type="text" placeholder="Your Number" />
                  </div>
                  <div className="col-lg-12">
                    <textarea name="get-intouch" rows={5} placeholder="Your Message"></textarea>
                  </div>
                  <div className="col-lg-12">
                    <button type="button"
                      className="common-btn w-100 box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden p1-bg rounded-2">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <img src="assets/img/element/get-shape.png" alt="img" className="get-shape" />
          <img src="assets/img/element/get-elment.png" alt="img" className="get-element" />
        </div>
      </section>
    </>
  );
};

export default GetinTouchHomeOne;
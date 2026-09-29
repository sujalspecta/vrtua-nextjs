

import React from 'react';

const ContactArea = () => {
  return (
    <>
      <section className="contacts-touch space-bottom white-bg">
        <div className="container">
          <div className="getin-touch-wrap p-0">
            <div className="section-title mb-xxl-5 mb-4 text-center">
              <h2 className="black visible-slowly-right fw-bold d-block">
                Any question? Send us <br />
                message.
              </h2>
            </div>
            <div className="row g-4 align-items-center justify-content-center">
              <div className="get-in-touch row g-xxl-4 g-3 wow fadeInUp" data-wow-delay="0.4s">
                <div className="col-lg-6">
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="col-lg-6">
                  <input type="email" placeholder="Email Address" />
                </div>
                <div className="col-lg-6">
                  <input type="text" placeholder="Your Number" />
                </div>
                <div className="col-lg-6">
                  <input type="text" placeholder="Subject" />
                </div>
                <div className="col-lg-12">
                  <textarea name="get-intouch" rows={5} placeholder="Your Message Here..."></textarea>
                </div>
                <div className="col-lg-12 text-center">
                  <button type="button"
                    className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden p1-bg rounded-2">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;
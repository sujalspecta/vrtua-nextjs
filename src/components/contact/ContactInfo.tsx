

import React from 'react';

const ContactInfo = () => {
  return (
    <>
      <section className="contact-info-section fix section-padding">
        <div className="container">
          <div className="row g-lg-4 g-3 align-items-center">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="contact-info-item">
                <div className="icon black-bg rounded-2 d-center"><img src="assets/img/icon/location-icon.png"
                  alt="img" /></div>
                <div className="cont">
                  <h4 className="black fw-bold mb-2 visible-slowly-bottom">Our Address</h4>
                  <p className="pra fs-seven">
                    121 W 27th Street, Office 48
                    New York, NY, USA 10001
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="contact-info-item">
                <div className="icon black-bg rounded-2 d-center"><img src="assets/img/icon/phone-icon.png"
                  alt="img" /></div>
                <div className="cont">
                  <h4 className="black fw-bold mb-2 visible-slowly-bottom">Contact Info</h4>
                  <p className="pra fs-seven">
                    Open a chat or give us call at
                  </p>
                  <a href="#" className="p1-clr fw-semibold">+1 (234) 567 890</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="contact-info-item">
                <div className="icon black-bg rounded-2 d-center"><img src="assets/img/icon/mail-icon.png"
                  alt="img" /></div>
                <div className="cont">
                  <h4 className="black fw-bold mb-2 visible-slowly-bottom">Live Support</h4>
                  <p className="pra fs-seven">
                    live chat service
                  </p>
                  <a href="#" className="p1-clr fw-semibold">www.janolivechat.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
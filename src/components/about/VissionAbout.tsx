

import React from 'react';

const VissionAbout = () => {
  return (
    <>
      <section className="vission-section fix space-top space-bottom">
        <div className="container">
          <div className="row g-4 justify-content-between align-items-end">
            <div className="col-lg-5">
              <div className="vissiton-thumb wow fadeInUp">
                <img src="assets/img/about/value-thumb.jpg" alt="img" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="vission-content">
                <div className="section-title">
                  <h6 className="body-font left-sub-maintain p1-clr mb-xxl-3 mb-sm-3 mb-2 text-uppercase wow fadeInUp"
                    data-wow-delay=".3s">
                    OUR VALUE
                  </h6>
                  <h2 className="black visible-slowly-right fw-bold mb-xl-4 mb-3 d-block">
                    Virtual reality is about to
                    become our new reality
                  </h2>
                  <p className="pra visible-from-bottom mb-40">
                    There are many variations of passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form.
                  </p>
                  <div className="mission-box-inner">
                    <div className="mission-box">
                      <div className="icon d-center"><img src="assets/img/icon/vission.png" alt="img" /></div>
                      <div className="cont">
                        <h4 className="black mb-xxl-3 mb-2 fw_700 visible-slowly-bottom">Our Vision</h4>
                        <p className="pra wow fadeInUp">Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                          ratione voluptatem sequi nesciunt.</p>
                      </div>
                    </div>
                    <div className="mission-box">
                      <div className="icon d-center"><img src="assets/img/icon/mission.png" alt="img" /></div>
                      <div className="cont">
                        <h4 className="black mb-xxl-3 mb-2 fw_700 visible-slowly-bottom">Our Mission</h4>
                        <p className="pra wow fadeInUp">Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit, sed quia consequuntur
                          magni dolores eos
                          ratione voluptatem sequi nesciunt.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VissionAbout;
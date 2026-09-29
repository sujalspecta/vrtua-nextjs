"use client"
import Link from 'next/link';
import React from 'react';

const UseitArea = ({ setIsVideoOpen }: any) => {

  return (
    <>
      <section className="useit-section fix section-padding white-bg">
        <div className="container">
          <div className="row g-4 justify-content-lg-between align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className="useit-thumb position-relative d-center reveal-left">
                <img src="assets/img/about/use-thumb.jpg" alt="img" className="w-100" />
                <a
                  onClick={() => setIsVideoOpen(true)}
                  style={{ cursor: 'pointer' }}
                  className="video-style position-absolute white-bg rounded-circle d-center video-popup">
                  <i className="fa-solid fa-play fs-six"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title useit-content ps-xl-5 ps-3">
                <h6 className="body-font left-sub-maintain p1-clr mb-xxl-3 mb-sm-3 mb-2 text-uppercase wow fadeInUp"
                  data-wow-delay=".3s">
                  HOW TO USE IT
                </h6>
                <h2 className="black visible-slowly-right fw-bold mb-xl-4 mb-3 d-block">
                  It’s realy easy to use
                  our VR glasses
                </h2>
                <p className="pra visible-from-bottom mb-40">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui
                  ratione voluptatem nesciunt. Neque porro quisquam est, qui dolorem
                </p>
                <div className="d-flex flex-sm-nowrap flex-wrap align-items-center gap-lg-4 gap-3">
                  <Link href="/contact"
                    className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden p1-bg rounded-2">
                    Learn More
                  </Link>
                  <div className="call-useit d-flex align-items-center gap-3">
                    <span className="icon"><i className="fa-solid fa-phone"></i></span>
                    <div className="cont">
                      <span className="fs-six black-clr fw_500 d-block mb-1">Hotline</span>
                      <Link href="/contact" className="fs-four fw_700 black">+000 (123) 456 88</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >


    </>
  );
};

export default UseitArea;
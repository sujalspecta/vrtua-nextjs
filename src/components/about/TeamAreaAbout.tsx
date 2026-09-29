

import Link from 'next/link';
import React from 'react';

const TeamAreaAbout = () => {
  return (
    <>
      <section className="team-section fix section-padding position-relative section-bg">
        <div className="container">
          <div className="section-title text-center mb-60">
            <h6 className="body-font p1-clr mb-xxl-3 mb-sm-3 mb-2 text-uppercase wow fadeInUp" data-wow-delay=".3s">
              Our Team
            </h6>
            <h2 className="black visible-slowly-right fw-bold d-block">
              World most qualified team <br />
              member.
            </h2>
          </div>
          <div className="row g-4">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="team-items overflow-hidden">
                <Link href="/team" className="thumb">
                  <img src="assets/img/team/gibson.jpg" alt="img" className="rounded-circle" />
                </Link>
                <h4 className="fw_600 visible-slowly-right mb-2"><Link href="/team">Frederick Gibson </Link></h4>
                <span className="pra fs-seven wow fadeInUp">Co-Founder</span>
                <div className="team-social d-inline-flex justify-content-center align-items-center">
                  <a href="#" className="white sub-font"><i className="fa-brands fa-facebook"></i></a>
                  <a href="#" className="white sub-font"><i className="fa-brands fa-twitter"></i></a>
                  <a href="#" className="white sub-font"><i className="fa-brands fa-instagram"></i></a>
                  <a href="#" className="white sub-font"><i className="fa-brands fa-linkedin"></i></a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-items overflow-hidden">
                <Link href="/team" className="thumb">
                  <img src="assets/img/team/niklos.jpg" alt="img" className="rounded-circle" />
                </Link>
                <h4 className="fw_600 visible-slowly-right mb-2"><Link href="/team">Mark Nikolos </Link></h4>
                <span className="pra fs-seven wow fadeInUp">Marketing</span>
                <div className="team-social d-inline-flex justify-content-center align-items-center">
                  <a href="#" className="white sub-font"><i className="fa-brands fa-facebook"></i></a>
                  <a href="#" className="white sub-font"><i className="fa-brands fa-twitter"></i></a>
                  <a href="#" className="white sub-font"><i className="fa-brands fa-instagram"></i></a>
                  <a href="#" className="white sub-font"><i className="fa-brands fa-linkedin"></i></a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="team-items overflow-hidden">
                <Link href="/team" className="thumb">
                  <img src="assets/img/team/thomson.jpg" alt="img" className="rounded-circle" />
                </Link>
                <h4 className="fw_600 visible-slowly-right mb-2"><Link href="/team">Lisa Thomson </Link></h4>
                <span className="pra fs-seven wow fadeInUp">Co-Founder</span>
                <div className="team-social d-inline-flex justify-content-center align-items-center">
                  <a href="#" className="white sub-font"><i className="fa-brands fa-facebook"></i></a>
                  <a href="#" className="white sub-font"><i className="fa-brands fa-twitter"></i></a>
                  <a href="#" className="white sub-font"><i className="fa-brands fa-instagram"></i></a>
                  <a href="#" className="white sub-font"><i className="fa-brands fa-linkedin"></i></a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-items overflow-hidden">
                <Link href="/team" className="thumb">
                  <img src="assets/img/team/gordon.jpg" alt="img" className="rounded-circle" />
                </Link>
                <h4 className="fw_600 visible-slowly-right mb-2"><Link href="/team">Herman Gordon </Link></h4>
                <span className="pra fs-seven wow fadeInUp">Call Support</span>
                <div className="team-social d-inline-flex justify-content-center align-items-center">
                  <a href="#" className="white sub-font"><i className="fa-brands fa-facebook"></i></a>
                  <a href="#" className="white sub-font"><i className="fa-brands fa-twitter"></i></a>
                  <a href="#" className="white sub-font"><i className="fa-brands fa-instagram"></i></a>
                  <a href="#" className="white sub-font"><i className="fa-brands fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img src="assets/img/element/stroke-arrow.png" alt="img" className="team-stoke" />
      </section>
    </>
  );
};

export default TeamAreaAbout;
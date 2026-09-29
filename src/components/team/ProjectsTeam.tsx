import Link from 'next/link';
import React from 'react';

const ProjectsTeam = () => {
  return (
    <>
      <section className="exprience-sections space-top white-bg">
        <div className="container">
          <div className="row g-4 flex-row-reverse align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-6">
              <div className="section-title">
                <h6 className="body-font left-sub-maintain p1-clr mb-xxl-3 mb-sm-3 mb-2 text-uppercase wow fadeInUp"
                  data-wow-delay=".3s">experience
                </h6>
                <h2 className="black visible-slowly-right fw-bold d-block mb-xxl-4 mb-lg-3 mb-2">
                  Our Skills & Experience
                </h2>
                <p className="pra mb-40 visible-from-bottom">There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some form,
                  by injected randomised words which look even slightly believable. If you are going to use a
                  passage</p>
                <Link href="/contact"
                  className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden p1-bg rounded-2">
                  Discover More
                </Link>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="project-big-thumb">
                <img src="assets/img/about/exprience-thumb.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsTeam;
"use client"
import React from 'react';


const ProjectsAreaHomeOne = () => {
  if (typeof window !== 'undefined') {
    require('bootstrap/js/dist/collapse');
  }
  return (
    <>

      <section className="projects-touch space-top white-bg">
        <div className="container">
          <div className="row g-4 flex-row-reverse align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-6">
              <div className="section-title">
                <h6 className="body-font left-sub-maintain p1-clr mb-xxl-3 mb-sm-3 mb-2 text-uppercase wow fadeInUp"
                  data-wow-delay=".3s">PROJECT STATISTIC
                </h6>
                <h2 className="black visible-slowly-right fw-bold d-block mb-xxl-4 mb-lg-3 mb-2">
                  Immersive solutions for
                  your business
                </h2>
                <p className="pra mb-xxl-4 mb-3 visible-from-bottom">Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                  sit amet</p>
                <div className="progressbar-wrap">
                  <div className="progress-items progress-area">
                    <div className="d-flex align-items-center justify-content-between mb-xxl-3 mb-2">
                      <span className="pra fs-seven body-font text-uppercase">EQUIPMENTS</span>
                      <span className="fs-seven pra fw-normal progress-value">85%</span>
                    </div>
                    <div className="bar-bg">
                      <div className="progress-bar"
                        style={{ width: '85%', backgroundColor: '#e0e0df !important', borderRadius: '5px', overflow: 'hidden' }}
                        aria-valuenow={85} role="progressbar" aria-valuemin={0}
                        aria-valuemax={100}></div>
                    </div>
                  </div>
                  <div className="progress-items progress-area">
                    <div className="d-flex align-items-center justify-content-between mb-xxl-3 mb-2">
                      <span className="pra fs-seven body-font text-uppercase">HARDWARES</span>
                      <span className="fs-seven pra fw-normal progress-value">90%</span>
                    </div>
                    <div className="bar-bg">
                      <div className="progress-bar"
                        style={{ width: '90%', backgroundColor: '#e0e0df !important', borderRadius: '5px', overflow: 'hidden' }}
                        aria-valuenow={90} role="progressbar" aria-valuemin={0}
                        aria-valuemax={100}></div>
                    </div>
                  </div>
                  <div className="progress-items progress-area">
                    <div className="d-flex align-items-center justify-content-between mb-xxl-3 mb-2">
                      <span className="pra fs-seven body-font text-uppercase">SOFTWARES</span>
                      <span className="fs-seven pra fw-normal progress-value">75%</span>
                    </div>
                    <div className="bar-bg">
                      <div className="progress-bar"
                        style={{ width: '75%', backgroundColor: '#e0e0df !important', borderRadius: '5px', overflow: 'hidden' }}
                        aria-valuenow={75} role="progressbar" aria-valuemin={0}
                        aria-valuemax={100}></div>
                    </div>
                  </div>
                  <div className="progress-items progress-area">
                    <div className="d-flex align-items-center justify-content-between mb-xxl-3 mb-2">
                      <span className="pra fs-seven body-font text-uppercase">APPLICATIONS</span>
                      <span className="fs-seven pra fw-normal progress-value">95%</span>
                    </div>
                    <div className="bar-bg">
                      <div className="progress-bar"
                        style={{ width: '95%', backgroundColor: '#e0e0df !important', borderRadius: '5px', overflow: 'hidden' }}
                        aria-valuenow={95} role="progressbar" aria-valuemin={0}
                        aria-valuemax={100}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="project-big-thumb">
                <img src="assets/img/blog/project1.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsAreaHomeOne;
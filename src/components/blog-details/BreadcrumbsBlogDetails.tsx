
import React from 'react';

const BreadcrumbsBlogDetails = () => {
  return (
    <>
      <section className="banner-breadcrumbs breadcrumb-blog-details position-relative space-top">
        <div className="container">
          <div className="row justify-content-center space-bottom">
            <div className="col-lg-8">
              <div className="breadcrumbs-content text-center">
                <span className="p1-bg rounded-2 py-2 px-3 white d-inline-block mb-xxl-4 mb-3">Virtual
                  Reality</span>
                <span className="pra d-block mb-xxl-4 mb-3">June 16, 2024 / Comments (02)</span>
                <h2 className="fw-bold black mb-lg-4 mb-3 wow fadeInUp" data-wow-delay="0.4s">How Virtual Reality
                  Changes Our
                  Lives In The Future</h2>
                <div className="codexipand-inner d-flex align-items-center justify-content-center gap-4">
                  <div className="d-flex align-items-center gap-3">
                    <img src="assets/img/blog/codexipand.png" alt="img" className="rounded-circle" />
                    <div className="cont text-start">
                      <span className="pra fs-seven d-block">Writen by</span>
                      <span className="fs-six fw_600 black">Codexipand</span>
                    </div>
                  </div>
                  <div className="cont text-start">
                    <span className="pra fs-seven d-block">Viewed</span>
                    <span className="fs-six fw_600 black">3 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="common-thumb">
            <img src="assets/img/blog/blog-big1.jpg" alt="img" className="w-100 rounded-3" />
          </div>
        </div>
      </section>
    </>
  );
};

export default BreadcrumbsBlogDetails;
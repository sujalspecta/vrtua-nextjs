
import Link from 'next/link';
import React from 'react';

const NewsAreaHomeOne = () => {
  return (
    <>
      <section className="news-section space-bottom space-top fix">
        <div className="container">
          <div className="section-title-area align-items-end mb-60">
            <div className="section-title">
              <h6 className="body-font left-sub-maintain p1-clr mb-xxl-3 mb-sm-3 mb-2 text-uppercase wow fadeInUp"
                data-wow-delay=".3s">
                Our News
              </h6>
              <h2 className="black visible-slowly-right fw-bold d-block">
                Read Our Recent News
              </h2>
            </div>
            <Link href="/contact"
              className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden p1-bg rounded-2">
              View All Blog Post
            </Link>
          </div>
          <div className="news-wrapper">
            <div className="row justify-content-center g-4">
              <div className="col-xl-6 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="news-single-items overflow-hidden">
                  <Link href="/blog-details"
                    className="news-image image-box-effect position-relative overflow-hidden">
                    <img src="assets/img/blog/blog1.png" alt="img" className="rounded-3 w-100 img" />
                    <img src="assets/img/blog/blog1.png" alt="img" className="rounded-3 w-100 img" />
                    <img src="assets/img/blog/blog1.png" alt="img" className="rounded-3 w-100" />
                  </Link>
                  <div className="news-content">
                    <span className="fs-seven pra sub-font mb-xl-3 mb-2 d-block">Virtual / June 16, 2024</span>
                    <h4>
                      <Link href="/blog-details" className="black visible-slowly-right">How Virtual Reality
                        Changes Our Lives
                        In The Future</Link>
                    </h4>
                    <Link href="/blog-details" className="read-more d-block">
                      <i className="fa-solid fa-arrow-right-long p1-clr"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="news-single-items overflow-hidden">
                  <Link href="/blog-details"
                    className="news-image image-box-effect position-relative overflow-hidden">
                    <img src="assets/img/blog/blog2.png" alt="img" className="rounded-3 w-100 img" />
                    <img src="assets/img/blog/blog2.png" alt="img" className="rounded-3 w-100 img" />
                    <img src="assets/img/blog/blog2.png" alt="img" className="rounded-3 w-100" />
                  </Link>
                  <div className="news-content">
                    <span className="fs-seven pra sub-font mb-xl-3 mb-2 d-block">Virtual / June 16, 2024</span>
                    <h4>
                      <Link href="/blog-details" className="black visible-slowly-right">6 Potential Dangers
                        of Playing Virtual
                        Reality</Link>
                    </h4>
                    <Link href="/blog-details" className="read-more d-block">
                      <i className="fa-solid fa-arrow-right-long p1-clr"></i>
                    </Link>
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

export default NewsAreaHomeOne;

"use client"
import Link from 'next/link';
import React from 'react';

const BlogArea = () => {
  return (
    <>
      <section className="inside-blog-main fix space-bottom pt-lg-0 pt-5">
        <div className="container">
          <div className="mb-60">
            <h2 className="black fw_700 text-center mb-xxl-5 mb-xl-4 mb-3">Check our inside News</h2>
            <form onClick={e => e.preventDefault()} className="inside-search-blog">
              <input type="text" placeholder="Search in blog" />
              <button type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
          </div>
          <div className="row g-4 mb-lg-5 mb-4">
            <div className="col-lg-4 col-mg-6 col-sm-6">
              <div className="news-single-items blog-inside-blog2 overflow-hidden">
                <Link href="/blog-details"
                  className="news-image image-box-effect position-relative overflow-hidden">
                  <img src="assets/img/blog/inside-blog1.jpg" alt="img" className="w-100 img" />
                  <img src="assets/img/blog/inside-blog1.jpg" alt="img" className="w-100 img" />
                  <img src="assets/img/blog/inside-blog1.jpg" alt="img" className="w-100" />
                </Link>
                <div className="news-content">
                  <span className="fs-seven pra sub-font mb-xl-3 mb-2 d-block">Virtual / June 16, 2024</span>
                  <h4 className="black">
                    <Link href="/blog-details" className="black visible-slowly-right">6 Potential Dangers of
                      Playing Virtual Reality</Link>
                  </h4>
                  <Link href="/blog-details" className="read-more d-block">
                    <i className="fa-solid fa-arrow-right-long p1-clr"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-mg-6 col-sm-6">
              <div className="news-single-items blog-inside-blog2 overflow-hidden">
                <Link href="/blog-details"
                  className="news-image image-box-effect position-relative overflow-hidden">
                  <img src="assets/img/blog/inside-blog2.jpg" alt="img" className="w-100 img" />
                  <img src="assets/img/blog/inside-blog2.jpg" alt="img" className="w-100 img" />
                  <img src="assets/img/blog/inside-blog2.jpg" alt="img" className="w-100" />
                </Link>
                <div className="news-content">
                  <span className="fs-seven pra sub-font mb-xl-3 mb-2 d-block">Virtual / June 16, 2024</span>
                  <h4 className="black">
                    <Link href="/blog-details" className="black visible-slowly-right">Challenges of doing
                      college in metaverse</Link>
                  </h4>
                  <Link href="/blog-details" className="read-more d-block">
                    <i className="fa-solid fa-arrow-right-long p1-clr"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-mg-6 col-sm-6">
              <div className="news-single-items blog-inside-blog2 overflow-hidden">
                <Link href="/blog-details"
                  className="news-image image-box-effect position-relative overflow-hidden">
                  <img src="assets/img/blog/inside-blog3.jpg" alt="img" className="w-100 img" />
                  <img src="assets/img/blog/inside-blog3.jpg" alt="img" className="w-100 img" />
                  <img src="assets/img/blog/inside-blog3.jpg" alt="img" className="w-100" />
                </Link>
                <div className="news-content">
                  <span className="fs-seven pra sub-font mb-xl-3 mb-2 d-block">Virtual / June 16, 2024</span>
                  <h4 className="black">
                    <Link href="/blog-details" className="black visible-slowly-right">The Metaverse Will Make
                      Gamers Of Us All</Link>
                  </h4>
                  <Link href="/blog-details" className="read-more d-block">
                    <i className="fa-solid fa-arrow-right-long p1-clr"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-mg-6 col-sm-6">
              <div className="news-single-items blog-inside-blog2 overflow-hidden">
                <Link href="/blog-details"
                  className="news-image image-box-effect position-relative overflow-hidden">
                  <img src="assets/img/blog/inside-blog4.jpg" alt="img" className="w-100 img" />
                  <img src="assets/img/blog/inside-blog4.jpg" alt="img" className="w-100 img" />
                  <img src="assets/img/blog/inside-blog4.jpg" alt="img" className="w-100" />
                </Link>
                <div className="news-content">
                  <span className="fs-seven pra sub-font mb-xl-3 mb-2 d-block">Virtual / June 16, 2024</span>
                  <h4 className="black">
                    <Link href="/blog-details" className="black visible-slowly-right">6 Potential Dangers of
                      Playing Virtual Reality</Link>
                  </h4>
                  <Link href="/blog-details" className="read-more d-block">
                    <i className="fa-solid fa-arrow-right-long p1-clr"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-mg-6 col-sm-6">
              <div className="news-single-items blog-inside-blog2 overflow-hidden">
                <Link href="/blog-details"
                  className="news-image image-box-effect position-relative overflow-hidden">
                  <img src="assets/img/blog/inside-blog5.jpg" alt="img" className="w-100 img" />
                  <img src="assets/img/blog/inside-blog5.jpg" alt="img" className="w-100 img" />
                  <img src="assets/img/blog/inside-blog5.jpg" alt="img" className="w-100" />
                </Link>
                <div className="news-content">
                  <span className="fs-seven pra sub-font mb-xl-3 mb-2 d-block">Virtual / June 16, 2024</span>
                  <h4 className="black">
                    <Link href="/blog-details" className="black visible-slowly-right">Top 10 Best Virtual
                      Reality Headset Brands</Link>
                  </h4>
                  <Link href="/blog-details" className="read-more d-block">
                    <i className="fa-solid fa-arrow-right-long p1-clr"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-mg-6 col-sm-6">
              <div className="news-single-items blog-inside-blog2 overflow-hidden">
                <Link href="/blog-details"
                  className="news-image image-box-effect position-relative overflow-hidden">
                  <img src="assets/img/blog/inside-blog6.jpg" alt="img" className="w-100 img" />
                  <img src="assets/img/blog/inside-blog6.jpg" alt="img" className="w-100 img" />
                  <img src="assets/img/blog/inside-blog6.jpg" alt="img" className="w-100" />
                </Link>
                <div className="news-content">
                  <span className="fs-seven pra sub-font mb-xl-3 mb-2 d-block">Virtual / June 16, 2024</span>
                  <h4 className="black">
                    <Link href="/blog-details" className="black visible-slowly-right">Virtual Reality – Why
                      this Time is Different</Link>
                  </h4>
                  <Link href="/blog-details" className="read-more d-block">
                    <i className="fa-solid fa-arrow-right-long p1-clr"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <ul className="serial-pagination d-flex align-items-center justify-content-center gap-3">
            <li><a href="#">1</a></li>
            <li><a href="#" className="active">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default BlogArea;
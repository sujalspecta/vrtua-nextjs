
"use client"

import React from 'react';


if(typeof window !== 'undefined') {
  require('bootstrap/js/dist/collapse');
}

const FaqPricing = () => {
  return (
    <>
      <section className="faq-section-version2 fix section-padding white-bg">
        <div className="container">
          <div className="section-title text-center mb-60">
            <h6 className="body-font p1-clr mb-xxl-3 mb-sm-3 mb-2 text-uppercase wow fadeInUp" data-wow-delay=".3s">
              QUESTIONS & ANSWERS
            </h6>
            <h2 className="black visible-slowly-right fw-bold d-block">
              Payment Questions
            </h2>
          </div>
          <div className="row g-lg-0 g-4 align-items-center justify-content-lg-between justify-content-center">
            <div className="col-lg-5">
              <div className="faq-thumb-version2 rounded-3 reveal-left w-100">
                <img src="assets/img/about/faq-thumb2.jpg" alt="img" className="rounded-3 w-100" />
              </div>
            </div>
            <div className="col-lg-1 d-lg-block d-none">
              <div className="faqs-lines"></div>
            </div>
            <div className="col-lg-6">
              <div className="accordion faq-content border-0 d-flex flex-column gap-xxl-4 gap-3"
                id="accordionExample">
                <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                  <div className="accordion-header" id="headingOne11">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseOne11" aria-expanded="true" aria-controls="collapseOne11">
                      Where are your company branches located?
                    </button>
                    <div id="collapseOne11" className="accordion-collapse collapse show"
                      aria-labelledby="headingOne11" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p className="pra">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                          aut fugit, sed quia consequuntur magni dolores</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item wow fadeInUp" data-wow-delay="0.3s">
                  <div className="accordion-header" id="headingTwo22">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo22" aria-expanded="false" aria-controls="collapseTwo22">
                      Are Varko A Good Investment?
                    </button>
                    <div id="collapseTwo22" className="accordion-collapse collapse"
                      aria-labelledby="headingTwo22" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p className="pra">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                          aut fugit, sed quia consequuntur magni dolores</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                  <div className="accordion-header" id="headingTwo33">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo33" aria-expanded="false" aria-controls="collapseTwo33">
                      Can I be a dropshipper for your company?
                    </button>
                    <div id="collapseTwo33" className="accordion-collapse collapse"
                      aria-labelledby="headingTwo33" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p className="pra">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                          aut fugit, sed quia consequuntur magni dolores</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item wow fadeInUp" data-wow-delay="0.5s">
                  <div className="accordion-header" id="headingTwo44">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo44" aria-expanded="false" aria-controls="collapseTwo44">
                      Whats the best-selling liquid at the moment?
                    </button>
                    <div id="collapseTwo44" className="accordion-collapse collapse"
                      aria-labelledby="headingTwo44" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p className="pra">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                          aut fugit, sed quia consequuntur magni dolores</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                  <div className="accordion-header" id="headingTwo55">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo55" aria-expanded="false" aria-controls="collapseTwo55">
                      What brands are you selling at the moment?
                    </button>
                    <div id="collapseTwo55" className="accordion-collapse collapse"
                      aria-labelledby="headingTwo55" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p className="pra">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                          aut fugit, sed quia consequuntur magni dolores</p>
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

export default FaqPricing;
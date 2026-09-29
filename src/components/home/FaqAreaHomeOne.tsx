
"use client"
import React from 'react';

if(typeof window !== 'undefined') {
  require('bootstrap/js/dist/collapse');
}

const FaqAreaHomeOne = () => {
  return (
    <>
      <section className="faq-section section-padding">
        <div className="container">
          <div className="section-title text-center mb-60">
            <h6 className="body-font p1-clr mb-xxl-3 mb-sm-3 mb-2 text-uppercase wow fadeInUp" data-wow-delay=".3s">
              QUESTIONS & ANSWERS
            </h6>
            <h2 className="black visible-slowly-right fw-bold d-block">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="accordion faq-content border-0 d-flex flex-column gap-xxl-4 gap-3" id="accordionExample">
            <div className="accordion-item wow fadeInUp" data-wow-delay="0.3s">
              <div className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  What brands are you selling at the moment?
                </button>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p className="pra">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni dolores eos qui
                      ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                      dolor sit amet, consectetur,</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
              <div className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Facilisis massa orci sit elementum eget rhoncus arcu?
                </button>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p className="pra">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni
                      dolores eos qui
                      ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                      dolor sit amet, consectetur,</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeInUp" data-wow-delay="0.5s">
              <div className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Cras et vulputate laoreet at pellentesque amet sapien?
                </button>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p className="pra">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni
                      dolores eos qui
                      ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                      dolor sit amet, consectetur,</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
              <div className="accordion-header" id="headingfour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                  Luctus bibendum pharetra porta a scelerisque ridiculus natoque?
                </button>
                <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p className="pra">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni
                      dolores eos qui
                      ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                      dolor sit amet, consectetur,</p>
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

export default FaqAreaHomeOne;
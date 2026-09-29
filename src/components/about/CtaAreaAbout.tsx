

import Link from 'next/link';
import React from 'react';

const CtaAreaAbout = () => {
  return (
    <>
      <section className="get-starteds position-relative fix space-bottom">
        <div className="container">
          <div className="partnert-get-wrapper space-bottom space-top rounded-3 text-center">
            <div className="section-title">
              <h6 className="body-font white-sub-badge white mb-xxl-4 mb-sm-3 mb-3 text-uppercase wow fadeInUp"
                data-wow-delay=".3s">
                GET STARTED
              </h6>
              <h2 className="white visible-slowly-bottom fw-bold d-block mb-40">
                Discover the possibilities of virtual
                reality for your business.
              </h2>
              <Link href="/contact"
                className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden p2-bg rounded-2">
                Contact With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaAreaAbout;
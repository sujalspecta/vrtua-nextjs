
"use client"
import React from 'react';

const HelpingArea = () => {
  return (
    <>
      <section className="faqs-helping-search fix pt-lg-0 pt-5">
        <div className="container">
          <div className="section-title text-center mb-60">
            <h6 className="body-font p1-clr mb-xxl-3 mb-sm-3 mb-2 text-uppercase wow fadeInUp" data-wow-delay=".3s">
              Frequently Asked Questions
            </h6>
            <h2 className="black visible-slowly-right fw-bold d-block">
              How Can We Help You?
            </h2>
          </div>
          <form onClick={e => e.preventDefault()} className="d-flex align-items-center justify-content-between">
            <input type="text" placeholder="Search Here..." />
              <button type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
          </form>
        </div>
      </section>
    </>
  );
};

export default HelpingArea;
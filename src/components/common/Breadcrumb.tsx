"use client";
 

const Breadcrumb = ({ style_2, title, setIsVideoOpen }: any) => { 


  return (
    <>
      <section className="banner-breadcrumbs position-relative space-top">
        <div className="container">
          <div className="row justify-content-center space-bottom">
            <div className="col-lg-6">
              <div className="breadcrumbs-content text-center">
                <h2 className="fw-bold black mb-lg-3 mb-2 wow fadeInUp" data-wow-delay="0.4s">{title}</h2>
                <p className="pra fs-six wow fadeInUp" data-wow-delay="0.5s">
                  Enjoy the limitless entertainment possibilities with VR. Witness, play, and explore new
                  worlds
                </p>
              </div>
            </div>
          </div>
          <div className="common-thumb">
            {style_2 ?
              <div className="play-thumb w-100 position-relative d-center rounded-3">
                <img src="assets/img/about/service-bg.jpg" alt="img" className="w-100 rounded-2" />
                <a
                  onClick={() => setIsVideoOpen(true)}
                  style={{ cursor: 'pointer' }}
                  className="play-in video-popup white-bg rounded-circle d-center fw-bold btn-vivacity fs-five sub-font black">Play</a>
              </div>
              :

              <img src="assets/img/banner/common-thumb.jpg" alt="img" className="w-100 rounded-3" />
            }

          </div>



        </div>
      </section>

   

    </>
  );
};

export default Breadcrumb;
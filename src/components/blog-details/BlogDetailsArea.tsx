
"use client"
import Link from 'next/link';
import React from 'react';

const BlogDetailsArea = () => {
  return (
    <>
      <section className="blog-details-section fix space-bottom mt-60">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="blog-details-left">
                <div className="mb-60 wow fadeInUp" data-wow-delay="0.2s">
                  <p className="pra fs-seven mb-xl-4 mb-3">
                    There are many variations of passages of Lorem Ipsum available, but the majority have
                    suffered alteration in form,
                    by
                    injected humour, or randomised words which dont look even slightly believable. If you
                    are going to use a of need to
                    be
                    sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum
                    predefined the generator on
                    the
                    Internet. It uses a dictionary of over words,
                  </p>
                  <p className="pra fs-seven">
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising
                    pain was born and I will
                    give
                    you a complete account of the system, and expound the actual teachings of the great
                    explorer truth,master-builder of
                    human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is
                    pleasure, but because those who
                    do
                    not know how to pursue pleasure rationally
                  </p>
                </div>
                <div className="straight-pragraph section-bg rounded-3 mb-60 wow fadeInUp" data-wow-delay="0.3s">
                  <img src="assets/img/icon/straight-quotes.png" alt="img" className="mb-4" />
                  <p className="fs-five fw_500 black mb-4">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  </p>
                  <a href="#" className="fs-six black text-decoration-underline fw_600">Nicolas Markon</a>
                </div>
                <p className="pra fs-seven mb-60 wow fadeInUp" data-wow-delay="0.4s">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                  voluptatum deleniti dolores et
                  quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                  deserunt mollitia animi, id
                  est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta
                  nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
                  possimus, voluptas assumenda est,
                  omnis dolor repellendus.
                </p>
                <div className="mb-60 wow fadeInUp" data-wow-delay="0.5s">
                  <h3 className="black fw_700 mb-lg-3 mb-2">How to Update your Theme</h3>
                  <p className="fs-seven pra">These cases are perfectly simple and easy to distinguish. In a free
                    hour, when our power of choice is untrammelled and
                    when nothing prevents our being able to do what we like best, every pleasure is to be
                    welcomed and every pain avoided.
                    But in certain circumstances and owing to the claims of duty or the obligations of
                    business it will frequently occur
                    that pleasures have to be repudiated and annoyances accepted.</p>
                </div>
                <div className="mb-60 d-flex gap-lg-4 gap-md-3 gap-2 wow fadeInUp" data-wow-delay="0.6s">
                  <div className="blog-straght-thumb w-100">
                    <img src="assets/img/blog/blog-adjust1.png" alt="img" className="rounded-3 w-100" />
                  </div>
                  <div className="blog-straght-thumb w-100">
                    <img src="assets/img/blog/blog-adjust2.png" alt="img" className="rounded-3 w-100" />
                  </div>
                </div>
                <p className="fs-seven pra mb-60 wow fadeInUp" data-wow-delay="0.4s">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id
                  quod maxime placeat facere
                  possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
                  et officiis debitis aut
                  rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non Itaque
                  rerum hic tenetur a
                  sapiente delectus, ut aut reiciendis voluptatibus maiores
                </p>
                <div
                  className="share-tags-wrap d-flex flex-sm-nowrap flex-wrap gap-3 align-items-center justify-content-sm-between justify-content-center mb-60">
                  <ul className="share-tag d-flex align-items-center gap-3">
                    <li className="fs-four fw_700 black sub-font pe-xxl-4">Tags:</li>
                    <li><a href="Javascript:void(0)">360video</a></li>
                    <li><a href="Javascript:void(0)">application</a></li>
                  </ul>
                  <ul className="share-social d-flex gap-2 align-items-center">
                    <li>
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    </li>
                  </ul>
                </div>
                <div className="previus-blog-contest d-flex align-items-center justify-content-between mb-60">
                  <a href="javascript:void(0)" className="d-flex align-items-center gap-2 fs-seven fw_700 black">
                    <i className="fa-solid fa-arrow-left"></i> Previous Post
                  </a>
                  <a href="javascript:void(0)" className="d-flex align-items-center gap-2 fs-seven fw_700 black">
                    Next Post <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
                <div className="comments-area mb-60">
                  <h3 className="black fw_700 mb-2">2 Comments</h3>
                  <div className="comment-inner">
                    <div className="comment-box d-flex align-items-center gap-sm-4 gap-3 wow fadeInUp"
                      data-wow-delay="0.3s">
                      <img src="assets/img/team/gordon.jpg" alt="img" className="rounded-circle gordon-thumb" />
                      <div className="cont">
                        <div className="d-flex align-items-end justify-content-between mb-4">
                          <div className="text">
                            <span className="fs-four fw_700 black d-block mb-1">Jessica Brown</span>
                            <span className="fs-seven p1-clr">16 June, 2024, 7:35pm</span>
                          </div>
                          <button type="button"
                            className="rounded-3 replay py-2 px-4 fw_500 black-bg white sub-font">Reply</button>
                        </div>
                        <p className="fs-seven pra">
                          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                          placeat facere possimus, omnis voluptas
                          assumenda est, omnis dolor r
                        </p>
                      </div>
                    </div>
                    <div className="line"></div>
                    <div className="comment-box d-flex align-items-center gap-sm-4 gap-3 wow fadeInUp"
                      data-wow-delay="0.4s">
                      <img src="assets/img/team/niklos.jpg" alt="img" className="rounded-circle gordon-thumb" />
                      <div className="cont">
                        <div className="d-flex align-items-end justify-content-between mb-4">
                          <div className="text">
                            <span className="fs-four fw_700 black d-block mb-1">Rashed kahan</span>
                            <span className="fs-seven p1-clr">16 June, 2024, 7:35pm</span>
                          </div>
                          <button type="button"
                            className="rounded-3 replay py-2 px-4 fw_500 black-bg white sub-font">Reply</button>
                        </div>
                        <p className="fs-seven pra">
                          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                          placeat facere possimus, omnis
                          voluptas
                          assumenda est, omnis dolor r
                        </p>
                      </div>
                    </div>
                    <div className="line"></div>
                  </div>
                </div>
                <div className="leave-comments">
                  <h3 className="black fw_700 mb-4">Leave a comment</h3>
                  <form onClick={e => e.preventDefault()}>
                    <div className="row g-lg-4 g-3">
                      <div className="col-lg-4">
                        <input type="text" placeholder="Name" />
                      </div>
                      <div className="col-lg-4">
                        <input type="email" placeholder="Email" />
                      </div>
                      <div className="col-lg-4">
                        <input type="text" placeholder="Subjects(optional)" />
                      </div>
                      <div className="col-lg-12">
                        <textarea name="comments" placeholder="Messages" rows={5}></textarea>
                      </div>
                      <div className="col-lg-12">
                        <button type="submit"
                          className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden p1-bg rounded-2">
                          Post Comments
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-right-area">
                <div className="blog-details-space section-bg rounded-3 wow fadeInUp" data-wow-delay="0.2s">
                  <form onClick={e => e.preventDefault()}>
                    <input type="text" placeholder="Search" />
                    <button type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
                  </form>
                </div>
                <div className="blog-details-space section-bg rounded-3 wow fadeInUp" data-wow-delay="0.3s">
                  <h4 className="black mb-4 fw_700">Categories</h4>
                  <ul className="blog-category">
                    <li>
                      <a href="javascript:void(0)">
                        Developer Blog
                        <span className="icon"><i className="fa-solid fa-chevron-right"></i></span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        Developer Center
                        <span className="icon"><i className="fa-solid fa-chevron-right"></i></span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        Developer Forums
                        <span className="icon"><i className="fa-solid fa-chevron-right"></i></span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        Game Development
                        <span className="icon"><i className="fa-solid fa-chevron-right"></i></span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        Innovation
                        <span className="icon"><i className="fa-solid fa-chevron-right"></i></span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        Technology
                        <span className="icon"><i className="fa-solid fa-chevron-right"></i></span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="blog-details-space section-bg rounded-3 wow fadeInUp" data-wow-delay="0.4s">
                  <h4 className="black mb-4 fw_700">Latest Post</h4>
                  <ul className="blog-latest-post">
                    <li>
                      <Link href="/blog-details" className="rounded-circle">
                        <img src="assets/img/blog/latest-details1.png" alt="img" className="rounded-circle" />
                      </Link>
                      <div className="cont">
                        <a href="#" className="black fs-six sub-font fw_700 mb-2 d-block">
                          Six benefits that the
                          new metaverse offer
                        </a>
                        <div className="d-flex align-items-center gap-2 pra fs-seven">
                          <i className="fa-regular fa-clock p1-clr"></i> 16 June 2024
                        </div>
                      </div>
                    </li>
                    <li className="line"></li>
                    <li>
                      <Link href="/blog-details" className="rounded-circle">
                        <img src="assets/img/blog/latest-details2.png" alt="img" className="rounded-circle" />
                      </Link>
                      <div className="cont">
                        <a href="#" className="black fs-six sub-font fw_700 mb-2 d-block">
                          Virtual reality support
                          & enhance outdoor
                        </a>
                        <div className="d-flex align-items-center gap-2 pra fs-seven">
                          <i className="fa-regular fa-clock p1-clr"></i> 16 June 2024
                        </div>
                      </div>
                    </li>
                    <li className="line"></li>
                    <li>
                      <Link href="/blog-details" className="rounded-circle">
                        <img src="assets/img/blog/latest-details3.png" alt="img" className="rounded-circle" />
                      </Link>
                      <div className="cont">
                        <a href="#" className="black fs-six sub-font fw_700 mb-2 d-block">
                          The Metaverse Will
                          Make Gamers Of Us All
                        </a>
                        <div className="d-flex align-items-center gap-2 pra fs-seven">
                          <i className="fa-regular fa-clock p1-clr"></i> 16 June 2024
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="blog-details-space section-bg rounded-3 wow fadeInUp" data-wow-delay="0.6s">
                  <h4 className="black mb-4 fw_700">Tags</h4>
                  <ul className="blog-tags">
                    <li>
                      <a href="javascript:void(0)">
                        360video
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        application
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        emerging tech
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        virtual reality
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        VR glasses
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsArea;
"use client"

import React from 'react';
import Link from 'next/link';
import UseSticky from '@/hooks/UseSticky';
import menu_data from '@/data/menu-data';
import Offcanvas from '@/components/common/Offcanvas';

const HeaderOne = ({ searchOpen, setSearchOpen }: any) => {

  const { sticky } = UseSticky()
  const [open, setOpen] = React.useState(false);
  const toggleSidebar = () => setOpen(!open);



  return (
    <>

      <div className="header-top-section d-none d-xl-block">
        <div className="container">
          <div className="header-top-wrapper">
            <ul className="contact-list">
              <li>
                <i className="fa-regular fa-clock p2-clr"></i>
                Mon – Sun: 9.00 am – 8.00pm
              </li>
              <li className="line"></li>
              <li>
                <i className="fa-solid fa-envelope p2-clr"></i>
                <a href="#" className="link">info@vrtualkart.com</a>
              </li>
              <li className="line"></li>
              <li>
                <i className="fa-solid fa-location-dot p2-clr"></i>
                <a href="#" className="link">A-1, Envanto HQ, Australia</a>
              </li>
            </ul>
            <div className="header-top-social d-flex align-items-center">
              <a href="#" className="white sub-font"><i className="fa-brands fa-facebook"></i> Facebook</a>
              <span className="line"></span>
              <a href="#" className="white sub-font"><i className="fa-brands fa-twitter"></i> Twitter</a>
              <span className="line"></span>
              <a href="#" className="white sub-font"><i className="fa-brands fa-linkedin"></i> Linkedin</a>
            </div>
          </div>
        </div>
      </div>


      <header id="header-sticky" className={`header-section white-bg ${sticky ? 'sticky' : ''}`}>
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <Link href="/" className="header-logo">
                <img src="assets/img/logo/logo.png" alt="logo-img" />
              </Link>
              <div className="mean__menu-wrapper d-none d-xl-block">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <ul>
                      {menu_data.map((item, i) => (
                        <li key={i} className={`${item.has_dropdown ? 'has-dropdown' : ''}`}>
                          <Link href={item.link}>
                            {item.title}
                            {item.has_dropdown || item.img_dropdown ? <i className="fas fa-angle-down"></i> : null}
                          </Link>
                          {item.img_dropdown &&
                            <>
                              <ul className="submenu has-homemenu">
                                <li>
                                  <div className="homemenu-items">
                                    <div className="homemenu">
                                      <Link href="/" className="homemenu-thumb d-center">
                                        <img src="assets/img/banner/home1-vr.png" alt="img" />
                                        <span className="demo-button d-center py-3 px-4 p1-bg">
                                          <span className="white">Home One</span>
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                </li>
                              </ul>

                            </>
                          }
                          {item.has_dropdown &&
                            <ul className="submenu">
                              {item.sub_menus?.map((sub_item, index) => (
                                <li key={index}><Link href={sub_item.link}>{sub_item.title}</Link></li>
                              ))}
                            </ul>
                          }
                        </li>

                      ))}

                    </ul>
                  </nav>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <a href="#" className="call-icon"><i className="fa-solid fa-phone"></i> <span
                  className="d-md-block d-none">(+62) 81 6754 345</span></a>
                <a style={{ cursor: "pointer" }} onClick={() => setSearchOpen(!searchOpen)} className="search-trigger search-icon"><i className="fa-solid fa-magnifying-glass"></i></a>
                <Link href="/contact"
                  className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden p1-bg rounded-2 d-sm-flex d-none">
                  <span className="d-md-block d-none">Get</span> Started <span
                    className="d-md-block d-none">Today</span>
                </Link>
                <div className="header__hamburger my-auto">
                  <div className="sidebar__toggle" onClick={toggleSidebar}>
                    <img src="assets/img/icon/menu.png" alt="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>


      <Offcanvas open={open} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default HeaderOne;
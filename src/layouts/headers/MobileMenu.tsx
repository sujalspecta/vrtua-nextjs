
"use client"
import menu_data from '@/data/menu-data';
import Link from 'next/link';
import React, { useState } from 'react';

const MobileMenu = () => {

  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };




  return (
    <>
     
      <div className="mean-bar d-block d-xl-none">
        <a href="#nav" className="meanmenu-reveal"><span><span><span></span></span></span></a>
        <nav className="mean-nav">
          <ul >

            {menu_data.map((item, i) => (
              <li key={i} className="has-dropdown active menu-thumb">
                <a href={item.link}>
                  {item.title}
                  {item.has_dropdown || item.img_dropdown ? <i className="fas fa-angle-down"></i> : null}
                </a>

                {item.img_dropdown &&
                  <ul className="submenu has-homemenu" style={{
                    display: navTitle === item.title ? "block" : "none",
                  }}>
                    <li >
                      <div className="homemenu-items">
                        <div className="homemenu">
                          <Link href="/" className="homemenu-thumb d-center">
                            <img src="assets/img/banner/home1-vr.png" alt="img" />
                            <span className="demo-button d-center py-3 px-4 p1-bg">
                              <span className="white">Home</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                }

                {item.has_dropdown &&
                  <ul className="submenu" style={{
                    display: navTitle === item.title ? "block" : "none",
                  }}>
                    {item.sub_menus?.map((sub_menu, index) => (
                      <li key={index}><Link href={sub_menu.link}>{sub_menu.title}</Link></li>
                    ))}
                  </ul>

                }


                {item.has_dropdown || item.img_dropdown ? <a className={`mean-expand ${navTitle === item.title ? "mean-clicked" : ""}`} href="#"
                  onClick={() => openMobileMenu(item.title)}
                  style={{ fontSize: "18px", cursor: "pointer" }}
                ><i className="far fa-plus"></i></a> : null}

              </li>
            ))}
          </ul>
        </nav></div>
    </>
  );
};

export default MobileMenu;
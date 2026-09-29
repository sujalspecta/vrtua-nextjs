 
 
"use client"

import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';

// use gsap 
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { visibleSlowly } from '@/utils/title-animation';
import useScrollSmooth from '@/hooks/use-scroll-smooth';

import {
  ScrollSmoother,
  ScrollToPlugin,
  ScrollTrigger,
  SplitText,
} from "@/plugins";  
import BreadcrumbsContact from '../common/BreadcrumbsContact';
import ContactInfo from './ContactInfo';
import ContactArea from './ContactArea';
import GoogleMap from './GoogleMap';
import { useState } from 'react';
import SearchOffcanvas from '../common/SearchOffcanvas';
gsap.registerPlugin(ScrollSmoother, ScrollTrigger, ScrollToPlugin, SplitText);

 

const Contact = () => {

  useScrollSmooth()
  useGSAP(() => {
    visibleSlowly()

  });

  const [searchOpen, setSearchOpen] = useState(false)



  return (
    <>
     <HeaderOne searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeaderOne searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
          <main>
            <BreadcrumbsContact /> 
            <ContactInfo />
            <ContactArea />
            <GoogleMap />
            <FooterOne />
          </main>
        </div>
      </div>

      <SearchOffcanvas searchOpen={searchOpen} setSearchOpen={setSearchOpen} />


    </>
  );
};

export default Contact;

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
import BreadcrumbsFaq from '../common/BreadcrumbsFaq';
import HelpingArea from './HelpingArea';
import FaqPricing from '../pricing/FaqPricing';
import FaqAreaHomeOne from '../home/FaqAreaHomeOne';
import CtaAreaHomeOne from '../home/CtaAreaHomeOne';
import GetinTouchHomeOne from '../home/GetinTouchHomeOne';
import { useState } from 'react';
import SearchOffcanvas from '../common/SearchOffcanvas';
gsap.registerPlugin(ScrollSmoother, ScrollTrigger, ScrollToPlugin, SplitText);



const Faqs = () => {

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
            <BreadcrumbsFaq />
            <HelpingArea />
            <FaqPricing />
            <FaqAreaHomeOne />
            <CtaAreaHomeOne style_2={true} style_3={true} />
            <GetinTouchHomeOne />
            <FooterOne />
          </main>
        </div>
      </div>

      <SearchOffcanvas searchOpen={searchOpen} setSearchOpen={setSearchOpen} />


    </>
  );
};

export default Faqs;
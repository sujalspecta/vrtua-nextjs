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
import BreadcrumbsService from '../common/BreadcrumbsService';
import ChooseAreaHomeOne from '../home/ChooseAreaHomeOne';
import WorldWithness from './WorldWithness';
import FaqAreaHomeOne from '../home/FaqAreaHomeOne';
import CtaAreaHomeOne from '../home/CtaAreaHomeOne';
import { useState } from 'react';
import SearchOffcanvas from '../common/SearchOffcanvas';
gsap.registerPlugin(ScrollSmoother, ScrollTrigger, ScrollToPlugin, SplitText);



const ServiceDetails = () => {



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
            <BreadcrumbsService />
            <ChooseAreaHomeOne style_2={true} style_3={true} />
            <WorldWithness />
            <FaqAreaHomeOne />
            <CtaAreaHomeOne style_2={true} style_3={true} />
            <FooterOne />
          </main>
        </div>
      </div>
      <SearchOffcanvas searchOpen={searchOpen} setSearchOpen={setSearchOpen} />


    </>
  );
};

export default ServiceDetails;
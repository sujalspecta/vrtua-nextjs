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
import Breadcrumb from '@/components/common/Breadcrumb';
import ServiceArea from './ServiceArea';
import PricingAreaHomeOne from '../home/PricingAreaHomeOne';
import ChooseAreaHomeOne from '../home/ChooseAreaHomeOne';
import BrandHomeOne from '../home/BrandHomeOne';
import CtaAreaHomeOne from '../home/CtaAreaHomeOne';
import VideoPopup from '@/modals/VideoPopup';
import React, { useState } from 'react';
import SearchOffcanvas from '../common/SearchOffcanvas';
gsap.registerPlugin(ScrollSmoother, ScrollTrigger, ScrollToPlugin, SplitText);



const Service = () => {


  useScrollSmooth()


  useGSAP(() => {
    visibleSlowly()

  });

  const [searchOpen, setSearchOpen] = useState(false)
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
      <HeaderOne searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeaderOne searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
          <main>
            <Breadcrumb style_2={true} title="Our Services" setIsVideoOpen={setIsVideoOpen} />
            <ServiceArea />
            <PricingAreaHomeOne />
            <ChooseAreaHomeOne style_2={true} />
            <BrandHomeOne />
            <CtaAreaHomeOne style_2={true} />
            <FooterOne />
          </main>
        </div>
      </div>

      <SearchOffcanvas searchOpen={searchOpen} setSearchOpen={setSearchOpen} />


      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"qmGYnJgCW1o"}
      />
      {/* video modal end */}

    </>
  );
};

export default Service;
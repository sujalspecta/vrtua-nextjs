"use client"

import HeroArea from './HeroArea';
import HeaderOne from '@/layouts/headers/HeaderOne';
import HomeAbout from './HomeAbout';
import BrandHomeOne from './BrandHomeOne';
import ServiceAreaHomeOne from './ServiceAreaHomeOne';
import TestimonialAreaHomeOne from './TestimonialAreaHomeOne';
import ChooseAreaHomeOne from './ChooseAreaHomeOne';
import PricingAreaHomeOne from './PricingAreaHomeOne';
import FaqAreaHomeOne from './FaqAreaHomeOne';
import CtaAreaHomeOne from './CtaAreaHomeOne';
import ProjectsAreaHomeOne from './ProjectsAreaHomeOne';
import GetinTouchHomeOne from './GetinTouchHomeOne';
import NewsAreaHomeOne from './NewsAreaHomeOne';
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
import React, { useState } from 'react';
import SearchOffcanvas from '../common/SearchOffcanvas';
import VideoPopup from '@/modals/VideoPopup';   
gsap.registerPlugin(ScrollSmoother, ScrollTrigger, ScrollToPlugin, SplitText);



const HomeOne = () => {
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
            <HeroArea setIsVideoOpen={setIsVideoOpen} />
            <HomeAbout />
            <BrandHomeOne />
            <ServiceAreaHomeOne />
            <TestimonialAreaHomeOne />
            <ChooseAreaHomeOne setIsVideoOpen={setIsVideoOpen} />
            <PricingAreaHomeOne />
            <FaqAreaHomeOne />
            <CtaAreaHomeOne />
            <ProjectsAreaHomeOne />
            <GetinTouchHomeOne />
            <NewsAreaHomeOne />
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

export default HomeOne;
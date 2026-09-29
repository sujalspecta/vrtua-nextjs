
"use client"

import React, { useState } from 'react';
import BrandAbout from './BrandAbout';
import UseitArea from './UseitArea';
import VissionAbout from './VissionAbout';
import CtaAreaAbout from './CtaAreaAbout';
import TeamAreaAbout from './TeamAreaAbout';
import Breadcrumb from '../common/Breadcrumb';
import BrandHomeOne from '../home/BrandHomeOne';
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
import VideoPopup from '@/modals/VideoPopup';
import SearchOffcanvas from '../common/SearchOffcanvas';
import TestimonialAbout from './TestimonialAbout';
gsap.registerPlugin(ScrollSmoother, ScrollTrigger, ScrollToPlugin, SplitText);


const About = () => {

  useScrollSmooth()

  useGSAP(() => {
    visibleSlowly()
  });

  const [searchOpen, setSearchOpen] = useState(false)
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);



 return (
  <>
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <HeaderOne
          searchOpen={searchOpen}
          setSearchOpen={setSearchOpen}
        />

        <main>
          <Breadcrumb title="About Us" />
          <BrandAbout />
          <VissionAbout />
          <TestimonialAbout />
          <UseitArea setIsVideoOpen={setIsVideoOpen} />
          <BrandHomeOne />
          <TeamAreaAbout />
          <CtaAreaAbout />
          <FooterOne />
        </main>
      </div>
    </div>

    <SearchOffcanvas
      searchOpen={searchOpen}
      setSearchOpen={setSearchOpen}
    />

    <VideoPopup
      isVideoOpen={isVideoOpen}
      setIsVideoOpen={setIsVideoOpen}
      videoId="qmGYnJgCW1o"
    />
  </>
);

};

export default About;
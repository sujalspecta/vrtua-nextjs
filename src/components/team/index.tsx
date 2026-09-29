
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
import BreadcrumbsTeam from '../common/BreadcrumbsTeam';
import TeamArea from './TeamArea';
import BrandHomeOne from '../home/BrandHomeOne';
import ProjectsTeam from './ProjectsTeam';
import CtaAreaHomeOne from '../home/CtaAreaHomeOne';
import { useState } from 'react';
import SearchOffcanvas from '../common/SearchOffcanvas';
gsap.registerPlugin(ScrollSmoother, ScrollTrigger, ScrollToPlugin, SplitText);

 

const Team = () => {

  useScrollSmooth()
  useGSAP(() => {
    visibleSlowly()

  });
  const [searchOpen, setSearchOpen] = useState(false)


  return (
    <>

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeaderOne searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
          <main>
            <BreadcrumbsTeam />
            <TeamArea />
            <BrandHomeOne />
            <ProjectsTeam />
            <CtaAreaHomeOne style_2={true} style_3={true} />         
            <FooterOne />
          </main>
        </div>
      </div>

      <SearchOffcanvas searchOpen={searchOpen} setSearchOpen={setSearchOpen} />


    </>
  );
};

export default Team;
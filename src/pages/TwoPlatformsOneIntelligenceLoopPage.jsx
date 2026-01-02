import React from 'react'
import SectionHeading from "@/components/common/SectionHeading";
import UspServices from '../components/services/UspServices';
import FooterSection from "@/components/home/FooterSection";
import Navbar from "@/components/Navbar.jsx";
import MainBanner from '../components/services/MainBanner';
import CtaSection from "../components/common/CtaSection";
import FeatureCard from "./../components/card/FeaturedCard";
import { tpil_HEADER } from "./../config/twoplatformsoneintelligenceloopConfig"
import { Lock } from 'lucide-react';
import * as LucideIcons from "lucide-react";
import Button from '../components/ui/Button';

const TwoPlatformsOneIntelligenceLoopPage = () => {
  return (
    <>
             <Navbar
                wrapperClassName="relative "
                disableScrollHide={true}
                linkClassName="text-black"
                iconClassName="invert-0"
            />
            <section className='py-[150px] text-center rounded-[50px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)] text-white'>
  
                <MainBanner data={tpil_HEADER} />
            </section>
            <FooterSection/>
    </>
  )
}

export default TwoPlatformsOneIntelligenceLoopPage
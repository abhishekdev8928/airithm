import React from "react";
import Button from "../components/ui/Button";
import TestingCapabilitiesSection from "../components/automation/TestingCapilitiesSection";
import HeroSection from "../components/common/HeroSection";
import LifeCycleSection from "../components/automation/LifeCycleSection";
import CtaSection from "../components/common/CtaSection";
import FooterSection from "../components/automation/FooterSection";


// config

import {AUTOMATION_HERO_CONFIG , AUTOMATION_CTA_CONFIG} from  '@/config/automationConfig'
import Navbar from "../components/Navbar";





const AutomationPage = () => {
  return (
    <>
<Navbar
  wrapperClassName="relative "
  disableScrollHide={true}
  linkClassName="text-black"
   iconClassName="invert-0"
/>

      <HeroSection {...AUTOMATION_HERO_CONFIG} />
      <TestingCapabilitiesSection />

      <LifeCycleSection />

      <CtaSection wrapperClassName="mt-[-100px]" {...AUTOMATION_CTA_CONFIG} />
      <FooterSection />
    </>
  );
};

export default AutomationPage;

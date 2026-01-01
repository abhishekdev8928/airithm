import React from 'react'
import SectionHeading from "@/components/common/SectionHeading";
import UspServices from '../components/services/UspServices';
import FooterSection from "@/components/home/FooterSection"; 
import Navbar from "@/components/Navbar.jsx";
import MainBanner from '../components/services/MainBanner';
import {AgenticArchitectureConfig, CORE_MODULE_CONFIG, CORE_MODULE_CONFIG2, PLANING_CTA_CONFIG} from "./../config/agenticarchitectureConfig";
import { BookCheck, ChartArea, Settings } from 'lucide-react';
import CtaSection from "@/components/common/CtaSection";


const AgenticArchitecturePage = () => {
  return (
    <>
        <Navbar
        wrapperClassName="relative "
        disableScrollHide={true}
        linkClassName="text-black"
        iconClassName="invert-0"
    />
    <section className='py-[150px] text-center rounded-[50px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)] text-white'>
           
        <MainBanner data={AgenticArchitectureConfig} />
        
    </section>
      <UspServices data={CORE_MODULE_CONFIG} />
      <UspServices data={CORE_MODULE_CONFIG2} />
      <section className='py-[90px]'>
        <div className='max-w-[1232px] m-auto'>
            <SectionHeading
          title="Related Topics"
          titleClassName="sm:text-[48px]"
        />
        <div className="grid grid-cols-12 gap-6 mt-[40px]">
          <div className="col-span-4 rounded-[8px] p-6 shadow-[0px_3px_6px_0px_#C445581A]">
            <h3 className='text-[24px] flex items-center font-primary font-[600]'><Settings className='text-[#C44558] me-2'/> System Configuration</h3>
            <img className='mt-3' src="./public/topics/System Configuration.png" alt="" />
          </div>
          <div className="col-span-4 rounded-[8px] p-6 shadow-[0px_3px_6px_0px_#C445581A]">
            <h3 className='text-[24px] flex items-center font-primary font-[600]'><ChartArea className='text-[#C44558] me-2'/> Performance Metrics</h3>
            <img className='mt-3' src="./public/topics/Performance Metrics.png" alt="" />
          </div>
          <div className="col-span-4 rounded-[8px] p-6 shadow-[0px_3px_6px_0px_#C445581A]">
            <h3 className='text-[24px] flex items-center font-primary font-[600]'><BookCheck className='text-[#C44558] me-2'/>API Documentation</h3>
            <img className='mt-3' src="./public/topics/API Documentation.png" alt="" />
          </div>

        </div>

        </div>
      </section>
      
            <CtaSection wrapperClassName="mt-[-100px]" {...PLANING_CTA_CONFIG} />
            <FooterSection/>
    </>
  )
}

export default AgenticArchitecturePage
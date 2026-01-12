import React from 'react'
import SectionHeading from "@/components/common/SectionHeading";
import UspServices from '../components/services/UspServices';
import FooterSection from "@/components/home/FooterSection"; 
import Navbar from "@/components/Navbar.jsx";
import MainBanner from '../components/services/MainBanner';
import CtaSection from "../components/common/CtaSection";
import {Pc_HEADER, pc_USP_CONFIG , TIMELINE_SECTION_CONFIG} from "./../config/PlatformCapabilitiesConfig"
import { Cloud, CodeXml,TestTubeDiagonal } from 'lucide-react';
import RealTime from "../components/services/Realtime"
import * as LucideIcons from "lucide-react";
import Button from '../components/ui/Button';
import TimeLine from '../components/services/TimeLine';
import {
  Bot,
  Play,
  Brain,
  Shield,
  GraduationCap,
  BarChart3,
  GitBranch,
  ArrowUpRight,
} from "lucide-react";
import FeatureGrid from '../components/sections/FeaturedGrid';





const PlatformCapabilitiesPage = () => {
  return (
    <>
      <Navbar

        />
            <section className='lg:mt-[100px] mt-20 py-[100px] lg:py-[150px] text-center rounded-[50px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)] text-white'>
       
        <MainBanner data={Pc_HEADER} />
       
    </section>
    <section className='pb-0 relative  '>
        
       <FeatureGrid />
    </section>
    <section className='py-[70px]'>
           <SectionHeading
                        title="Feature Deep Dive"
                        subtitle='Explore how each capability transforms your testing workflow'
                       
                        subtitleClassName="  text-[#626161]"
                    />
    </section>
    <section className='py-[70px] rounded-[50px] bg-[linear-gradient(360deg,#042539_0%,#000000_100%)]'>
           <SectionHeading
                        title="Autonomous Test Generation"
                        subtitle='AI-powered test creation that understands your application.'
                        titleClassName=" text-[#fff]"
                        subtitleClassName="  text-[#626161]"
                    />
    </section>
        <section className='py-[70px] pb-[20px]'>
           <SectionHeading
                        title="What It Does"
                        subtitle='Our autonomous test generation engine analyzes your application’s structure, user flows, and business logic to automatically create comprehensive test suites. It identifies critical paths, edge cases, and potential failure points without manual intervention.'

                        subtitleClassName="  text-[#626161] max-w-[819px]"
                    />
    </section>
     <RealTime data={TIMELINE_SECTION_CONFIG} />
     <section className='py-[70px] rounded-[50px] bg-[linear-gradient(360deg,#000000_0%,#042539_100%)] mt-[70px]'>
               <SectionHeading
                        title="Key Benefits"
                        // subtitle='Our autonomous test generation engine analyzes your application’s structure, user flows, and business logic to automatically create comprehensive test suites. It identifies critical paths, edge cases, and potential failure points without manual intervention.'
                        titleClassName="sm:text-[48px] text-[#fff]"
                        // subtitleClassName=" sm:text-[16px] text-[#626161] max-w-[819px]"
                    />
                   <div className="max-w-[1360px] px-5 mx-auto mt-[40px] flex flex-wrap gap-6 justify-center">
  <div className="flex-1 min-w-[250px]  bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] p-4 rounded-2xl border border-[#747474] text-center">
    <h2 className='mae-gradient-text w-fit mx-auto  text-[48px] font-primary font-[600]'>95%</h2>
    <p className='text-[20px] text-white font-secondary'>Coverage Increase</p>
  </div>

  <div className="flex-1 min-w-[250px] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] p-4 rounded-[16px] border border-[#747474] text-center">
    <h2 className=' mae-gradient-text w-fit mx-auto text-[48px] font-primary font-[600]'>10x</h2>
    <p className='text-[20px] text-[#fff] font-secondary'>Faster Creation</p>
  </div>

  <div className="flex-1 min-w-[250px] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] p-4 rounded-[16px] border border-[#747474] text-center">
    <h2 className='mae-gradient-text w-fit mx-auto text-[48px] font-primary font-[600]'>70%</h2>
    <p className='text-[20px] text-[#fff] font-secondary'>Cost Reduction</p>
  </div>

  <div className="flex-1 min-w-[250px] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] p-4 rounded-[16px] border border-[#747474] text-center">
    <h2 className='mae-gradient-text w-fit mx-auto text-[48px] font-primary font-[600]'>85%</h2>
    <p className='text-[20px] text-[#fff] font-secondary'>Risk Mitigation</p>
  </div>
</div>

     </section>
     <section className='py-[90px] px-5'>
        <SectionHeading
                        title="Real-World Use Cases"
                       
                        titleClassName=" text-[#00273A]"
                        
                    />
                  <div className="max-w-[1227px] mx-auto mt-[40px] flex flex-wrap gap-5 justify-center">
  <div className="flex-1 min-w-[280px] transition-shadow duration-300
                hover:shadow-[0px_0px_40px_2px_#C4455840] px-5 border-light-sm py-6 shadow-[0px_0px_16px_0px_#C445580D] bg-[#fff] rounded-[16px]">
    <h2 className='font-[600] font-primary text-[24px]'>E-commerce Platform</h2>
    <p className='text-[#626161] text-[14px] sm:text-[18px] mt-2'>Automatically generates tests for product catalogs, shopping carts, and checkout flows across multiple payment methods.</p>
  </div>

  <div className="flex-1 min-w-[280px] transition-shadow duration-300
                hover:shadow-[0px_0px_40px_2px_#C4455840] px-5 border-light-sm py-6 shadow-[0px_0px_16px_0px_#C445580D] bg-[#fff] rounded-[16px]">
    <h2 className='font-[600] font-primary text-[24px]'>Banking Application</h2>
    <p className='text-[#626161] text-[14px] sm:text-[18px] mt-2'>Create comprehensive test suites for account management, transactions, and security features with regulatory compliance.</p>
  </div>
</div>

                                  <div className="flex mx-auto   flex-col-reverse   sm:flex-row justify-center items-stretch gap-4 mt-[30px] max-w-[300px] sm:max-w-full">
                      <div  className="bg-[linear-gradient(86.66deg,#C44558_10.85%,#FF7F7F_84.93%)] overflow-hidden   rounded-lg  p-0.5">
                      <Button
                                            icon="CircleArrowOutUpRight"
                                            iconSize="20px"
                                            btnText="Request Demo"
                                            className=" shadow-[0px_30px_12px_0px_#00000005]  bg-white text-[#C44558]"
                                        />

                                      </div>
                                        <Button
                                            icon="CircleArrowOutUpRight"
                                            iconSize="20px"
                                            btnText="View Architecture"
                                            className="  bg-primary-gradient text-white"
                                        />

                    </div>



     </section>
     <FooterSection/>

    </>
  )
}

export default PlatformCapabilitiesPage
import React from 'react'
import SectionHeading from "@/components/common/SectionHeading";
import UspServices from '../components/services/UspServices';
import FooterSection from "@/components/home/FooterSection"; 
import Navbar from "@/components/Navbar.jsx";
import MainBanner from '../components/services/MainBanner';
import CtaSection from "../components/common/CtaSection";
import {Pc_HEADER, pc_USP_CONFIG , TIMELINE_SECTION_CONFIG} from "./../config/PlatformCapabilitiesConfig"
import { Cloud, CodeXml, GitBranch, TestTubeDiagonal } from 'lucide-react';
import * as LucideIcons from "lucide-react";
import Button from '../components/ui/Button';
import TimeLine from '../components/services/TimeLine';

const PlatformCapabilitiesPage = () => {
  return (
    <>
      <Navbar
            wrapperClassName="relative "
            disableScrollHide={true}
            linkClassName="text-black"
            iconClassName="invert-0"
        />
            <section className='py-[150px] text-center rounded-[50px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)] text-white'>
       
        <MainBanner data={Pc_HEADER} />
       
    </section>
    <section className='pb-0 relative bg1  '>
        
        <UspServices data={pc_USP_CONFIG}/>
    </section>
    <section className='py-[70px]'>
           <SectionHeading
                        title="Feature Deep Dive"
                        subtitle='Explore how each capability transforms your testing workflow'
                        titleClassName="sm:text-[48px]"
                        subtitleClassName=" sm:text-[16px] text-[#626161]"
                    />
    </section>
    <section className='py-[70px] rounded-[50px] bg-[linear-gradient(360deg,#042539_0%,#000000_100%)]'>
           <SectionHeading
                        title="Autonomous Test Generation"
                        subtitle='AI-powered test creation that understands your application.'
                        titleClassName="sm:text-[48px] text-[#fff]"
                        subtitleClassName=" sm:text-[16px] text-[#626161]"
                    />
    </section>
        <section className='py-[70px] pb-[20px]'>
           <SectionHeading
                        title="What It Does"
                        subtitle='Our autonomous test generation engine analyzes your application’s structure, user flows, and business logic to automatically create comprehensive test suites. It identifies critical paths, edge cases, and potential failure points without manual intervention.'
                        titleClassName="sm:text-[48px]"
                        subtitleClassName=" sm:text-[16px] text-[#626161] max-w-[819px]"
                    />
    </section>
     <TimeLine data={TIMELINE_SECTION_CONFIG} />
     <section className='py-[70px] rounded-[50px] bg-[linear-gradient(360deg,#042539_0%,#000000_100%)] mt-[70px]'>dsfdf
               <SectionHeading
                        title="Key Benefits"
                        // subtitle='Our autonomous test generation engine analyzes your application’s structure, user flows, and business logic to automatically create comprehensive test suites. It identifies critical paths, edge cases, and potential failure points without manual intervention.'
                        titleClassName="sm:text-[48px] text-[#fff]"
                        // subtitleClassName=" sm:text-[16px] text-[#626161] max-w-[819px]"
                    />
                    <div className="max-w-[1360px] m-auto gap-6 grid grid-cols-12 mt-[40px]">
                      <div className="col-span-3 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] p-4 rounded-[16px] border border-1 border-[#747474]">
                        <h2 className='bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] font-[600] bg-clip-text text-transparent text-[48px] font-primary text-center'>95%</h2>
                        <p className='text-[20px] text-[#fff] font-secondary text-center'>Coverage Increase</p>
                      </div>
                      <div className="col-span-3 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] p-4 rounded-[16px] border border-1 border-[#747474]">
                        <h2 className='bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] font-[600] bg-clip-text text-transparent text-[48px] font-primary text-center'>10x</h2>
                        <p className='text-[20px] text-[#fff] font-secondary text-center'>Faster Creation</p>
                      </div>
                      <div className="col-span-3 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] p-4 rounded-[16px] border border-1 border-[#747474]">
                        <h2 className='bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] font-[600] bg-clip-text text-transparent text-[48px] font-primary text-center'>70%</h2>
                        <p className='text-[20px] text-[#fff] font-secondary text-center'>Cost Reduction</p>
                      </div>
                      <div className="col-span-3 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] p-4 rounded-[16px] border border-1 border-[#747474]">
                        <h2 className='bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] font-[600] bg-clip-text text-transparent text-[48px] font-primary text-center'>85%</h2>
                        <p className='text-[20px] text-[#fff] font-secondary text-center'>Risk Mitigation</p>
                      </div>
                    </div>
     </section>
     <section className='py-[90px] bg1'>
        <SectionHeading
                        title="Real-World Use Cases"
                        // subtitle='Our autonomous test generation engine analyzes your application’s structure, user flows, and business logic to automatically create comprehensive test suites. It identifies critical paths, edge cases, and potential failure points without manual intervention.'
                        titleClassName="sm:text-[48px] text-[#00273A]"
                        // subtitleClassName=" sm:text-[16px] text-[#626161] max-w-[819px]"
                    />
                    <div className="max-w-[1227px] m-auto gap-5 grid grid-cols-12 mt-[40px]">
                      <div className="col-span-6 px-5 py-6 shadow-[0px_0px_16px_0px_#C445580D] bg-[#fff] rounded-[16px]">
                        <h2 className='font-[600] font-primary text-[24px] font-primary'>E-commerce Platform</h2>
                        <p className='text-[#626161] text-[18px] font-primary mt-2'>Automatically generates tests for product catalogs, shopping carts, and checkout flows across multiple payment methods.</p>
                      </div>
                      <div className="col-span-6 px-5 py-6 shadow-[0px_0px_16px_0px_#C445580D] bg-[#fff] rounded-[16px]">
                        <h2 className='font-[600] font-primary text-[24px] font-primary'>Banking Application</h2>
                        <p className='text-[#626161] text-[18px] font-primary mt-2'>Creates comprehensive tests for user account management, transactions, and security features with regulatory compliance.</p>
                      </div>
                    </div>
                    <div className='flex gap-6 justify-center mt-[60px]'>
                      <Button
                                            icon="CircleArrowOutUpRight"
                                            iconSize="20px"
                                            btnText="Request Demo"
                                            className="text-[16px] min-w-[228px] shadow-[0px_30px_12px_0px_#00000005] mt-0 py-5 px-4 font-primary font-[600] leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white"
                                        />
                                        <Button
                                            icon="CircleArrowOutUpRight"
                                            iconSize="20px"
                                            btnText="View Architecture"
                                            className="text-[16px]  min-w-[228px] py-5 px-4 font-primary font-[600] leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white"
                                        />

                    </div>



     </section>
     <FooterSection/>

    </>
  )
}

export default PlatformCapabilitiesPage
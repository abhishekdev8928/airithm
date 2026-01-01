import React from 'react'
import SectionHeading from "@/components/common/SectionHeading";
import UspServices from '../components/services/UspServices';
import FooterSection from "@/components/home/FooterSection"; 
import Navbar from "@/components/Navbar.jsx";
import MainBanner from '../components/services/MainBanner';
import CtaSection from "../components/common/CtaSection";
import {Integrations_HEADER, PLANING_CTA_CONFIG} from "./../config/integrationConfig"
import { Cloud, CodeXml, GitBranch, TestTubeDiagonal } from 'lucide-react';

const Integrations = () => {
  return (
    <>
    <Navbar
        wrapperClassName="relative "
        disableScrollHide={true}
        linkClassName="text-black"
        iconClassName="invert-0"
    />
    <section className='py-[150px] text-center rounded-[50px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)] text-white'>
            <h4 className='m-auto mb-[30px] bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)]
                    w-fit py-[5px] rounded-[100px] px-[20px] my-3 border border[1px] border-[#797979] '><span className='font-secondary text-[12px]   bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]
                    bg-clip-text 
                    text-transparent'>Platform Integrations</span></h4>
        <MainBanner data={Integrations_HEADER} />
        <div className="flex gap-4 justify-center mt-[10px]">
            <img src="/public/integration/git.png" alt="" />
            <img src="/public/integration/aws.png" alt="" />
            <img src="/public/integration/setting.png" alt="" />
            <img src="/public/integration/code.png" alt="" />

        </div>
    </section>
    <section className='py-[90px] bg-[#fff]'>
        <div className='max-w-[1100px] m-auto grid grid-cols-12 gap-10'>
            <div className="col-span-6 rounded-[24px] border border-[1px] border-[#D9D9D9] p-[18px]">
                <span className='h-[48px] flex justify-center items-center rounded-[4px] w-[48px] '>
                    <GitBranch className='text-[#c44558]'/>
                </span>
                <h3 className='text-[#1E1E1E] text-[24px] mt-[30px] font-[600] font-primary'>CI/CD Tools</h3>
                <p className='text-[#626161] mt-[10px] text-[18px] font-[500] font-secondary'>Integrate seamlessly with your continuous integration and deployment pipeline for automated testing workflows.</p>

                <div className='mt-[30px] grid grid-cols-12 gap-4'>
                    <div className="col-span-6 border border-[1px] border-[#D9D9D9] flex items-center gap-3 rounded-[16px] overflow-hidden py-2 px-2">
                        <img src="/public/integration/Jenkins.png" alt="" />
                        <span className='text-[20px] font-primary text-[#1E1E1E] font-[500]'>Jenkins</span>
                    </div>
                    <div className="col-span-6 border border-[1px] border-[#D9D9D9] flex items-center gap-1 rounded-[16px] overflow-hidden py-2 px-2">
                        <img src="/public/integration/git.png" alt="" />
                        <span className='text-[20px] font-primary text-[#1E1E1E] font-[500]'>GitHub Actions</span>
                    </div>
                    <div className="col-span-6 border border-[1px] border-[#D9D9D9] flex items-center gap-1 rounded-[16px] overflow-hidden py-2 px-2">
                        <img src="/public/integration/GitLab.png" alt="" />
                        <span className='text-[20px] font-primary text-[#1E1E1E] font-[500]'>GitLab</span>
                    </div>
                    <div className="col-span-6 border border-[1px] border-[#D9D9D9] flex items-center gap-1 rounded-[16px] overflow-hidden py-2 px-2">
                        <img className='me-3's src="/public/integration/Azure.png" alt="" />
                        <span className='text-[20px] font-primary text-[#1E1E1E] font-[500]'>Azure DevOps</span>
                    </div>

                </div>
            </div>
            <div className="col-span-6 rounded-[24px] border border-[1px] border-[#D9D9D9] p-[18px]">
                <span className='h-[48px] flex justify-center items-center rounded-[4px] w-[48px] '>
                    <Cloud className='text-[#c44558]'/>
                </span>
                <h3 className='text-[#1E1E1E] text-[24px] mt-[30px] font-[600] font-primary'>Cloud Platforms</h3>
                <p className='text-[#626161] mt-[10px] text-[18px] font-[500] font-secondary'>Deploy and scale your testing infrastructure across major cloud providers with native integrations.</p>

                <div className='mt-[30px] grid grid-cols-12 gap-4'>
                    <div className="col-span-6 border border-[1px] border-[#D9D9D9] flex items-center gap-3 rounded-[16px] overflow-hidden py-2 px-2">
                        <img src="/public/integration/AWS.png" alt="" />
                        <span className='text-[20px] font-primary text-[#1E1E1E] font-[500]'>AWS</span>
                    </div>
                    <div className="col-span-6 border border-[1px] border-[#D9D9D9] flex items-center gap-1 rounded-[16px] overflow-hidden py-2 px-2">
                        <img  className='me-3' src="/public/integration/GCP.png" alt="" />
                        <span className='text-[20px] font-primary text-[#1E1E1E] font-[500]'>GCP</span>
                    </div>
                    <div className="col-span-6 border border-[1px] border-[#D9D9D9] flex items-center gap-1 rounded-[16px] overflow-hidden py-2 px-2">
                        <img className='me-3' src="/public/integration/Azure.png" alt="" />
                        <span className='text-[20px] font-primary text-[#1E1E1E] font-[500]'>Azure</span>
                    </div>
                    <div className="col-span-6 border border-[1px] border-[#D9D9D9] flex items-center gap-1 rounded-[16px] overflow-hidden py-2 px-2">
                        <img className='me-3' src="/public/integration/Kubernetes.png" alt="" />
                        <span className='text-[20px] font-primary text-[#1E1E1E] font-[500]'>Kubernetes</span>
                    </div>

                </div>
            </div>
            <div className="col-span-6 rounded-[24px] border border-[1px] border-[#D9D9D9] p-[18px]">
                <span className='h-[48px] flex justify-center items-center rounded-[4px] w-[48px] '>
                    <TestTubeDiagonal className='text-[#c44558]'/>
                </span>
                <h3 className='text-[#1E1E1E] text-[24px] mt-[30px] font-[600] font-primary'>Test Frameworks</h3>
                <p className='text-[#626161] mt-[10px] text-[18px] font-[500] font-secondary'>Connect with popular testing frameworks and tools to leverage existing test suites and methodologies.</p>

                <div className='mt-[30px] grid grid-cols-12 gap-4'>
                    <div className="col-span-6 border border-[1px] border-[#D9D9D9] flex items-center gap-3 rounded-[16px] overflow-hidden py-2 px-2">
                        <img src="/public/integration/Selenium.png" alt="" />
                        <span className='text-[20px] font-primary text-[#1E1E1E] font-[500]'>Selenium</span>
                    </div>
                    <div className="col-span-6 border border-[1px] border-[#D9D9D9] flex items-center gap-1 rounded-[16px] overflow-hidden py-2 px-2">
                        <img  className='me-3' src="/public/integration/Playwright.png" alt="" />
                        <span className='text-[20px] font-primary text-[#1E1E1E] font-[500]'>Playwright</span>
                    </div>
                    <div className="col-span-6 border border-[1px] border-[#D9D9D9] flex items-center gap-1 rounded-[16px] overflow-hidden py-2 px-2">
                        <img className='me-3' src="/public/integration/Cypress.png" alt="" />
                        <span className='text-[20px] font-primary text-[#1E1E1E] font-[500]'>Cypress</span>
                    </div>
                    <div className="col-span-6 border border-[1px] border-[#D9D9D9] flex items-center gap-1 rounded-[16px] overflow-hidden py-2 px-2">
                        <img className='me-3' src="/public/integration/API Tools.png" alt="" />
                        <span className='text-[20px] font-primary text-[#1E1E1E] font-[500]'>API Tools</span>
                    </div>

                </div>
            </div>
                 <div className="col-span-6 rounded-[24px] border border-[1px] border-[#D9D9D9] p-[18px]">
                <span className='h-[48px] flex justify-center items-center rounded-[4px] w-[48px] '>
                    <CodeXml className='text-[#c44558]'/>
                </span>
                <h3 className='text-[#1E1E1E] text-[24px] mt-[30px] font-[600] font-primary'>CI/CD Tools</h3>
                <p className='text-[#626161] mt-[10px] text-[18px] font-[500] font-secondary'>Integrate seamlessly with your continuous integration and deployment pipeline for automated testing workflows.</p>

                <div className='mt-[30px] grid grid-cols-12 gap-4'>
                    <div className="col-span-6 border border-[1px] border-[#D9D9D9] flex items-center gap-3 rounded-[16px] overflow-hidden py-2 px-2">
                        <img src="/public/integration/REST APIs.png" alt="" />
                        <span className='text-[20px] font-primary text-[#1E1E1E] font-[500]'>REST APIs</span>
                    </div>
                    <div className="col-span-6 border border-[1px] border-[#D9D9D9] flex items-center gap-1 rounded-[16px] overflow-hidden py-2 px-2">
                        <img  className='me-3' src="/public/integration/SDKs.png" alt="" />
                        <span className='text-[20px] font-primary text-[#1E1E1E] font-[500]'>SDKs</span>
                    </div>
                    <div className="col-span-6 border border-[1px] border-[#D9D9D9] flex items-center gap-1 rounded-[16px] overflow-hidden py-2 px-2">
                        <img className='me-3' src="/public/integration/Webhooks.png" alt="" />
                        <span className='text-[20px] font-primary text-[#1E1E1E] font-[500]'>Webhooks</span>
                    </div>
                    <div className="col-span-6 border border-[1px] border-[#D9D9D9] flex items-center gap-1 rounded-[16px] overflow-hidden py-2 px-2">
                        <img className='me-3' src="/public/integration/Extensibility.png" alt="" />
                        <span className='text-[20px] font-primary text-[#1E1E1E] font-[500]'>Extensibility</span>
                    </div>

                </div>
            </div>
            
            

        </div>

    </section>
     <CtaSection wrapperClassName="mt-[-100px]" {...PLANING_CTA_CONFIG} />
     <FooterSection/>
    </>
  )
}

export default Integrations
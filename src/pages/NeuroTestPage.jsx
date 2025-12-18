import React from 'react'
import SectionHeading from "@/components/common/SectionHeading";
import UspServices from '../components/services/UspServices';
import FooterSection from "@/components/automation/FooterSection";
import Navbar from "@/components/Navbar.jsx";
import { 
    Neuro_Test_HEADER,
     Core_capabiliti_CONFIG,
    Key_feature_Config
 } from "../config/NeuroTestConfig"
import MainBanner from '../components/services/MainBanner';
import { Brain, CircleCheck, MemoryStick, Network, Search, Shield, ShieldCheck } from 'lucide-react';

const NeuroTestPage = () => {
    const { list } = Key_feature_Config;
    
    return (
        <>
            <Navbar
                wrapperClassName="relative "
                disableScrollHide={true}
                linkClassName="text-black"
                iconClassName="invert-0"
            />
            <section className='pt-[100px] rounded-[50px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)] text-white'>
                <MainBanner data={Neuro_Test_HEADER} />
                <div className="h-[308px] w-[917px] bg-[#D9D9D9] rounded-[0px] m-auto mt-[60px] mb-[30px]">

                </div>
            </section>
            <section className='py-[80px] max-w-[780px] mx-auto '>
                <SectionHeading
                    title="What is NeuroTest?"
                    subtitle='The single, plugin-based, architecture-aware hub that unifies AI testing into one compliant,<br/> governed platform. NeuroTest orchestrates multiple evaluation frameworks to provide <br/> comprehensive quality assurance for your AI systems.'
                    titleClassName="sm:text-[48px]"
                    subtitleClassName=" sm:text-[16px] text-[#626161]"
                />
                <div className="mt-[50px]">
                    <ul className='flex flex-wrap gap-[20px] justify-center'>
                        <li className=' px-5 py-2 rounded-[100px] border border-[1px] border-[#FD3A84] w-fit text-[#C44558]  font-primary text-[16px]'><Brain className='me-3 inline-flex' /><span className="font-[600]">LLM Correctness</span> </li>
                        <li className=' px-5 py-2 rounded-[100px] border border-[1px] border-[#FD3A84] w-fit text-[#C44558]  font-primary text-[16px]'><MemoryStick className='me-3 inline-flex' /><span className="font-[600]">Planning & Memory</span> </li>
                        <li className=' px-5 py-2 rounded-[100px] border border-[1px] border-[#FD3A84] w-fit text-[#C44558]  font-primary text-[16px]'><ShieldCheck className='me-3 inline-flex' /><span className="font-[600]">Safety & Robustness</span> </li>
                        <li className=' px-5 py-2 rounded-[100px] border border-[1px] border-[#FD3A84] w-fit text-[#C44558]  font-primary text-[16px]'><Network className='me-3 inline-flex' /><span className="font-[600]">Multi-agent Tool-use</span> </li>
                        <li className=' px-5 py-2 rounded-[100px] border border-[1px] border-[#FD3A84] w-fit text-[#C44558]  font-primary text-[16px]'><Search className='me-3 inline-flex' /><span className="font-[600]">RAG Retrieval Quality</span> </li>
                        <li className=' px-5 py-2 rounded-[100px] border border-[1px] border-[#FD3A84] w-fit text-[#C44558]  font-primary text-[16px]'><CircleCheck className='me-3 inline-flex' /><span className="font-[600]">Compliance Validation</span> </li>
                    </ul>
                </div>

            </section>
            <div className='bg-[linear-gradient(180deg,#042539_0%,#000000_100%)] rounded-tl-[100px] rounded-tr-[100px] rounded-br-0 rounded-bl-0 pb-[150px]'>
                <UspServices data={Core_capabiliti_CONFIG} />
            </div>
            <div className="mt-[-100px] relative z-10">
                <div className="rounded-[100px] py-[80px] bg-[#fff] border border-[1px] border-[#D9D9D9]">
                    <SectionHeading
                        title="A Unified Architecture for AI Evaluation"
                        //    subtitle='The single, plugin-based, architecture-aware hub that unifies AI testing into one compliant,<br/> governed platform. NeuroTest orchestrates multiple evaluation frameworks to provide <br/> comprehensive quality assurance for your AI systems.'
                        titleClassName="sm:text-[48px] font-[600]"
                        subtitleClassName=" sm:text-[16px] text-[#626161]"
                    />
                    <div className="max-w-[1190px] mt-[60px] m-auto bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] rounded-[24px] p-5">
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <div className="bg-[#fff] py-4 px-6 rounded-[24px]">
                                    <h3 className='text-[#C44558] text-[24px] font-primary mb-[20px] block'>AIRITHM UI</h3>
                                    <p className='text-[#626161] text-[18px] font-[700] font-secondary'>VUX Dashboard</p>
                                </div>
                                <div className="bg-[#fff] py-4 px-6 rounded-[24px] mt-[20px]">
                                    <h3 className='text-[#C44558] text-[24px] font-primary mb-[20px] block'>Plugin Ecosystem</h3>

                                    <ul className='list-disc pl-5'>
                                        <li className='text-[#626161] text-[18px] font-secondary font-[700] mb-[10px]'>DeepEval</li>
                                        <li className='text-[#626161] text-[18px] font-secondary font-[700] mb-[10px]'>RAGAS</li>
                                        <li className='text-[#626161] text-[18px] font-secondary font-[700] mb-[10px]'>AgentBench</li>
                                        <li className='text-[#626161] text-[18px] font-secondary font-[700] mb-[10px]'>HELM</li>
                                        <li className='text-[#626161] text-[18px] font-secondary font-[700] mb-[10px]'>TRLens</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className="bg-[#fff] py-4 px-6 rounded-[24px] ">
                                    <h3 className='text-[#C44558] text-[24px] font-primary font-[500] text-center block'>FastAPI Service Layer</h3>
                                </div>
                                <div className="hidden top-[10px] left-1/2 sm:block flex-1 w-[2px] h-[70px] bg-[#fff] relative
                                    after:content-[''] 
                                    after:absolute 
                                    after:rounded-[50%]
                                    after:left-[-5px]
                                    after:top-[-3px]
                                    after:border-[3px] 
                                    after:border-[#fff] 
                                    after:w-[12px] 
                                    after:h-[12px] 
                                    after:bg-[#fff]
                                ">
                                    <span className="absolute right-0 left-[-7px] bottom-0  w-4 h-4 border-r-3 border-b-3 border-[#ffffff] rotate-45" />
                                </div>
                                <div className="bg-[#fff] py-4 px-6 rounded-[24px] mt-[20px]">
                                    <h3 className='text-[#C44558] text-[24px] font-primary text-center  block'>Evaluation Suite Loader</h3>
                                </div>
                                <div className="hidden top-[10px] left-1/2 sm:block flex-1 w-[2px] h-[70px] bg-[#fff] relative
                                    after:content-[''] 
                                    after:absolute 
                                    after:rounded-[50%]
                                    after:left-[-5px]
                                    after:top-[-3px]
                                    after:border-[3px] 
                                    after:border-[#fff] 
                                    after:w-[12px] 
                                    after:h-[12px] 
                                    after:bg-[#fff]
                                ">
                                    <span className="absolute right-0 left-[-7px] bottom-0  w-4 h-4 border-r-3 border-b-3 border-[#ffffff] rotate-45" />
                                </div>
                                <div className="bg-[#fff] py-4 px-6 rounded-[24px] mt-[20px]">
                                    <h3 className='text-[#C44558] text-[24px] font-primary text-center  block'>Evaluation Orchestrator</h3>
                                </div>
                            </div>
                            <div>
                                <div className="bg-[#fff] py-4 px-6 rounded-[24px] ">
                                    <h3 className='text-[#C44558] text-[24px] font-primary mb-[20px] block'>Data Inputs</h3>

                                    <ul className='list-disc pl-5'>
                                        <li className='text-[#626161] text-[18px] font-secondary font-[700] mb-[10px]'>JSONL tests</li>
                                        <li className='text-[#626161] text-[18px] font-secondary font-[700] mb-[10px]'>Agent traces</li>
                                        <li className='text-[#626161] text-[18px] font-secondary font-[700] mb-[10px]'>Synthetic data</li>
                                    </ul>
                                </div>
                                <div className="bg-[#fff] py-4 px-6 rounded-[24px] mt-[20px]">
                                    <h3 className='text-[#C44558] text-[24px] font-primary  block'>Data Inputs</h3>
                                </div>
                                <div className="bg-[#fff] py-4 px-6 rounded-[24px] mt-[20px]">
                                    <h3 className='text-[#C44558] text-[24px] font-primary mb-[20px] block'>Result Storage</h3>
                                    <p className='text-[#626161] text-[18px] font-[700] font-secondary'>PostgreSQL</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <section className='py-[80px] max-w-[780px] mx-auto '>
                <SectionHeading
                    title="Key Features"
                    // subtitle='The single, plugin-based, architecture-aware hub that unifies AI testing into one compliant,<br/> governed platform. NeuroTest orchestrates multiple evaluation frameworks to provide <br/> comprehensive quality assurance for your AI systems.'
                    titleClassName="sm:text-[48px]"
                    subtitleClassName=" sm:text-[16px] text-[#626161]"
                />

                <div className="pt-[40px]">
                    <div className="">
                        <ul>
                            {
                                list.map((item, index)=>{
                                    <li key={index} className='text-[#C44558] font-primary font-[600] text-[20px]'><CircleCheck/>{item.title}</li>

                                })
                            }
                        </ul>
                    </div>

                </div>
            </section>


        </>
    )
}

export default NeuroTestPage
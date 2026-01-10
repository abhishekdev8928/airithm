import FeatureCard from "@/components/card/FeaturedCard";
import SectionHeading from "@/components/common/SectionHeading";
import CtaSection from "@/components/common/CtaSection";
import MainBanner from "../components/services/MainBanner";
import Navbar from "@/components/Navbar.jsx";
import FooterSection from "@/components/home/FooterSection";
import { at_HEADER,  benifits_Config  } from "./../config/autonomoustestingConfig"
import { Check } from "lucide-react";


const AutonomousTestingPage = () => {
      const { cards } = benifits_Config
    return (
        <>
            <Navbar
                wrapperClassName="fixed top-0 left-0"
                disableScrollHide={false}
                linkClassName="text-dark"
                iconClassName="text-dark"
            />
            <div className='lg:mt-[100px] mt-[70px] rounded-[50px] lg:py-[150px] py-[90px] lg:px-0 px-4 bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)]'>
                {/* <p className='font-secondary font-[600] text-[18px] text-[#fff] text-center mb-[15px]'>Two Platforms. One Vision.</p> */}
                <MainBanner data={at_HEADER} />
                <div className="max-w-[676px] grid lg:gap-6 gap-12 grid-cols-12 m-auto bg-[#FFFFFF1A] border border-[1px] border-[#FFFFFF1A] py-8 px-5 rounded-[24px] mt-[60px]">
                    <div className="lg:col-span-6 col-span-12 px-5">
                        <h3 className="text-[20px] font-primary bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-transparent font-[600]">Legacy Testing</h3>

                        <ul className="mt-5">
                            <li className="flex gap-5  mb-[14px]"><img src="./public/svg/code-xml.svg" alt="" /><span className="text-[#D9D9D9] font-[16px] font-[600] font-secondary">Manual Scripts</span></li>
                            <li className="flex gap-5  mb-[14px]"><img src="./public/svg/wrench.svg" alt="" /><span className="text-[#D9D9D9] font-[16px] font-[600] font-secondary">Constant Maintenance</span></li>
                            <li className="flex gap-5 "><img src="./public/svg/clock.svg" alt="" /><span className="text-[#D9D9D9] font-[16px] font-[600] font-secondary">Time Intensive</span></li>
                        </ul>
                    </div>
                    <div className="lg:col-span-6 col-span-12 px-5">
                        <h3 className="text-[20px] font-primary bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-transparent font-[600]">Autonomous Testing</h3>

                        <ul className="mt-5">
                            <li className="flex gap-5  mb-[14px]"><img src="./public/svg/brain.svg" alt="" /><span className="text-[#D9D9D9] font-[16px] font-[600] font-secondary">AI-Powered</span></li>
                            <li className="flex gap-5  mb-[14px]"><img src="./public/svg/wand-sparkles.svg" alt="" /><span className="text-[#D9D9D9] font-[16px] font-[600] font-secondary">Self-Healing</span></li>
                            <li className="flex gap-5  "><img src="./public/svg/rocket.svg" alt="" /><span className="text-[#D9D9D9] font-[16px] font-[600] font-secondary">Continuous Learning</span></li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="py-[80px] pb-[150px] lg:px-0 px-6">
                <SectionHeading
                    titleClassName="font-primary font-medium text-[32px] sm:text-[48px] leading-[1.2] tracking-[0.02em] text-[#00273A] text-center"
                    title="Quick Comparison Summary"
                    subtitle="Executive overview for decision makers"
                    wrapperClassName="space-y-6"
                    subtitleClassName=" text-[#626161] sm:text-[16px]"
                />

                <div className="grid grid-cols-11 gap-[40px] justify-center max-w-[1080px] m-auto mt-12 px-5">
                    <div className="lg:col-span-6 col-span-11  rounded-[16px] p-4 shadow-[0px_12px_12px_0px_#C4455817]">
                        <h3 className="text-[#1E1E1E] text-[24px] mb-[1px] font-primary">Autonomous Testing</h3>
                        <p className="text-[#626161] text-[16px]">Next-generation testing approach</p>

                        <ul className="mt-[30px]">
                            <li className="text-[#C44558] text-[18px] font-secondary flex gap-3 mb-2"><span className=""><img src="./public/svg/circle-check1.svg" alt="" /></span>Self-learning test generation</li>
                            <li className="text-[#C44558] text-[18px] font-secondary flex gap-3 mb-2"><span className=""><img src="./public/svg/circle-check1.svg" alt="" /></span>No script maintenance</li>
                            <li className="text-[#C44558] text-[18px] font-secondary flex gap-3 mb-2"><span className=""><img src="./public/svg/circle-check1.svg" alt="" /></span>Continuous evaluation</li>
                            <li className="text-[#C44558] text-[18px] font-secondary flex gap-3"><span className=""><img src="./public/svg/circle-check1.svg" alt="" /></span>Scales with system complexity</li>
                        </ul>
                    </div>
                    <div className="lg:col-span-6 col-span-11 border border-[1px] border-[#D9D9D9] rounded-[16px] p-4 px-5">
                        <h3 className="text-[#1E1E1E] text-[24px] mb-[1px] font-primary">Traditional Testing</h3>
                        <p className="text-[#626161] text-[16px]">Legacy script-based approach</p>

                        <ul className="mt-[30px]">
                            <li className="text-[#b5001b] text-[18px] font-secondary flex gap-3 mb-2"><span className=""><img src="./public/svg/triangle-alert.svg" alt="" /></span>Manual script creation</li>
                            <li className="text-[#C44558] text-[18px] font-secondary flex gap-3 mb-2"><span className=""><img src="./public/svg/triangle-alert.svg" alt="" /></span>Constant maintenance overhead</li>
                            <li className="text-[#C44558] text-[18px] font-secondary flex gap-3 mb-2"><span className=""><img src="./public/svg/triangle-alert.svg" alt="" /></span>Limited adaptability</li>
                            <li className="text-[#C44558] text-[18px] font-secondary flex gap-3 mb-2"><span className=""><img src="./public/svg/triangle-alert.svg" alt="" /></span>High long-term costs</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-[-50px] lg:rounded-t-[100px] rounded-t-[50px] pb-[200px] py-[100px] bg-[linear-gradient(360deg,#042539_0%,#000000_100%)]">
                <SectionHeading
                    titleClassName="font-primary font-medium text-[32px] sm:text-[40px] leading-[1.2] tracking-[0.02em] text-[#fff] text-center"
                    title="Side-by-Side Feature Comparison"
                    subtitle="Detailed technical comparison"
                    wrapperClassName="space-y-6"
                    subtitleClassName=" text-[#fff] sm:text-[16px]"
                />
                <div className="max-w-[941px] rounded-[16px] border border-[1px] border-[#838383] px-3 m-auto mt-[40px] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(131,131,131,0.1)_100%)]">
                    <table class="w-full text-left text-sm md:text-base">
                        <thead>
                            <tr class="">
                                <th class="px-6 py-5 font-[20px] font-[600] bg-gradient-to-r from-[#FFA68D] to-[#FD3A84]
                                    bg-clip-text text-transparent ">Feature</th>
                                <th class="px-6 py-5 font-[20px] font-[600]  bg-gradient-to-r from-[#FFA68D] to-[#FD3A84]
                                    bg-clip-text text-transparent text-center">
                                    Traditional Testing
                                </th>
                                <th class="px-6 py-5 font-[20px] font-[600]  bg-gradient-to-r from-[#FFA68D] to-[#FD3A84]
                                bg-clip-text text-transparent text-center">
                                    Autonomous Testing
                                </th>
                            </tr>
                        </thead>

                        <tbody class="text-white/90">

                            <tr class="">
                                <td class="px-6 py-5 font-medium">Test Creation</td>
                                <td class="px-6 py-3 text-center">
                                    <img src="./public/svg/Check.svg" alt="" className="m-auto" />
                                    <div class="text-xs text-[16px] mt-1">AI-Generated</div>
                                </td>
                                <td class="px-6 py-3 text-center">
                                    <img src="./public/svg/x.svg" alt="" className="m-auto" />
                                    <div class="text-xs text-[16px] mt-1">Manual Scripts</div>
                                </td>
                            </tr>


                            <tr class="">
                                <td class="px-6 py-5 font-medium">Maintenance Effort</td>
                                <td class="px-6 py-3 text-center">
                                    <img src="./public/svg/Check.svg" alt="" className="m-auto" />
                                    <div class="text-xs text-[16px] mt-1">Self-Healing</div>
                                </td>
                                <td class="px-6 py-3 text-center">
                                    <img src="./public/svg/x.svg" className="m-auto" alt="" />
                                    <div class="text-xs text-[16px] mt-1">High Manual Effort</div>
                                </td>
                            </tr>


                            <tr class="">
                                <td class="px-6 py-5 font-medium">Scalability</td>
                                <td class="px-6 py-3 text-center">
                                    <img src="./public/svg/Check.svg" alt="" className="m-auto" />
                                    <div class="text-xs text-[16px] mt-1">Infinite Scale</div>
                                </td>
                                <td class="px-6 py-3 text-center">
                                    <img src="./public/svg/minus.svg" alt="" className="m-auto" />
                                    <div class="text-xs text-[16px] mt-1">Limited</div>
                                </td>
                            </tr>


                            <tr class="">
                                <td class="px-6 py-5 font-medium">AI & LLM Support</td>
                                <td class="px-6 py-3 text-center">
                                    <img src="./public/svg/Check.svg" alt="" className="m-auto" />
                                    <div class="text-xs text-[16px] mt-1">Native Integration</div>
                                </td>
                                <td class="px-6 py-3 text-center">
                                    <img src="./public/svg/x.svg" className="m-auto" alt="" />
                                    <div class="text-xs text-[16px] mt-1">Not Available</div>
                                </td>
                            </tr>


                            <tr class="">
                                <td class="px-6 py-5 font-medium">Time To Value</td>
                                <td class="px-6 py-3 text-center">
                                    <img src="./public/svg/Check.svg" alt="" className="m-auto" />
                                    <div class="text-xs text-[16px] mt-1">Immediate</div>
                                </td>
                                <td class="px-6 py-3 text-center">
                                    <img src="./public/svg/x.svg" className="m-auto" alt="" />
                                    <div class="text-xs text-[16px] mt-1">Weeks/Months</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="lg:rounded-[100px] rounded-[50px] mt-[-100px] py-[80px] bg-[#fff]">
                <SectionHeading
                    titleClassName="font-primary font-medium text-[32px] sm:text-[40px] leading-[1.2] tracking-[0.02em] text-[#00273A] text-center"
                    title="How Each Approach Works"
                    subtitle="Process visualization and workflow comparison"
                    wrapperClassName="space-y-6"
                    subtitleClassName=" text-[#626161] sm:text-[16px]"
                />
                <div className="max-w-[941px] m-auto mt-[60px] lg:gap-0 gap-6 grid grid-cols-12">
                    <div className="lg:col-span-6 col-span-11 text-center">
                        <h3 className="text-[#C44558] text-[24px] font-[600] font-primary">Traditional Testing Flow</h3>
                        <div>
                            <div className="relative mt-[40px] px-[30px] py-[20px] rounded-[16px] w-fit m-auto border border-[1px] border-[#D9D9D9] flex flex-col justify-center items-center
                                            before:content-[''] before:absolute before:left-[50%] before:bottom-[-50px] before:translate-x-[-50%] before:w-[2px] before:h-[40px] before:bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]">
                                <span className="absolute top-[-13px] text-[#fff] bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] rounded-[50%] w-[24px] h-[24px] m-auto" >1</span>
                                <h3 className="text-[16px] font-secondary text-[#626161] font-[500]">Manual requirement analysis</h3>
                            </div>
                             <div className="relative mt-[70px] px-[30px] py-[20px] rounded-[16px] w-fit m-auto border border-[1px] border-[#D9D9D9] flex flex-col justify-center items-center
                                            before:content-[''] before:absolute before:left-[50%] before:bottom-[-50px] before:translate-x-[-50%] before:w-[2px] before:h-[40px] before:bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]">
                                <span className="absolute top-[-13px] text-[#fff] bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] rounded-[50%] w-[24px] h-[24px] m-auto" >2</span>
                                <h3 className="text-[16px] font-secondary text-[#626161] font-[500]">Script creation & coding</h3>
                            </div>
                             <div className="relative mt-[70px] px-[30px] py-[20px] rounded-[16px] w-fit m-auto border border-[1px] border-[#D9D9D9] flex flex-col justify-center items-center
                                            before:content-[''] before:absolute before:left-[50%] before:bottom-[-50px] before:translate-x-[-50%] before:w-[2px] before:h-[40px] before:bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]">
                                <span className="absolute top-[-13px] text-[#fff] bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] rounded-[50%] w-[24px] h-[24px] m-auto" >3</span>
                                <h3 className="text-[16px] font-secondary text-[#626161] font-[500]">Test execution</h3>
                            </div>
                             <div className="relative mt-[70px] px-[30px] py-[20px] rounded-[16px] w-fit m-auto border border-[1px] border-[#D9D9D9] flex flex-col justify-center items-center
                                            before:content-[''] before:absolute before:left-[50%] before:bottom-[-50px] before:translate-x-[-50%] before:w-[2px] before:h-[40px] before:bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]">
                                <span className="absolute top-[-13px] text-[#fff] bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] rounded-[50%] w-[24px] h-[24px] m-auto" >4</span>
                                <h3 className="text-[16px] font-secondary text-[#626161] font-[500]">Script breakage & debugging</h3>
                            </div>
                             <div className="relative mt-[70px] px-[30px] py-[20px] rounded-[16px] w-fit m-auto border border-[1px] border-[#D9D9D9] flex flex-col justify-center items-center
                                           ">
                                <span className="absolute top-[-13px] text-[#fff] bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] rounded-[50%] w-[24px] h-[24px] m-auto" >5</span>
                                <h3 className="text-[16px] font-secondary text-[#626161] font-[500]">Manual fixes & Updates  </h3>
                            </div>
                        </div>
                    </div>
                     <div className="lg:col-span-6 col-span-11 text-center">
                        <h3 className="text-[#C44558] text-[24px] font-[600] font-primary">Autonomous Testing Flow</h3>
                        <div>
                            <div className="relative mt-[40px] px-[30px] py-[20px] rounded-[16px] w-fit m-auto border border-[1px] border-[#D9D9D9] flex flex-col justify-center items-center
                                            before:content-[''] before:absolute before:left-[50%] before:bottom-[-50px] before:translate-x-[-50%] before:w-[2px] before:h-[40px] before:bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]">
                                <span className="absolute top-[-13px] text-[#fff] bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] rounded-[50%] w-[24px] h-[24px] m-auto" >1</span>
                                <h3 className="text-[16px] font-secondary text-[#626161] font-[500]">AI system learning</h3>
                            </div>
                             <div className="relative mt-[70px] px-[30px] py-[20px] rounded-[16px] w-fit m-auto border border-[1px] border-[#D9D9D9] flex flex-col justify-center items-center
                                            before:content-[''] before:absolute before:left-[50%] before:bottom-[-50px] before:translate-x-[-50%] before:w-[2px] before:h-[40px] before:bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]">
                                <span className="absolute top-[-13px] text-[#fff] bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] rounded-[50%] w-[24px] h-[24px] m-auto" >2</span>
                                <h3 className="text-[16px] font-secondary text-[#626161] font-[500]">Automated test generation</h3>
                            </div>
                             <div className="relative mt-[70px] px-[30px] py-[20px] rounded-[16px] w-fit m-auto border border-[1px] border-[#D9D9D9] flex flex-col justify-center items-center
                                            before:content-[''] before:absolute before:left-[50%] before:bottom-[-50px] before:translate-x-[-50%] before:w-[2px] before:h-[40px] before:bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]">
                                <span className="absolute top-[-13px] text-[#fff] bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] rounded-[50%] w-[24px] h-[24px] m-auto" >3</span>
                                <h3 className="text-[16px] font-secondary text-[#626161] font-[500]">Intelligent agent execution</h3>
                            </div>
                             <div className="relative mt-[70px] px-[30px] py-[20px] rounded-[16px] w-fit m-auto border border-[1px] border-[#D9D9D9] flex flex-col justify-center items-center
                                            before:content-[''] before:absolute before:left-[50%] before:bottom-[-50px] before:translate-x-[-50%] before:w-[2px] before:h-[40px] before:bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]">
                                <span className="absolute top-[-13px] text-[#fff] bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] rounded-[50%] w-[24px] h-[24px] m-auto" >4</span>
                                <h3 className="text-[16px] font-secondary text-[#626161] font-[500]">LLM-based evaluation</h3>
                            </div>
                             <div className="relative mt-[70px] px-[30px] py-[20px] rounded-[16px] w-fit m-auto border border-[1px] border-[#D9D9D9] flex flex-col justify-center items-center
                                           ">
                                <span className="absolute top-[-13px] text-[#fff] bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] rounded-[50%] w-[24px] h-[24px] m-auto" >5</span>
                                <h3 className="text-[16px] font-secondary text-[#626161] font-[500]">Continuous optimization </h3>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className=" lg:rounded-t-[100px] rounded-t-[50px] pb-[200px] px-5 lg:px-0 py-[100px] bg-[linear-gradient(360deg,#042539_0%,#000000_100%)]">
                <SectionHeading
                    titleClassName="font-primary font-medium text-[32px] sm:text-[48px] leading-[1.2] tracking-[0.02em] text-[#FFFFFF] text-center"
                    title="Where Traditional Testing Breaks Down"
                    subtitle="Honest technical analysis of legacy limitations"
                    wrapperClassName="space-y-6"
                    subtitleClassName=" text-[#FFFFFF] sm:text-[16px]"
                />
                <div className="max-w-[824px] m-auto grid justify-center grid-cols-12 gap-[30px]  mt-[60px]">
                    <div className="lg:col-span-6 col-span-12 py-4 px-7 rounded-[16px] border border-[1px] border-[#999999] bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(153,153,153,0.1)]">
                        <img src="./public/svg/wrench.svg" alt="" className="h-[32px]"/>
                        <h3 className="text-[#FFFFFF] text-[24px] font-primary mt-5">Maintenance Overhead</h3>
                        <ul className="list-disc pl-5 marker:text-[#FFA68D] mt-[20px]">
                            <li className="text-[16px] font-secondary mb-[8px]  bg-gradient-to-r from-[#FFA68D] to-[#FD3A84] bg-clip-text text-transparent">Constant script updates</li>
                            <li className="text-[16px] font-secondary mb-[8px] bg-gradient-to-r from-[#FFA68D] to-[#FD3A84] bg-clip-text text-transparent">UI changes break tests</li>
                            <li className="text-[16px] font-secondary mb-[8px] bg-gradient-to-r from-[#FFA68D] to-[#FD3A84] bg-clip-text text-transparent">Version compatibility</li>
                            <li className="text-[16px] font-secondary mb-[8px] bg-gradient-to-r from-[#FFA68D] to-[#FD3A84] bg-clip-text text-transparent">Resource intensive</li>
                        </ul>

                    </div>
                    <div className="lg:col-span-6 col-span-12 py-4 px-7 rounded-[16px] border border-[1px] border-[#999999] bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(153,153,153,0.1)]">
                        <img src="./public/svg/wrench.svg" alt="" className="h-[32px]"/>
                        <h3 className="text-[#FFFFFF] text-[24px] font-primary mt-5">Brittleness</h3>
                        <ul className="list-disc pl-5 marker:text-[#FFA68D] mt-[20px]">
                            <li className="text-[16px] font-secondary mb-[8px]  bg-gradient-to-r from-[#FFA68D] to-[#FD3A84] bg-clip-text text-transparent">Selector dependency</li>
                            <li className="text-[16px] font-secondary mb-[8px] bg-gradient-to-r from-[#FFA68D] to-[#FD3A84] bg-clip-text text-transparent">Hard-coded waits</li>
                            <li className="text-[16px] font-secondary mb-[8px] bg-gradient-to-r from-[#FFA68D] to-[#FD3A84] bg-clip-text text-transparent">Environment sensitivity</li>
                            <li className="text-[16px] font-secondary mb-[8px] bg-gradient-to-r from-[#FFA68D] to-[#FD3A84] bg-clip-text text-transparent">Fragile assertions</li>
                        </ul>

                    </div>
                    <div className="lg:col-span-6 col-span-12 py-4 px-7 rounded-[16px] border border-[1px] border-[#999999] bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(153,153,153,0.1)]">
                        <img src="./public/svg/wrench.svg" alt="" className="h-[32px]"/>
                        <h3 className="text-[#FFFFFF] text-[24px] font-primary mt-5">Scaling Challenges</h3>
                        <ul className="list-disc pl-5 marker:text-[#FFA68D] mt-[20px]">
                            <li className="text-[16px] font-secondary mb-[8px]  bg-gradient-to-r from-[#FFA68D] to-[#FD3A84] bg-clip-text text-transparent">Linear cost growth</li>
                            <li className="text-[16px] font-secondary mb-[8px] bg-gradient-to-r from-[#FFA68D] to-[#FD3A84] bg-clip-text text-transparent">Team dependency</li>
                            <li className="text-[16px] font-secondary mb-[8px] bg-gradient-to-r from-[#FFA68D] to-[#FD3A84] bg-clip-text text-transparent">Knowledge silos</li>
                            <li className="text-[16px] font-secondary mb-[8px] bg-gradient-to-r from-[#FFA68D] to-[#FD3A84] bg-clip-text text-transparent">Technical debt</li>
                        </ul>

                    </div>
                    <div className="lg:col-span-6 col-span-12 py-4 px-7 rounded-[16px] border border-[1px] border-[#999999] bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(153,153,153,0.1)]">
                        <img src="./public/svg/wrench.svg" alt="" className="h-[32px]"/>
                        <h3 className="text-[#FFFFFF] text-[24px] font-primary mt-5">AI Limitations</h3>
                        <ul className="list-disc pl-5 marker:text-[#FFA68D] mt-[20px]">
                            <li className="text-[16px] font-secondary mb-[8px]  bg-gradient-to-r from-[#FFA68D] to-[#FD3A84] bg-clip-text text-transparent">No learning capability</li>
                            <li className="text-[16px] font-secondary mb-[8px] bg-gradient-to-r from-[#FFA68D] to-[#FD3A84] bg-clip-text text-transparent">Static rule-based</li>
                            <li className="text-[16px] font-secondary mb-[8px] bg-gradient-to-r from-[#FFA68D] to-[#FD3A84] bg-clip-text text-transparent">Version compatibility</li>
                            <li className="text-[16px] font-secondary mb-[8px] bg-gradient-to-r from-[#FFA68D] to-[#FD3A84] bg-clip-text text-transparent">Manual adaptation</li>
                        </ul>

                    </div>
                </div>
            </div>
             <section className='py-[80px] mt-[-100px] bg-[#fff]
                            lg:rounded-t-[100px] rounded-t-[50px]'>
                            <SectionHeading
                                title="Where Autonomous Testing Excels"
                                subtitle='Key advantages of the autonomous approach'
                                titleClassName="sm:text-[48px] text-[#00273A]"
                                subtitleClassName=" sm:text-[16px] text-[#626161]"
                            />
            
                            <div class="flex flex-wrap px-5  gap-6 pt-10 justify-center max-w-7xl mx-auto">
                                {
                                    cards.map((item, index) => (
                                        <div class={`core-feature-card background: linear-gradient(
                                    180deg,
                                    rgba(255, 255, 255, 0.1) 0%,
                                    rgba(153, 153, 153, 0.1) 100%
                                    );
                                    transition-shadow duration-300   hover:shadow-[0px_0px_40px_2px_#D9D9D9] shrink-0  md:w-[365px] w-[100%] bg-[#fff]  gap-[80px]  rounded-3xl border border-[1px] border-[#D9D9D9] p-5 gap-12 flex flex-col ${item.cardClass}`}>
                                            <div class="feature-card-content1">
                                                <img src={item.img} alt="" />
                                                <h2 class="font-primary  text-[#1E1E1E] font-medium text-[24px] leading-[1.2] capitalize mt-[30px]" >{item.title}</h2>
                                                <p class="font-secondary text-[18px] leading-[1.4] pt-4 capitalize text-[#626161]" >{item.description}</p>
                                            </div>
                                        </div>
            
                                    ))
                                }
            
                            </div>
                        </section>
                        <FooterSection/>

        </>
    )
}

export default AutonomousTestingPage
import React from 'react'
import Navbar from "@/components/Navbar.jsx";
import MainBanner from '../components/services/MainBanner';
import FooterSection from "@/components/home/FooterSection"; 
import UspServices from '../components/services/UspServices';
import TimeLine from '../components/services/TimeLine';
import {Security_HEADER, CORE_MODULE_CONFIG} from "./../config/securityConfig"
import { ShieldCheck, Lock, TvMinimalPlay, Check, Layers2 } from 'lucide-react';
import SectionHeading from "@/components/common/SectionHeading";
const SecurityPage = () => {
  return (
    <>
     <Navbar
            wrapperClassName="fixed top-0 left-0"
            disableScrollHide={false}
            linkClassName="text-dark"
            iconClassName="text-dark"
          />
           <div className='mt-[100px] rounded-[50px] py-[150px] pb-[80px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)]'>
                {/* <p className='font-secondary font-[600] text-[18px] text-[#fff] text-center mb-[15px]'>Two Platforms. One Vision.</p> */}
                <MainBanner data={Security_HEADER} />
                <div className=" mt-[40px]">
                    <ul className="flex justify-center gap-5">
                        <li className='bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)] border border-[1px] px-4 py-3  border-[#c6c6c6] rounded-[100px]'><span className='bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-transparent font-[12px] font-primary '>SOC 2 Ready</span></li>
                        <li className='bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)] border border-[1px] px-4 py-3  border-[#c6c6c6] rounded-[100px]'><span className='bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-transparent font-[12px] font-primary '>GDPR Aligned</span></li>
                        <li className='bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)] border border-[1px] px-4 py-3  border-[#c6c6c6] rounded-[100px]'><span className='bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-transparent font-[12px] font-primary '>HIPAA Capable</span></li>
                        <li className='bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)] border border-[1px] px-4 py-3  border-[#c6c6c6] rounded-[100px]'><span className='bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-transparent font-[12px] font-primary '>ISO Standards</span></li>
                    </ul>
                </div>
                <div className="max-w-[680px] m-auto mt-[60px] " >
                    <div className="border border-[1px] border-[#D9D9D9] rounded-[24px] px-4 py-4 grid grid-cols-12 gap-3">
                        <div className="col-span-4 bg-[#FFFFFF0D] border flex items-center flex-col gap-4  border-[1px] border-[#D9D9D9] text-center rounded-[16px]  py-4 ">
                            <span className='bg-[linear-gradient(90deg,rgba(255,166,141,0.15)_0.03%,rgba(253,58,132,0.15)_100%)] h-[40px] w-[40px] flex justify-center items-center'>
                            <ShieldCheck
                            size={24}
                            className="bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-[#C44558]"
                            />

                            </span>
                            <h2 className='bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-transparent font-[20px] font-[600] font-primary'>Defense Layer</h2>

                        </div>
                        <div className="col-span-4 bg-[#FFFFFF0D] border flex items-center flex-col gap-4  border-[1px] border-[#D9D9D9] text-center rounded-[16px]  py-4 ">
                            <span className='bg-[linear-gradient(90deg,rgba(255,166,141,0.15)_0.03%,rgba(253,58,132,0.15)_100%)] h-[40px] w-[40px] flex justify-center items-center'>
                            <Lock
                            size={24}
                            className="bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-[#C44558]"
                            />

                            </span>
                            <h2 className='bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-transparent font-[20px] font-[600] font-primary'>Encryption</h2>

                        </div>
                        <div className="col-span-4 bg-[#FFFFFF0D] border flex items-center flex-col gap-4  border-[1px] border-[#D9D9D9] text-center rounded-[16px]  py-4 ">
                            <span className='bg-[linear-gradient(90deg,rgba(255,166,141,0.15)_0.03%,rgba(253,58,132,0.15)_100%)] h-[40px] w-[40px] flex justify-center items-center'>
                            <TvMinimalPlay
                            size={24}
                            className="bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-[#C44558]"
                            />

                            </span>
                            <h2 className='bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-transparent font-[20px] font-[600] font-primary'>Monitoring</h2>

                        </div>
                        <div className="col-span-12 bg-[#FFFFFF0D] border flex justify-between px-4 gap-4  border-[1px] border-[#D9D9D9] text-center rounded-[16px]  py-4 ">
                            <h2 className='bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-transparent font-[20px] font-[600] font-primary'>Zero-Trust Access</h2>
                            <Check
                            size={24}
                            className="bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-[#C44558]"
                            />


                        </div>
                        <div className="col-span-12 border bg-[#FFFFFF0D] flex justify-between px-4 gap-4  border-[1px] border-[#D9D9D9] text-center rounded-[16px]  py-4 ">
                            <h2 className='bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-transparent font-[20px] font-[600] font-primary'>Tenant Isolation</h2>
                            <Check
                            size={24}
                            className="bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-[#C44558]"
                            />


                        </div>
                        <div className="col-span-12 border bg-[#FFFFFF0D] flex justify-between px-4 gap-4  border-[1px] border-[#D9D9D9] text-center rounded-[16px]  py-4 ">
                            <h2 className='bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-transparent font-[20px] font-[600] font-primary'>Audit Logging</h2>
                            <Check
                            size={24}
                            className="bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-[#C44558]"
                            />


                        </div>
                       


                    </div>

                </div>

            </div>
            <div className="py-[40px]">
                <ul className="flex justify-center gap-5">
                        <li className='bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)]  px-4 py-3   rounded-[100px]'><span className='text-[#C44558] font-[20px] font-secondary fonr-[600]'>SOC 2 Ready</span></li>
                        <li className='bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)]  px-4 py-3   rounded-[100px]'><span className='text-[#C44558] font-[20px] font-secondary fonr-[600]'>GDPR Aligned</span></li>
                        <li className='bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)]  px-4 py-3   rounded-[100px]'><span className='text-[#C44558] font-[20px] font-secondary fonr-[600]'>HIPAA Capable</span></li>
                        <li className='bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)]  px-4 py-3   rounded-[100px]'><span className='text-[#C44558] font-[20px] font-secondary fonr-[600]'>ISO Standards</span></li>
                       </ul>

            </div>
            <div className=" rounded-t-[100px]  pb-[150px] py-[80px] pb-[80px] bg-[linear-gradient(360deg,#042539_0%,#000000_100%)]">
                 <SectionHeading
                                    title="Defense-in-Depth Security Architecture"
                                    subtitle='Multi-layered security controls across platform, infrastructure, and operational layers ensure <br/> comprehensive protection.'
                                    titleClassName="sm:text-[48px] text-[#fff]"
                                    subtitleClassName=" sm:text-[16px] text-[#C6C6C6] max-w-[950px]"
                                />
                <div className='max-w-[1080px] m-auto mt-[60px]'>
                    <div className="grid grid-cols-12 gap-8">
                        <div className="col-span-7 border border-[1px] border-[#D9D9D9] py-6 px-6 rounded-[24px]">
                            <h3 className='text-[24px] font-primary text-[#fff] font-[600]'>Platform Security Layers</h3>
                            <div className='flex gap-4 mt-6 bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)] p-4 rounded-[16px]'>
                                <div className="mt-1">
                                    <span className='bg-[linear-gradient(90deg,rgba(255,166,141,0.15)_0.03%,rgba(253,58,132,0.15)_100%)] rounded-[4px] h-[40px] w-[40px] flex justify-center items-center'>
                                <Layers2
                                size={24}
                                className="bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-[#C44558]"
                                />

                                </span>

                                </div>
                                <div className="">
                                    <h3 className='text-[24px] font-primary text-[#fff] font-[600]'>UI Layer Security</h3>
                                    <p className='text-[#999999] text-[16px]'>Role-based access controls, session management, and secure authentication flows.</p>

                                </div>
                            </div>
                            <div className='flex gap-4 mt-3 bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)] p-4 rounded-[16px]'>
                                <div className="mt-1">
                                    <span className='bg-[linear-gradient(90deg,rgba(255,166,141,0.15)_0.03%,rgba(253,58,132,0.15)_100%)] h-[40px] w-[40px] flex justify-center items-center rounded-[4px]'>
                                <Lock
                                size={24}
                                className="bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-[#C44558]"
                                />

                                </span>

                                </div>
                                <div className="">
                                    <h3 className='text-[24px] font-primary text-[#fff] font-[600]'>API Security</h3>
                                    <p className='text-[#999999] text-[16px]'>OAuth 2.0, rate limiting, input validation, and comprehensive API audit trails.</p>

                                </div>
                            </div>
                            <div className='flex gap-4 mt-3 bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)] p-4 rounded-[16px]'>
                                <div className="mt-1">
                                    <span className='rounded-[4px] bg-[linear-gradient(90deg,rgba(255,166,141,0.15)_0.03%,rgba(253,58,132,0.15)_100%)] h-[40px] w-[40px] flex justify-center items-center'>
                                <TvMinimalPlay
                                size={24}
                                className="bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-[#C44558]"
                                />

                                </span>

                                </div>
                                <div className="">
                                    <h3 className='text-[24px] font-primary text-[#fff] font-[600]'>Agent Isolation</h3>
                                    <p className='text-[#999999] text-[16px]'>Sandboxed execution environments with strict resource and network controls.</p>

                                </div>
                            </div>

                        </div>
                        <div className="col-span-5 ">
                            <div className="border border-[1px] border-[#D9D9D9] py-6 px-6 rounded-[24px] bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)]">
                                <h3 className='text-[20px] bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-transparent font-[600]'>Long-Term Memory</h3>
                                <ul className='mt-[40px]'>
                                    <li className='text-[16px] text-[#D9D9D9] flex justify-between font-[500] font-secondary mb-2'>Self-healing test scripts <Check className='text-[#C44558]'/></li>
                                    <li className='text-[16px] text-[#D9D9D9] flex justify-between font-[500] font-secondary mb-2'>Self-healing test scripts <Check className='text-[#C44558]'/></li>
                                    <li className='text-[16px] text-[#D9D9D9] flex justify-between font-[500] font-secondary mb-2'>Self-healing test scripts <Check className='text-[#C44558]'/></li>
                                </ul>
                            </div>
                            <div className="border mt-9 border-[1px] border-[#D9D9D9] py-6 px-6 rounded-[24px] bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)]">
                                <h3 className='text-[20px] bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-transparent font-[600]'>Long-Term Memory</h3>
                                <ul className='mt-[40px]'>
                                    <li className='text-[16px] text-[#D9D9D9] flex justify-between font-[500] font-secondary mb-2'>Stored Contexts <span className='bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-transparent'>2,468</span></li>
                                    <li className='text-[16px] text-[#D9D9D9] flex justify-between font-[500] font-secondary mb-2'>Embeddings<span className='bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-transparent'>1M+</span></li>
                                    <li className='text-[16px] text-[#D9D9D9] flex justify-between font-[500] font-secondary mb-2'>Retention<span className='bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-transparent'>1+ yr</span></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>

            <UspServices data={CORE_MODULE_CONFIG} />

    </>
  )
}

export default SecurityPage
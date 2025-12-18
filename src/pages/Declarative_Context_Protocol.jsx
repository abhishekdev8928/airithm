import React from 'react'
import MainBanner from '../components/services/MainBanner';
import { HEADER , CARD_CONFIG, KEY_FEATURE_CONFIG} from "@/config/Declarative_Context_Protocol_config";
import Navbar from "@/components/Navbar.jsx";
import FeatureCard from "@/components/card/FeaturedCard.jsx";
import UspServices from '../components/services/UspServices';
import FooterSection from "@/components/automation/FooterSection";

const Declarative_Context_Protocol = () => {
    const { cards } = CARD_CONFIG;
  return (
    <>
          <Navbar
            wrapperClassName="fixed top-0 left-0"
            disableScrollHide={false}
            linkClassName="text-dark"
            iconClassName="text-dark"
          />
          <MainBanner  data={HEADER} />
          <div className="flex mt-5 flex-wrap  gap-6 pt-10 justify-center max-w-[1200px] mx-auto mb-[100px]">
            {cards.map((card) => (
                <FeatureCard key={card.id} {...card} />
            ))}
            </div>
            <UspServices data={KEY_FEATURE_CONFIG} />

            <section className="py-[100px]">
                   <div className="relative text-center px-4 lg:px-0  z-10">
              <h1 class="font-primary text-[48px] mx-auto font-[600]  sm:w-fit leading-none sm:text-[64px] sm:max-w-[1000px] mx-auto tracking-[0.02em]">
                Enterprise Governance
              </h1>

              <p class="font-secondary font-medium text-[18px] leading-[1.4] tracking-[2%] text-center capitalize mt-[20px]  sm:max-w-[950px] mx-auto pt-2.5 text-[#838383]">
                Built for the most demanding compliance
              </p>
            </div>
            <div className="max-w-5xl mx-auto mt-[80px] ">
                <div className="flex justify-between">
                    <div className="soc2 min-w-[419px]">    
                        <div className="flex mb-5">
                            <span className='inline-block me-6 mt-2'>
                                <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="38.4" height="38.4" rx="19.2" fill="url(#paint0_linear_650_409)"/>
                            <path d="M16.8031 19.1992L18.4031 20.7992L21.6031 17.5992M27.2031 19.1992C27.2031 23.6175 23.6214 27.1992 19.2031 27.1992C14.7848 27.1992 11.2031 23.6175 11.2031 19.1992C11.2031 14.7809 14.7848 11.1992 19.2031 11.1992C23.6214 11.1992 27.2031 14.7809 27.2031 19.1992Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            <defs>
                            <linearGradient id="paint0_linear_650_409" x1="0.0112518" y1="19.2049" x2="38.4" y2="19.2049" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFA68D"/>
                            <stop offset="1" stop-color="#FD3A84"/>
                            </linearGradient>
                            </defs>
                            </svg>

                            </span>
                            <div className='inline-block'>
                                <h3 className='text-[#C44558] text-[20px] font-primary font-[600] mb-2'>SOC 2 Type II Complaint</h3>
                                <p className='text-[16px] font-primary font-[500] text-[#626161] '>Comprehensive security controls and continuous monitoring</p>
                            </div>
                        </div>
                          <div className="flex mb-5">
                            <span className='inline-block me-6 mt-2'>
                                <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="38.4" height="38.4" rx="19.2" fill="url(#paint0_linear_650_409)"/>
                            <path d="M16.8031 19.1992L18.4031 20.7992L21.6031 17.5992M27.2031 19.1992C27.2031 23.6175 23.6214 27.1992 19.2031 27.1992C14.7848 27.1992 11.2031 23.6175 11.2031 19.1992C11.2031 14.7809 14.7848 11.1992 19.2031 11.1992C23.6214 11.1992 27.2031 14.7809 27.2031 19.1992Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            <defs>
                            <linearGradient id="paint0_linear_650_409" x1="0.0112518" y1="19.2049" x2="38.4" y2="19.2049" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFA68D"/>
                            <stop offset="1" stop-color="#FD3A84"/>
                            </linearGradient>
                            </defs>
                            </svg>

                            </span>
                            <div className='inline-block'>
                                <h3 className='text-[#C44558] text-[20px] font-primary font-[600] mb-2'>GDPR Ready</h3>
                                <p className='text-[16px] font-primary font-[500] text-[#626161] '>Privacy-by-ready with automated data protection</p>
                            </div>
                        </div>
                          <div className="flex mb-5">
                            <span className='inline-block me-6 mt-2'>
                                <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="38.4" height="38.4" rx="19.2" fill="url(#paint0_linear_650_409)"/>
                            <path d="M16.8031 19.1992L18.4031 20.7992L21.6031 17.5992M27.2031 19.1992C27.2031 23.6175 23.6214 27.1992 19.2031 27.1992C14.7848 27.1992 11.2031 23.6175 11.2031 19.1992C11.2031 14.7809 14.7848 11.1992 19.2031 11.1992C23.6214 11.1992 27.2031 14.7809 27.2031 19.1992Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            <defs>
                            <linearGradient id="paint0_linear_650_409" x1="0.0112518" y1="19.2049" x2="38.4" y2="19.2049" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFA68D"/>
                            <stop offset="1" stop-color="#FD3A84"/>
                            </linearGradient>
                            </defs>
                            </svg>

                            </span>
                            <div className='inline-block'>
                                <h3 className='text-[#C44558] text-[20px] font-primary font-[600] mb-2'>Zero Trust Architecture</h3>
                                <p className='text-[16px] font-primary font-[500] text-[#626161] '>Never trust always verify with continuous authentication</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="min-w-[390px] border border-1 border-[#C6C6C6] rounded-[16px] p-[20px]">
                        <h3 className='text-[#C44558] text-[20px] font-primary font-[600]'>Live Network Status</h3>
                        <ul className='mt-8'>
                            <li className='flex justify-between mb-3'><p className='text-[16px] font-primary font-[500] text-[#626161] '>Active Agents</p> <span className='text-[16px] font-primary font-[500] text-[#C44558]'>1,247</span></li>
                            <li className='flex justify-between mb-3'><p  className='text-[16px] font-primary font-[500] text-[#626161] '>Policy Handshakes</p> <span className='text-[16px] font-primary font-[500] text-[#C44558]'>98.7%</span></li>
                            <li className='flex justify-between mb-3'><p  className='text-[16px] font-primary font-[500] text-[#626161] '>Security incidents</p> <span className='text-[16px] font-primary font-[500] text-[#C44558]'>0</span></li>
                            <li className='flex justify-between mb-3'><p  className='text-[16px] font-primary font-[500] text-[#626161] '>Compliance Score</p> <span className='text-[16px] font-primary font-[500] text-[#C44558]'>100%</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            </section>
                     <FooterSection />
          
    </>
  )
}

export default Declarative_Context_Protocol
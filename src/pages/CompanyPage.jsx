import React from 'react'
import Navbar from "@/components/Navbar.jsx";
import MainBanner from '../components/services/MainBanner';
import FooterSection from "@/components/automation/FooterSection";
import UspServices from '../components/services/UspServices';
import {Comapny_HEADER, KEY_FEATURES_CONFIG} from "../config/companyConfig"
import SectionHeading from "@/components/common/SectionHeading";
import FeatureCard from "@/components/card/FeaturedCard.jsx";

const CompanyPage = () => {
    const { cards} = KEY_FEATURES_CONFIG;
  return (
    <>
          <Navbar
            wrapperClassName="fixed top-0 left-0"
            disableScrollHide={false}
            linkClassName="text-dark"
            iconClassName="text-dark"
          />
          <div className='mt-[100px] rounded-[50px] py-[150px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)]'>
            <p className='font-secondary font-[600] text-[18px] text-[#fff] text-center mb-[15px]'>Two Platforms. One Vision.</p>
            <MainBanner  data={Comapny_HEADER} />

          </div>
          <section className='py-[80px] '>
               <SectionHeading
                      title="Building Tomorrow’s Testing Infrastructure"
                      subtitle='We envision a world where software testing is fully autonomous, context-aware, and predictive—where quality assurance evolves from reactive validation to proactive intelligence. <br/><br/> Our dual-platform approach combines the precision of autonomous testing with the insight of context intelligence, creating a unified ecosystem that adapts, learns, and scales with your organization.'
                      titleClassName="sm:text-[48px]"
                      subtitleClassName=" sm:text-[16px] text-[#626161] max-w-[950px]"
                    />

                 <div className="flex mt-5 flex-wrap  gap-6 pt-10 justify-center max-w-[1200px] mx-auto">
                          {cards.map((card) => (
                            <FeatureCard key={card.id} {...card} />
                          ))}
                        </div>


          </section>
          <section className='py-[80px] pb-[150px] rounded-t-[50px] rounded-b-0 bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)]'>
              <p className='font-secondary font-[600] text-[18px] text-[#fff] text-center mb-[15px]'>Our Platforms</p>
                     <SectionHeading
                      title="Two Complementary Solutions"
                      subtitle='Purpose-built platforms that work independently or together to transform your testing and intelligence capabilities'
                      titleClassName="sm:text-[48px]"
                      subtitleClassName=" sm:text-[16px] text-[#626161] max-w-[950px]"
                    />
          </section>

    </>
  )
}

export default CompanyPage
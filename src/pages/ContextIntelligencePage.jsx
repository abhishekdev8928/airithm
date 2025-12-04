import React from "react";
import CtaSection from "@/components/common/CtaSection";
import HeroSection from "@/components/common/HeroSection";
import FeatureSection from "@/components/common/FeatureSection";
import FeatureCard from "@/components/card/FeaturedCard";
import SectionHeading from "@/components/common/SectionHeading";
import Navbar from "@/components/Navbar"
import {
  CONTEXT_ANALYTICS_CONFIG,
  Context_HERO_CONFIG,
  CONTEXT_CTA_CONFIG,
  WHY_CHOOSE_CIP_CONFIG,
  CONTEXT_CORE_PILLAR_CONFIG,
} from "@/config/contextIntelligenceConfig";
import FooterSection from "@/components/automation/FooterSection";

const ContextIntelligencePage = () => {
  return (
    <>
      <Navbar
        wrapperClassName="relative "
        disableScrollHide={true}
        linkClassName="text-black"
        iconClassName="invert-0"
      />

      <HeroSection {...Context_HERO_CONFIG} />

      <FeatureSection
        className="border-b border-[#D9D9D9] shadow-[0_2px_4px_0_rgba(0,39,58,0.1)] rounded-b-[100px]"
        config={CONTEXT_CORE_PILLAR_CONFIG}
      />

      <section>
        <div className="max-w-7xl py-[100px]  mx-auto space-y-4 ">
          <h2 className="text-center section-title text-[#00273A]">
            Revolutionary Context Orchestration
          </h2>
          <p className=" text-inter-20 font-normal text-[#1E1E1E] leading-[1.4] text-[rgba(30, 30, 30, 1)]  text-center mx-auto">
            Our platform doesn’t just process data it understand the intricate
            relationships, <br /> temporal patterns, and contextual nuances that
            traditional AI systems miss. <br /> Experience intelligence that
            truly comprehends your business context.
          </p>
        </div>
      </section>

      <section>
        <div className="rounded-t-[100px] relative z-10  bg-[linear-gradient(180deg,#042539_0%,#000000_100%)] section-overlap-bottom">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 px-6">
            {/* LEFT */}
            <div className="flex-1 justify-between  flex flex-col gap-6">
              <h3 className="text-dmsans-64 text-white leading-[1.2] font-medium">
                Platform <br /> Architecture
              </h3>

              <p className="text-inter-16 font-medium text-[#FFF9F9] leading-[1.4] max-w-[520px]">
                Our platform doesn’t just process data—it understands the
                intricate relationships, temporal patterns, and contextual
                nuances that traditional AI systems miss. Experience
                intelligence that truly comprehends your business context.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex-1  flex justify-center md:justify-end">
              <img
                src="/automation/lce.png"
                alt=""
                className="w-full  object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="rounded-[100px] py-[100px]  bg-white    relative z-14 mt-[-100px]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              titleClassName="section-title leading-[1.2]"
              title="Enterprise Use Cases"
            />

            <div className="flex justify-center items-center gap-6 pt-[60px]">
              {CONTEXT_ANALYTICS_CONFIG.cards.map((items, index) => (
                <FeatureCard key={items.id || index} {...items} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div
          style={{
            backgroundImage: `url(/bg/bg-gradient-four.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="rounded-b-[100px] overflow-hidden section-overlap-top  bg-img-overlay  relative z-13 mt-[-100px] 
                
               "
        >
          <div
            className="relative z-12 max-w-7xl mx-auto px-6 
                    flex flex-col md:flex-row justify-between items-between gap-10"
          >
            {/* LEFT SIDE */}
            <div className="flex flex-col  justify-between shrink-0 md:max-w-[50%]">
              <div className="max-w-[542px] text-white">
                <SectionHeading
                  title="Developer Integration"
                  subtitle={`Build intelligent applications with our comprehensive APIs and <br/> SDKs. Get started in minutes with our intuitive developer tools`}
                  titleClassName="section-title text-white text-left"
                  subtitleClassName="text-inter-16 leading-[1.4] font-medium text-white text-left"
                  wrapperClassName="space-y-2 text-left"
                />
              </div>

              <div className="stack-chips-wrapper flex gap-4 flex-wrap mt-6">
                <div
                  className="chips text-inter-16 font-medium leading-none w-fit 
                          px-[20px] py-[12px] rounded-[100px] text-white bg-[#00000033]"
                >
                  Python SDK
                </div>
                <div
                  className="chips text-inter-16 font-medium leading-none w-fit 
                          px-[20px] py-[12px] rounded-[100px] text-white bg-[#00000033]"
                >
                  Javascript API
                </div>
                <div
                  className="chips text-inter-16 font-medium leading-none w-fit 
                          px-[20px] py-[12px] rounded-[100px] text-white bg-[#00000033]"
                >
                  Rest API
                </div>
                <div
                  className="chips text-inter-16 font-medium leading-none w-fit 
                          px-[20px] py-[12px] rounded-[100px] text-white bg-[#00000033]"
                >
                  GraphQL
                </div>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="w-full md:w-1/2 overflow-hidden">
              <img
                className="w-full rounded-xl"
                src="/automation/code-editor.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <FeatureSection
        featureCardClassName="w-[46%] "
        config={WHY_CHOOSE_CIP_CONFIG}
      />

      <CtaSection wrapperClassName="mt-0" {...CONTEXT_CTA_CONFIG} />

      <FooterSection />
    </>
  );
};

export default ContextIntelligencePage;

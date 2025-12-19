import React from "react";
import Navbar from "@/components/Navbar.jsx";
import MainBanner from "@/components/services/MainBanner";
import {
  DEMO_HEADER_CONFIG,
  PLATFORM_FEATURES_CONFIG,
  DEMO_TARGET_AUDIENCE_CONFIG,
  DEMO_CTA_CONFIG
} from "../config/demoConfig";
import SectionHeading from "@/components/common/SectionHeading";
import FeatureCard from "@/components/card/FeaturedCard";
import RequestDemoForm from "../components/shared/RequestDemoForm";
import CtaSection from "@/components/common/CtaSection";
import FooterSection from "@/components/home/FooterSection"
const DemoPage = () => {
  return (
    <>
      <Navbar
        
      />

      <section>
        <div className="bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)] pt-[200px] pb-[150px] rounded-[50px] mt-[102px] text-white">
          <MainBanner data={DEMO_HEADER_CONFIG} />

          <div className="demo-hero-bottom space-y-6 flex flex-col justify-center items-center text-center mt-[60px]">
            <div className="demo-badges flex justify-center">
              <div className="w-fit py-2 px-3 rounded-full bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)]">
                <span
                  className="font-secondary  bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-transparent
 leading-none tracking-[0.04em] font-medium text-xs"
                >
                  Demo Flow Active
                </span>
              </div>
            </div>

            <div className="demo-feature-list max-w-xl w-full space-y-4 mx-auto">
              <div className="demo-feature-item border rounded-2xl border-[#D9D9D9] flex justify-center items-center gap-6 max-w-full min-h-[94px] ">
                <div
                  className="size-12 flex justify-center items-center rounded-sm bg-[linear-gradient(90deg,rgba(255,166,141,0.15)_0.03%,rgba(253,58,132,0.15)_100%)]

"
                >
                  <img src="/svg/play.svg" className="size-[32]" alt="" />
                </div>

                <div className="demo-feature-content text-left space-y-2">
                  <h4
                    className="bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] inline-block bg-clip-text text-transparent
             font-primary font-medium text-[20px] leading-[1.2] tracking-[0.02em] capitalize"
                  >
                    Executing Tests
                  </h4>

                  <p
                    className="font-secondary  font-normal text-[18px] leading-[1.2] tracking-[0.02em] lowercase text-[#D9D9D9]
"
                  >
                    multi_env_execution
                  </p>
                </div>
              </div>

              <div className="demo-feature-item border rounded-2xl border-[#D9D9D9] flex justify-center items-center gap-6 max-w-full min-h-[94px] ">
                <div
                  className="size-12 flex justify-center items-center rounded-sm bg-[linear-gradient(90deg,rgba(255,166,141,0.15)_0.03%,rgba(253,58,132,0.15)_100%)]

"
                >
                  <img src="/svg/chart-line.svg" className="size-[32]" alt="" />
                </div>

                <div className="demo-feature-content text-left space-y-2">
                  <h4
                    className="bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] inline-block bg-clip-text text-transparent
             font-primary font-medium text-[20px] leading-[1.2] tracking-[0.02em] capitalize"
                  >
                    Evaluating Results
                  </h4>

                  <p
                    className="font-secondary  font-normal text-[18px] leading-[1.2] tracking-[0.02em] lowercase text-[#D9D9D9]
"
                  >
                    llm_scoring_engine
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <section>
          <div className="relative px-4 sm:px-0   w-full gap-10 commmunity-section section-overlap flex-col justify-center flex items-center mt-[-100px] z-5">
            <div className="max-w-7xl  relative ">
              <SectionHeading
                subtitle="
    Experience the full autonomous testing lifecycle from agent generation to enterprise insights.
 "
                subtitleClassName=" font-secondary text-[#626161]"
                titleClassName="font-primary   text-[#00273A] captialize"
                title={PLATFORM_FEATURES_CONFIG?.title || "Not Provided"}
                wrapperClassName=""
                spacing="space-y-4"
              />

              <div className="flex flex-wrap   gap-6 pt-10 justify-center max-w-7xl mx-auto">
                {PLATFORM_FEATURES_CONFIG?.cards?.map((item) => (
                  <FeatureCard {...item} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>



      <RequestDemoForm />


       <section>
        
          <div className="relative px-4 py-[100px] sm:px-0 bg-white  w-full gap-10 commmunity-section flex-col justify-center rounded-t-[100px] flex items-center mt-[-100px] z-10">
            <div className="max-w-7xl  relative ">
              <SectionHeading
                subtitle="
    Experience the full autonomous testing lifecycle from agent generation to enterprise insights.
 "
                subtitleClassName=" font-secondary text-[#626161]"
                titleClassName="font-primary   text-[#00273A] captialize"
                title={PLATFORM_FEATURES_CONFIG?.title || "Not Provided"}
                wrapperClassName=""
                spacing="space-y-4"
              />

              <div className="flex flex-wrap   gap-6 pt-10 justify-center max-w-7xl mx-auto">
                {DEMO_TARGET_AUDIENCE_CONFIG?.cards?.map((item) => (
                  <FeatureCard {...item} />
                ))}
              </div>
            </div>
          </div>
        
      </section>

      <CtaSection {...DEMO_CTA_CONFIG} />

      <FooterSection />
    </>
  );
};

export default DemoPage;

import React from "react";
import Navbar from "../components/Navbar";
import { TEST_ANALYTICS_INSIGHTS_HEADER_CONFIG } from "@/config/testAnalyticsInsightsConfig.js";
import MainBanner from "../components/services/MainBanner";
import { ANALYTICS_TABS_CONFIG, TEST_ANALYTICS_CTA_CONFIG, TEST_ANALYTICS_INSIGHTS_CONFIG, TEST_ANALYTICS_USP_CONFIG } from "../config/testAnalyticsInsightsConfig";
import SectionHeading from "../components/common/SectionHeading";
import FeatureCard from "@/components/card/FeaturedCard";
import InsightCard from "../components/card/InsightCard";
import CtaSection from "../components/common/CtaSection";
import FooterSection from "@/components/home/FooterSection";

import HowItWorks from "@/components/sections/HowItWorks"


const TestAnalyticsInsightsPage = () => {
  return (
    <>
      <Navbar initialTextColor="black" />

      <section>
        <div className="mt-[104px] py-[140px] text-white bg-gradient-primary rounded-[50px]  w-full ">
          <MainBanner data={TEST_ANALYTICS_INSIGHTS_HEADER_CONFIG} />
        </div>
      </section>

      <section>
        <div className="Analytics_&_Insights py-20 space-y-12">
          <div className="space-y-6">
            <h2 className="font-primary font-medium text-5xl leading-[1.2] tracking-[0.02em] text-center capitalize">
              What It Does
            </h2>

            <p className="font-secondary text-center max-w-[800px] mx-auto text-[#626161] font-medium text-base leading-[1.4] tracking-[0.04em] ">
              Our advanced analytics platform transforms raw testing data into
              comprehensive insights, enabling teams to make data-driven
              decisions with confidence. By leveraging machine learning and
              statistical analysis, it provides deep visibility into test
              performance, quality trends, and risk patterns.
            </p>

            <p className="font-secondary max-w-[800px] mx-auto text-[#626161] font-medium text-base leading-[1.4] tracking-[0.04em] text-center">
              The platform automatically correlates test results across
              environments, identifies failure patterns, and predicts potential
              quality issues—helping teams address risks before they impact
              production systems.
            </p>
          </div>

          <div className="px-10  rounded-2xl overflow-hidden h-[500px]">
            <img
              src="/topics/testing-dashboard.jpg"
              alt=""
              className="w-full h-full rounded-2xl object-cover object-center"
            />
          </div>

          <div className="flex  justify-center gap-10 flex-wrap">
            {ANALYTICS_TABS_CONFIG.map((item) => (
              <div key={item.id} className="py-3 px-4 flex items-center gap-2">
                <img
                  src={item.iconSrc}
                  alt={item.label}
                  width={item.iconSize}
                  height={item.iconSize}
                  className="shrink-0"
                />

                <h2 className="text-[#C44558] font-secondary font-medium text-[16px] leading-[140%] tracking-[0.04em] capitalize">
                  {item.label}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />

      <section>
        <div className="py-[100px] relative">

          <img src="/svg/ellipse.svg" className="absolute top-0 left-0" alt="" />

        <img
          src="/svg/ellipse-bottom.svg"
          className="absolute bottom-[-200px] right-0"
          alt=""
        />

          <SectionHeading
            subtitle="
Experience the full autonomous testing lifecycle from agent generation to <br /> enterprise insights.       "
            subtitleClassName=" font-secondary text-[#626161]"
            titleClassName="font-primary   text-[#00273A] captialize"
            title="What You'll See in the Demo."
            wrapperClassName=""
            spacing="space-y-4"
          />

          <div className="flex pt-[60px]  flex-wrap gap-6 justify-center">
            {TEST_ANALYTICS_INSIGHTS_CONFIG?.topRow?.map((item) => (
              <InsightCard key={item?.id} {...item} />
            ))}
          </div>
          
        </div>
      </section>


         <section>
        <div className="bg-[linear-gradient(180deg,#042539_0%,#000000_100%)] rounded-t-[100px] relative z-3 pt-[100px] pb-[200px]">
          <SectionHeading
            title={"Real-World Use Cases"}
            titleClassName="text-white"
            titleSize="sm:text-[48px]"
            subtitle="See how teams across industries leverage our platform to transform their delivery process"
            subtitleClassName="text-[#BCBCBC]"
          />

          <div className="flex flex-wrap w-full  gap-6 pt-10 justify-center  mx-auto">
            {TEST_ANALYTICS_USP_CONFIG?.cards?.map((item) => (
              <FeatureCard {...item} contentClass="gap-[14px]" />
            ))}
          </div>
        </div>
      </section>

       <CtaSection wrapperClassName="mt-[-100px]" {...TEST_ANALYTICS_CTA_CONFIG} />

       <FooterSection />
    </>
  );
};

export default TestAnalyticsInsightsPage;





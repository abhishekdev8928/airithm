import React from "react";
import MainBanner from "../components/services/MainBanner";
import UspServices from "../components/services/UspServices";
import SectionHeading from "../components/common/SectionHeading";
import FeatureCard from "@/components/card/FeaturedCard";
import FooterSection from "@/components/home/FooterSection";
import CtaSection from "../components/common/CtaSection";
import Navbar from "@/components/Navbar.jsx";
import * as LucideIcons from "lucide-react";
import FeatureStepCard from "../components/card/FeatureStepCard";
import StatsCard from "../components/card/StatsCard";
import {KNOWLEDGE_EVALUATION_HEADER , KNOWLEDGE_FEATURES_CONFIG_ONE , KNOWLEDGE_WORKS_CONFIG,  KNOWLEDGE_BASED_KEY_BENEFITS , KNOWLEDGE_CTA_CONFIG , KNOWLEDGE_USP_CONFIG} from "../config/knowledgeBasedConfig"

const KnowledgeBasedCreationPage = () => {
  return (
    <>
      <Navbar />
      <section className="w-full mt-[104px] relative z-[3]">
        <section className="pt-[120px] pb-[140px] rounded-[50px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)] text-white">
          <MainBanner data={KNOWLEDGE_EVALUATION_HEADER} />

          
        </section>
      </section>

      <section className="relative  z-2 ">
        {/* Top-left glow */}
        {/* <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px]
    bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]
    opacity-40 blur-[120px] rounded-full" /> */}

        {/* Bottom-right glow */}
        {/* <div className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px]
    bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]
    opacity-40 blur-[120px] rounded-full" /> */}

        <img src="/svg/ellipse.svg" className="absolute  left-0" alt="" />

        <img
          src="/svg/ellipse-bottom.svg"
          className="absolute bottom-[-200px] right-0"
          alt=""
        />

        {/* Content */}
        <div
          className="relative px-4 sm:px-0 w-full gap-10 commmunity-section section-overlap
    flex-col justify-center flex items-center mt-[-100px] z-10"
        >
          <div className="max-w-7xl relative">
            <SectionHeading
              subtitle={
                KNOWLEDGE_FEATURES_CONFIG_ONE?.subtitle || "Not Provided"
              }
              subtitleClassName="font-secondary max-w-[760px] text-[#626161]"
              titleClassName="font-primary text-[#00273A] capitalize"
              title={KNOWLEDGE_FEATURES_CONFIG_ONE?.title || "Not Provided"}
              spacing="space-y-4"
            />

            <div className="flex flex-wrap gap-6 pt-10 justify-center max-w-7xl mx-auto">
              {KNOWLEDGE_FEATURES_CONFIG_ONE?.cards?.map((item) => (
                <FeatureCard {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-3">
        <div
          className="w-full py-[100px] rounded-[100px]
    bg-[linear-gradient(180deg,#042539_0%,#000000_100%)]"
        >
          {/* Heading */}
          <SectionHeading
            title="How It Works"
            subtitle="A streamlined four-step process that transforms your evaluation workflow from manual to automated."
            titleClassName="font-primary text-white capitalize text-center"
            subtitleClassName="font-secondary max-w-[760px] mx-auto text-[#B5B5B5] text-center"
            spacing="space-y-4"
          />

          {/* Cards */}
          <div
            className="mt-16 flex justify-center flex-wrap
      gap-8 max-w-7xl mx-auto px-4"
          >
            {KNOWLEDGE_WORKS_CONFIG.steps.map((step) => (
              <FeatureStepCard
                key={step.step}
                number={step.step}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative">
        <img src="/svg/ellipse.svg" className="absolute  left-0" alt="" />

        <img
          src="/svg/ellipse-bottom.svg"
          className="absolute bottom-[-200px] right-0"
          alt=""
        />
        <div className="relative px-4 sm:px-0   w-full gap-10 commmunity-section section-overlap flex-col justify-center flex items-center mt-[-100px] z-5">
          <div className=" relative ">
            <SectionHeading
              subtitle="
Measurable impact on your organization's knowledge management.       "
              subtitleClassName=" font-secondary text-[#626161]"
              titleClassName="font-primary   text-[#00273A] captialize"
              title="Key Benefits"
              wrapperClassName=""
              spacing="space-y-4"
            />

            <div className="flex flex-wrap w-full  gap-6 pt-10 justify-center  mx-auto">
              <div className="flex flex-wrap w-full  gap-6 pt-10 justify-center  mx-auto">
                
                  {KNOWLEDGE_BASED_KEY_BENEFITS.map((item) => (
  <StatsCard key={item.id} {...item} />
))}

                
              </div>
            </div>
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
            {KNOWLEDGE_USP_CONFIG?.cards?.map((item) => (
              <FeatureCard {...item} contentClass="gap-[14px]" />
            ))}
          </div>
        </div>
      </section>

      <CtaSection wrapperClassName="mt-[-100px]" {...KNOWLEDGE_CTA_CONFIG} />
      <FooterSection />
    </>
  );
};

export default KnowledgeBasedCreationPage;










import { AUTOMATION_Testing_CONFIG } from "@/config/automationConfig";

import TestingCard from "@/components/card/automation/TestingCard";

import SectionHeading from "@/components/common/SectionHeading";

const TestingSection = ({ sectionData, sectionType }) => {
  return (
    <div className=" mx-auto pt-18 px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">

        {/* LEFT CONTENT */}
        <div className="flex flex-col items-center max-w-[420px] w-full shrink-0 text-center">
          <img className="w-16 mb-6" src={sectionData.imgSrc} alt="" />

          <h2
            className="leading-none font-medium text-[#00273A] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] tracking-[0.02em] font-primary"
            dangerouslySetInnerHTML={{ __html: sectionData.name }}
          ></h2>

          <p
            className="text-[#797979] mt-4"
            dangerouslySetInnerHTML={{ __html: sectionData.tagline }}
          />
        </div>

        {/* RIGHT CARDS */}
        <div
          className="
          flex-wrap
          lg:w-auto
          w-full
           md:flex-nowrap
            flex  
            gap-6
            justify-center
            lg:justify-start 
            overflow-x-auto
            lg:overflow-visible
            pb-2
          "
        >
          {sectionData.cards.map((card) => (
            <TestingCard key={card.id} {...card} />
          ))}
        </div>

      </div>
    </div>
  );
};


const TestingCapabilitiesSection = () => {
  const { title, subtitle, neuroTest, coreTest } = AUTOMATION_Testing_CONFIG;
  return (
    <section>
      <div className=" section-wrapper relative z-10  bg-white rounded-[50px] sm:rounded-[100px]  ">
        <div className=" pb-[120px] mx-auto">
          <SectionHeading
            subtitleClassName="text-[#626161] "
            titleClassName=""
            title={title}
            subtitle={subtitle}
          />
          {/* Main Header */}

          {/* NeuroTest Section */}
          <TestingSection sectionData={neuroTest} sectionType="neuroTest" />

          {/* CoreTest Section */}
          <TestingSection sectionData={coreTest} sectionType="coreTest" />
        </div>
      </div>
    </section>
  );
};

export default TestingCapabilitiesSection;

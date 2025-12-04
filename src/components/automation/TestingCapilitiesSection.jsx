import { AUTOMATION_Testing_CONFIG } from "@/config/automationConfig";

import TestingCard from "@/components/card/automation/TestingCard";

import SectionHeading from "@/components/common/SectionHeading";

const TestingSection = ({ sectionData, sectionType }) => {
  return (
    <div className="container mx-auto pt-18 px-4">
      <div className="flex flex-col lg:flex-row items-start gap-10">

        {/* LEFT BLOCK */}
        <div className="flex flex-col items-center w-[420px] flex-shrink-0">
          <img className="w-16 mb-6" src={sectionData.imgSrc} alt="" />

          {/* TITLE SUPPORTS <br> */}
          <h2
            className="text-dmsans-64 leading-none font-medium text-[#00273A] text-center lg:text-left"
            dangerouslySetInnerHTML={{ __html: sectionData.name }}
          />

          {/* DESCRIPTION SUPPORTS <br> */}
          <p
            className="text-[#797979] text-center mt-4"
            dangerouslySetInnerHTML={{ __html: sectionData.tagline }}
          />
        </div>

        {/* RIGHT CARDS */}
        <div className="ml-auto flex flex-wrap justify-center gap-6 md:justify-center lg:flex-nowrap lg:justify-start overflow-x-auto flex-1 min-w-0">
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
      <div className=" section-wrapper relative z-10  bg-white rounded-[100px]  ">
        <div className="max-w-7xl pb-[120px] mx-auto">
          <SectionHeading
            subtitleClassName="text-[#626161] section-subtitle"
            titleClassName="section-title"
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

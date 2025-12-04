import React from "react";
import { HOME_PLATFORM_CONFIG } from "@/config/homeConfig.js";
import PlatformCard from "@/components/card/PlatformCard";
import SectionHeading from "@/components/common/SectionHeading";
const PlatformSection = () => {
  const { title, subtitle, cards } = HOME_PLATFORM_CONFIG;

  return (
    <section className="section-wrapper rounded-b-[100px] rounded-3xl">
      <div className="platform-section   bg-white relative z-10 rounded-[100px]">
        <SectionHeading
          titleClassName="section-title"
          subtitleClassName="section-subtitle text-[#1E1E1E]"
          title={title}
          subtitle={subtitle}
        />

        <div className="flex flex-col pt-18 pb-[180px] gap-20  ">
          {cards.map((platform) => (
            <PlatformCard key={platform.id} {...platform} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;

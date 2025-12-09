import React from "react";
import { HOME_PLATFORM_CONFIG } from "@/config/homeConfig.js";
import PlatformCard from "@/components/card/PlatformCard";
import SectionHeading from "@/components/common/SectionHeading";
const PlatformSection = () => {
  const { title, subtitle, cards } = HOME_PLATFORM_CONFIG;

  return (
    <section className="section-wrapper rounded-b-[50px] overflow-x-hidden bg-white   relative z-10 px-4 lg:px-0 sm:rounded-b-[100px] ">
      <div className="platform-section   rounded-[100px]">
         <SectionHeading
        title={title}
        titleClassName="text-[#00273A]"
        subtitleClassName=" text-[#626161]"
        wrapperClassName={"max-w-[408px] sm:max-w-full   mx-auto"}
        subtitle={subtitle}
      />

        <div className="flex flex-col  pt-18 pb-[120px] sm:pb-[180px] gap-20  ">
          {cards.map((platform) => (
            <PlatformCard key={platform.id} {...platform} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;

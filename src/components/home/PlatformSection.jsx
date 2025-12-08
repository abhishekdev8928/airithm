import React from "react";
import { HOME_PLATFORM_CONFIG } from "@/config/homeConfig.js";
import PlatformCard from "@/components/card/PlatformCard";
import SectionHeading from "@/components/common/SectionHeading";
const PlatformSection = () => {
  const { title, subtitle, cards } = HOME_PLATFORM_CONFIG;

  return (
    <section className="section-wrapper bg-white   relative z-10 px-4 lg:px-0 rounded-b-[100px] rounded-3xl">
      <div className="platform-section   rounded-[100px]">
         <SectionHeading
        title={title}
        titleClassName="text-[#00273A]"
        subtitleClassName=" text-[#626161]"
        wrapperClassName={"w-[408px] sm:w-full   mx-auto"}
        subtitle={subtitle}
      />

        <div className="flex flex-col  pt-18 pb-[180px] gap-20  ">
          {cards.map((platform) => (
            <PlatformCard key={platform.id} {...platform} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;

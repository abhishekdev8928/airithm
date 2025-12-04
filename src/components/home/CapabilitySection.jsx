import { Bot } from "lucide-react";
import React from "react";
import { HOME_CAPABILITY_CONFIG } from "@/config/homeConfig";
import CapabilitiyCard from "../card/CapabilitiyCard";
import SectionHeading from "@/components/common/SectionHeading"
const CapabilitySection = () => {
  const { title, cards } = HOME_CAPABILITY_CONFIG;
  return (
    <section
      className="relative section-overlap  mt-[-100px] flex flex-col justify-center z-5"
      style={{
        background: "linear-gradient(180deg, #042539 0%, #000000 100%)",
      }}
    >

      <SectionHeading 
          titleClassName="section-title   text-white capitalize "
          title="intelligence in Action"

          
        />

      <div className="pt-[95px] mb-[60px]   md:gap-0 flex-wrap  flex justify-center md:justify-between px-[33px]">
        {cards.map((capability , index) => (
          <CapabilitiyCard key={capability.id || index} {...capability} />
        ))}
      </div>
    </section>
  );
};

export default CapabilitySection;

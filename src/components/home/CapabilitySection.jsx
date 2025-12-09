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
          titleClassName="   text-white capitalize "
          title="intelligence in Action"

          
        />

    <div className="pt-[95px] sm:mb-[60px] flex flex-wrap justify-center gap-8 px-[33px]">
  {cards.map((capability, index) => (
    <CapabilitiyCard key={capability.id || index} {...capability} />
  ))}
</div>

    </section>
  );
};

export default CapabilitySection;

import React from "react";
import SectionHeading from "@/components/common/SectionHeading";
import FooterSection from "@/components/home/FooterSection";
import Navbar from "@/components/Navbar.jsx";
import { CAPSULE_CONFIG} from "../config/tcmConfig";
import UspServices from "../components/services/UspServices";

const ContextCapsulePage = () => {
  return (
    <>
      <Navbar
      
      />
      <section>
        <div className="max-w-7xl lg:pt-[100px] pt-[60px] mt-[104px]  mx-auto">
          {/* Hero */}
          <div className="cc-hero-content space-y-4">
            <SectionHeading
              title="Context Capsules"
              subtitle='Portable, scoped context units with persona, tools, and time-bound
              memory for <br className="hidden md:block" /> AIRITHM’s Agentic
              Memory Engine'
              titleClassName="sm:text-[64px]"
              subtitleClassName=" sm:text-[16px] text-[#626161]"
            />
          </div>

          <div className="max-w-xl mx-auto">
            <img
              className=" w-full"
              src="/core-module/context-capsule/capsule.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section>
        <SectionHeading
          titleClassName="font-primary font-medium text-[32px] sm:text-[48px] leading-[1.2] tracking-[0.02em] text-[#00273A] text-center"
          title="Modular AI Context"
          subtitle="Each Context Capsule represents a bounded container of memory, knowledge, and configuration for <br /> an AI agent. Like Docker containers for context, they are modular, sharable, and composable."
          wrapperClassName="space-y-6"
          subtitleClassName=" text-[#626161] sm:text-[16px]"
        />

     <div className="modular-ai-container justify-center py-[60px] px-5 lg:px-0 max-w-7xl mx-auto
                flex flex-col lg:flex-row gap-20 items-stretch">
  
  {/* Left box */}
  <div className="bg-[#D9D9D9] w-full lg:max-w-[452px] min-h-[300px]  rounded-2xl self-stretch "></div>

  {/* Right boxes */}
  <div className="w-full lg:max-w-[380px] flex flex-col justify-between gap-4 h-full">
    
    <div className="lg:p-6 p-3 border rounded-2xl border-[#D5D5D5]">
      <h2 className="text-center text-[#C44558] text-[20px] font-medium">
        Persona/role profile definition
      </h2>
    </div>

    <div className="lg:p-6 p-3 border rounded-2xl border-[#D5D5D5]">
      <h2 className="text-center text-[#C44558] text-[20px] font-medium">
        Tools and system permissions
      </h2>
    </div>

    <div className="lg:p-6 p-3 border rounded-2xl border-[#D5D5D5]">
      <h2 className="text-center text-[#C44558] text-[20px] font-medium">
        Scoped memory and history
      </h2>
    </div>

    <div className="lg:p-6 p-3 border rounded-2xl border-[#D5D5D5]">
      <h2 className="text-center text-[#C44558] text-[20px] font-medium">
        TTL and expiration management
      </h2>
    </div>

  </div>
</div>


      </section>
      <div className="pb-[40px] ">
      <UspServices data={CAPSULE_CONFIG}/>
      </div>

      <FooterSection />
    </>
  );
};

export default ContextCapsulePage;

// CAPSULE_CONFIG

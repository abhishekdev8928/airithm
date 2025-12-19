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
        <div className="max-w-7xl pt-[100px] mt-[104px]  mx-auto">
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

        <div className="modular-ai-container py-[60px] flex flex-wrap lg:flex-row justify-center items-stretch gap-20 mx-auto">
          {/* Left box */}
          <div className="w-full lg:w-[452px] bg-[#D9D9D9]"></div>

          {/* Right boxes */}
          <div className="w-[380px] space-y-4">
            <div className="p-6 w-full border rounded-2xl border-[#D5D5D5]">
              <h2 className="text-center text-[#C44558] capitalize font-primary text-[20px] font-medium">
                Persona/role profile definition
              </h2>
            </div>

            <div className="p-6 w-full border rounded-2xl border-[#D5D5D5]">
              <h2 className="text-center text-[#C44558] capitalize font-primary text-[20px] font-medium">
                Tools and system permissions
              </h2>
            </div>

            <div className="p-6 w-full border rounded-2xl border-[#D5D5D5]">
              <h2 className="text-center text-[#C44558] capitalize font-primary text-[20px] font-medium">
                Scoped memory and history
              </h2>
            </div>

            <div className="p-6 w-full border rounded-2xl border-[#D5D5D5]">
              <h2 className="text-center text-[#C44558] capitalize font-primary text-[20px] font-medium">
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

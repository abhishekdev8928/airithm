import React from "react";
import { ARCHITECTURE_LAYER_CONFIG } from "../../config/coreTestConfig";


export default function ArchitectureLayers() {
  const { layer1, layer2, layer3 } = ARCHITECTURE_LAYER_CONFIG;

  return (
    <section className="w-full pt-[100px] rounded-b-[100px] pb-[200px] px-6 bg-white">
      <div className="max-w-7xl mx-auto  ">


        <div className="grid grid-cols-1  sm:grid-cols-5 gap-6">
          {layer1.items.map((item) => (
            <div
              key={item.id}
              className="relative border border-[#F2A3B0] rounded-2xl p-6 text-center flex flex-col items-center gap-4"
            >
              <img
                src={item.iconSrc}
                alt={item.label}
                className="w-10 h-10"
              />




              <p className="text-[16px] capitalize font- leading-[1.4] tracking-[0.04em] font-medium text-[#1E1E1E] ">
                {item.label}
              </p>


            </div>
          ))}
        </div>
        <img className="w-[85%] hidden md:block mx-auto" src="/svg/group-arrow.svg" alt="" />
          <img className="mx-auto block md:hidden" src="/svg/arrow.svg" alt="" />


        <div>



          <div className="relative border border-[#F2A3B0] rounded-3xl space-y-4 px-10 py-12 text-center">
          <h2 className=" text-[24px] md:text-[40px] text-[#1e1e1e] font-primary font-medium  ">
            {layer2.title}
          </h2>

          <div className="flex flex-wrap justify-center gap-2 md:gap-10">
            {layer2.points?.labels?.map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-[#C44558]"
              >
                <img
                  src={layer2.iconSrc}
                  alt="tick"
                  className="w-5 h-5"
                />
               <span className="font-secondary shrink-0 font-normal text-[16px] sm:text-[20px] leading-none tracking-[0.04em]">{point}</span>
              </div>
            ))}
          </div>
        </div>

        <img className="mx-auto" src="/svg/arrow.svg" alt="" />
        </div>



        <div className="border border-[#F2A3B0] rounded-3xl px-10 space-y-4 py-12 text-center">

          <h2 className=" text-[24px] md:text-[40px] text-[#1e1e1e] font-primary font-medium ">
            {layer3.title}
          </h2>

          <div className="flex flex-wrap max-w-[800px] mx-auto justify-center gap-4 md:gap-10">
            {layer3.points?.labels?.map((point, index) => (
              <div
                key={index}
                className="flex items-center  gap-2 text-[#C44558]"
              >
                <img
                  src={layer3?.iconSrc}
                  alt="tick"
                  className="w-5 h-5"
                />


                <span className="font-secondary shrink-0 font-normal text-[16px] sm:text-[20px] leading-none tracking-[0.04em]">{point}</span>
              </div>
            ))}
          </div>
        </div>




      </div>
    </section>
  );
}

import {TEST_ANALYTICS_STEPS_CONFIG} from "@/config/testAnalyticsInsightsConfig.js"
import React from "react";
const HowItWorks = () => {
  return (
    <section>
      <div className="w-full relative rounded-[48px] bg-gradient-primary border border-blue-500/40 px-10 py-16">
        
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-white mb-16">
          How It Works
        </h2>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          {TEST_ANALYTICS_STEPS_CONFIG.map((item, index) => (
            <React.Fragment key={item.step}>
              {/* Step */}
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className="relative flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FFA68D] to-[#FD3A84] flex items-center justify-center text-white font-semibold text-2xl">
                    {item.step}
                  </div>

                  <h3 className="mt-6 mb-2 font-semibold text-[20px] leading-[1.2] text-white capitalize">
                    {item.title}
                  </h3>
                  <p className="text-[18px] leading-[1.4] text-[#D0D0D0] capitalize">
                    {item.description}
                  </p>

                  {/* {index !== STEPS.length - 1 && (
        <div className="absolute top-[40%] right-[-300px] left-0">
          <img className="w-[200px]" src="/svg/connect.svg" alt="" />
        </div>
      )} */}
                </div>
              </div>

              {/* Connector */}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
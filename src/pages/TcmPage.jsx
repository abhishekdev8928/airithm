import React from "react";
import { statsCardConfig, Query_TIME_CONFIG } from "../config/tcmConfig";
import FooterSection from "@/components/automation/FooterSection";
import Navbar from "@/components/Navbar.jsx";
import SectionHeading from "../components/common/SectionHeading";
import UspServices from "../components/services/UspServices";

export const StatsCard = ({ icon, title, children }) => {
  return (
    <div className="w-[390px]  border rounded-2xl p-5 border-[#C6C6C6]">
      {icon}

      <h4 className="font-primary py-[40px] text-[#C44558] capitalize font-medium text-[20px] leading-none tracking-[0.04em] sm:text-[18px] xs:text-[16px]">
        {title}
      </h4>

      <div className="stats space-y-4">{children}</div>
    </div>
  );
};

export const StatRow = ({ id, label, value, suffix }) => {
  return (
    <div className="w-full flex justify-between items-center border p-4 border-[#C6C6C6] rounded-lg">
      <span className="text-[#626161] font-primary font-normal text-[16px] leading-none tracking-[0.04em]">
        {label}
      </span>

      <span className="font-secondary text-[#C44558] font-medium text-[16px] leading-[1.4] tracking-[0.04em]">
        {value}
        {suffix ?? ""}
      </span>
    </div>
  );
};

const RelevanceScoreCard = ({ score = 87 }) => {
  return (
    <div className="w-full p-4 ">
      <p className="text-gray-500 text-sm text-center">Relevance Score</p>
      <p className="text-2xl leading-[1.4] font-medium font-secondary text-[#C44558]  text-center mt-2">
        {score}%
      </p>
      <div className="w-full h-3 bg-gray-200 rounded-full mt-6 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"
          style={{ width: `${score}%` }}
        ></div>
      </div>
    </div>
  );
};

const TcmPage = () => {
  return (
    <>
      <Navbar
        wrapperClassName="relative "
        disableScrollHide={true}
        linkClassName="text-black"
        iconClassName="invert-0"
      />

      <section>
        <div className="max-w-7xl py-[106px] mx-auto">
          {/* Hero */}
          <div className="tcm-hero-content space-y-4">


            <SectionHeading 
            title={"TCM.Module.DualTierMemory"}
            titleClassName="text-[32px] sm:text-[64px] break-all"
            subtitle={
                
                  'Advanced memory architecture featuring dual-tier storage with intelligent promotion and query-time <br className="hidden md:block " /> composition for enhanced contextual understanding and retrieval performance.'
                
              }

              subtitleClassName="text-[#626161]"



                          />
            


          </div>

          {/* Cards */}
          <div className="tcm-cards-wrapper pt-16 flex justify-center  flex-wrap lg:flex-nowrap items-start gap-6 sm:gap-4 xs:gap-2">
            {statsCardConfig.map((card, index) => (
              <StatsCard
                key={index}
                title={card.title}
                icon={
                  <img
                    src={card.iconPath}
                    alt={card.title}
                    className="w-8 h-8"
                  />
                }
                className="flex-1 min-w-[280px] sm:min-w-[200px]"
              >
                {card.relevanceScore !== undefined && (
                  <div className="flex justify-center">
                    <RelevanceScoreCard score={card.relevanceScore} />
                  </div>
                )}

                {card.items?.map((item) => (
                  <StatRow
                    key={item.id}
                    label={item.label}
                    value={item.value}
                    suffix={item.suffix}
                  />
                ))}
              </StatsCard>
            ))}
          </div>
        </div>
      </section>
      <UspServices data={Query_TIME_CONFIG}/>

      <section>
        <div className="max-w-7xl mx-auto py-[100px]">
          <h2 className="text-center text-[#00273A] capitalize tracking-[0.02em] leading-none font-primary font-medium text-[48px]">
            Temporal Context Memory (TCM)
          </h2>

          <div className="max-w-4xl  mx-auto">
            <div className="w-full py-7  ">
              <img className="w-full rounded-3xl" src="/home/tcm.png" alt="" />
            </div>

            <p className="text-center tracking-[0.04em] leading-[1.4] text-[20px] font-secondary font-medium text-[#1e1e1e]">
              Temporal Context Memory (TCM) is a dual-tiered AI memory system
              integrating short-term/episodic cache and long-term semantic
              storage. A promotion engine evaluates recency, frequency, and
              user-pinned indicators to transfer high-value items from fast
              cache to persistent vector memory. During query resolution, the
              composer merges both tiers into a policy-scoped contextual view.
              The system continuously demotes stale data, ensuring efficient,
              accurate, and evolving memory performance.
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
};

export default TcmPage;

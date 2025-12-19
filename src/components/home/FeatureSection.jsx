import React from "react";
import { HOME_FEATURED_CONFIG } from "@/config/homeConfig";
import FeatureCard from "@/components/card/FeaturedCard.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
const FeatureSection = () => {
  const { title, subtitle, cards } = HOME_FEATURED_CONFIG;

  return (
    <section className="core-features-section pb-[120px]   px-6 sm:px-0  section-wrapper">


      <SectionHeading
        title={title}
        titleClassName="text-[#00273A]"
        subtitleClassName=" text-[#626161]"
        wrapperClassName={"max-w-[408px] sm:max-w-full   mx-auto"} subtitle={subtitle}
      />

    

      {/* Feature Cards */}
      <div className="flex flex-wrap  gap-6 pt-10 justify-center max-w-[1200px] mx-auto">
        {cards.map((card) => (
          <FeatureCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;

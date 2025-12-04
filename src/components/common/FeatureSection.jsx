import React from "react";
import FeatureCard from "../card/FeaturedCard.jsx";
import SectionHeading from "@/components/common/SectionHeading";
const FeatureSection = ({ config, className, featureCardClassName }) => {
  const { title, subtitle, cards } = config;

  return (
    <section
      className={`core-features-section ${className} pb-10 section-wrapper`}
    >
     <div className="max-w-7xl mx-auto">
       <SectionHeading
        title={title}
        titleClassName="section-title"
        subtitleClassName="section-subtitle text-[#626161]"
        subtitle={subtitle}
      />

      {/* Feature Cards */}
      <div className="flex flex-wrap gap-6 py-10 justify-center  mx-auto">
        {cards.map((card) => (
          <FeatureCard cardClassName={featureCardClassName} key={card.id} {...card} />
        ))}
      </div>
     </div>
    </section>
  );
};

export default FeatureSection;

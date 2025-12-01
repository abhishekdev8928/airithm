import React from "react";
import coreFeaturesConfig from "../../config/constant";
import FeatureCard from "../CoreFeatureCard";

const CoreFeatureSection = () => {
  const { title, description, cards } = coreFeaturesConfig;

  return (
    <section className="core-features-section py-16">
      {/* Section Header */}
      <div className="text-center flex flex-col gap-2">
        <h2 className="title-primary">{title}</h2>
        <p className="font-inter text-[--color-gray] font-medium text-[18px] leading-[140%] tracking-[2%] text-center mx-auto capitalize max-w-[740px]">
          {description}
        </p>
      </div>

      {/* Feature Cards */}
      <div className="flex flex-wrap gap-6 pt-12 justify-center max-w-[1200px] mx-auto">
        {cards.map((card) => (
          <FeatureCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default CoreFeatureSection;

import React from "react";
import { platformCatalogConfig } from "../config/constant.js";
import PlatformCard from "./PlatformCard";

const PlatformSection = () => {
  const { section, platforms } = platformShowcaseConfig;

  return (
    <section className="platform-section pb-[140px] bg-white relative z-10 rounded-[100px]">
      {/* Section Header */}
      <div className="platform-intro py-[94px] text-center flex flex-col gap-2">
        <h2 className="title-primary">{section.title}</h2>
        <p className="font-inter text-[--color-gray] font-medium text-[18px] leading-[140%] tracking-[2%] text-center mx-auto capitalize max-w-[740px]">
          {section.subtitle}
        </p>
      </div>

      {/* Platforms List */}
      <div className="flex flex-col gap-20">
        {platforms.map((platform) => (
          <PlatformCard key={platform.id} {...platform} />
        ))}
      </div>
    </section>
  );
};

export default PlatformSection;

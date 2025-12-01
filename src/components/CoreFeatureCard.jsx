import React from "react";

import * as LucideIcons from "lucide-react"

const CoreFeatureCard = ({ id, icon, iconColor, title, description }) => {
  const IconComponent = LucideIcons[icon];
  return (
    <div
      className="core-feature-card transition-shadow duration-300 hover:shadow-[0px_0px_40px_2px_#C4455840]
    flex-shrink-0  w-[340px] h-[258px] top-[1122px] left-[185px] rounded-[24px] border border-[#D9D9D9] p-5 gap-[48px] flex flex-col rotate-[0deg] opacity-100"
    >
      <IconComponent size={50} color="#C44558" />

      <div className="feature-card-content">
        <h2 className="font-dm-sans font-semibold text-[24px] leading-[120%] tracking-[2%] capitalize text-[#1E1E1E]">
          {title}
        </h2>
        <p className="font-inter text-[#626161] pt-[16px] font-medium text-[18px] leading-[140%] tracking-[2%] capitalize">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CoreFeatureCard;

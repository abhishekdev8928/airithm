import React from "react";
import * as LucideIcons from "lucide-react";

const FeatureCard = ({ id, icon, iconColor, title, description  ,cardClassName}) => {
  const IconComponent = LucideIcons[icon];

  return (
    <div
  className={`core-feature-card transition-shadow duration-300 
    hover:shadow-[0px_0px_40px_2px_#C4455840] shrink-0 
    ${cardClassName ? cardClassName : "w-[90%] md:w-[340px]"} 
     h-[258px] rounded-3xl 
    border border-[#D9D9D9] p-5 gap-12 flex flex-col`}
>

      {/* FIX: Prevent crash if icon name is wrong */}
      {IconComponent ? (
        <IconComponent size={32} color={iconColor || "#C44558"} />
      ) : (
        <div className="w-10 h-10 rounded-full bg-gray-300" />
      )}

      <div className="feature-card-content">
        <h2 className="text-dmsans-24 leading-[1.2] font-medium capitalize text-[#1E1E1E]">
          {title}
        </h2>
        <p className="text-[#626161] pt-4 leading-[1.4] text-inter-18 capitalize">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;

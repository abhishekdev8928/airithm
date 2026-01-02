import React from "react";
import * as LucideIcons from "lucide-react";

const InsightCard = ({
  iconName,
  iconSize = 40,
  value,
  label,
  description,
  cardClassName = "",
  iconWrapperClass = "",
}) => {
  const Icon = LucideIcons[iconName];

  return (
    <div className={`rounded-xl p-6 border-light-sm ${cardClassName}`}>
      {/* Icon */}
      <div className={`mb-6 ${iconWrapperClass}`}>
        {Icon && <Icon size={iconSize} strokeWidth="1.5" />}
      </div>

      {/* Content */}
      <div className="space-y-[24px]">
        {/* Number + Label */}
        <div className="space-y-2">
          <div className="font-primary font-medium text-[64px] leading-[100%] tracking-[2%] capitalize">
            {value}
          </div>
          <div className="font-inter font-medium text-[16px] leading-[140%] tracking-[4%] capitalize">
            {label}
          </div>
        </div>

        {/* Description */}
        <div className="font-inter text-[#999999] font-medium text-[16px] leading-[140%] tracking-[4%]">
          {description}
        </div>
      </div>
    </div>
  );
};

export default InsightCard;

import { Bot } from "lucide-react";
import React from "react";

import * as LuicideIcon from "lucide-react";

const CapabilitiyCard = ({ title, description, icon }) => {
  const IconComponent = LuicideIcon[icon];

  return (
    <div className="capability-card w-full sm:w-[48%] md:w-[300px] flex flex-col items-center gap-6">
      {/* Icon */}
      <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-sm flex justify-center items-center bg-[#C44558]">
        <IconComponent className="text-white w-[22px] h-[22px]" />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h2 className="font-primary text-2xl sm:text-3xl font-medium leading-[1.2] text-center text-white tracking-[0.02em]">
          {title}
        </h2>
        <p className="font-secondary text-center text-lg sm:text-xl font-medium leading-[1.2] text-[#C6C6C6] tracking-[0.02em]">
          {description}
        </p>
      </div>
    </div>
  );
};


export default CapabilitiyCard;

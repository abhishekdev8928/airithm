import { Bot } from "lucide-react";
import React from "react";

import * as LucideIcon from "lucide-react";

const CapabilityCard = ({ title, description, icon }) => {
 
  const IconComponent = LucideIcon[icon];

  return (
    <div className="capability-card w-full sm:w-[48%] md:w-[300px] flex flex-col items-center gap-8">
 
  <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] flex justify-center items-center rounded-sm bg-[#C44558] ">
    <IconComponent className="w-[22px] h-[22px] text-white" />
  </div>

  
  <div className="flex flex-col items-center gap-2">
    <h2 className="text-2xl sm:text-3xl font-medium leading-[1.2] text-center text-white tracking-[0.02em]">
      {title}
    </h2>
    <p className="text-lg sm:text-xl font-medium leading-[1.4] text-center text-[#C6C6C6] tracking-[0.02em]">
      {description}
    </p>
  </div>
</div>

  );
};

export default CapabilityCard;


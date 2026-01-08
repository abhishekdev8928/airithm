import React from "react";
import * as LucideIcons from "lucide-react";

const Button = ({ 
  className = "", 
  btnText, 
  icon, 
  iconSize, 
  useCommonSvg = false,
  hoverIcon = true   // ✅ NEW PROP (default ON)
}) => {
  const IconComponent = LucideIcons[icon];

  return (
    <a href="#!" 
      className={`group flex gap-2.5 whitespace-nowrap capitalize items-center justify-center ${className}`}
    >
      {btnText}

      {useCommonSvg && (
        <img 
          src="/svg/gradient-icon.svg" 
          alt="gradient-icon"
          className={`shrink-0 transition-transform duration-300 
            ${hoverIcon ? "group-hover:rotate-45" : ""}
          `}
        />
      )}

      {!useCommonSvg && icon && IconComponent && (
        <IconComponent
          style={{
            width: iconSize || "20px",
            height: iconSize || "20px",
          }}
          className={`shrink-0 transition-transform duration-300 
            ${hoverIcon ? "group-hover:rotate-45" : ""}
          `}
        />
      )}
    </a>
  );
};

export default Button;

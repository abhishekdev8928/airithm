import React from "react";
import * as LucideIcons from "lucide-react";

const Button = ({ 
  className = "", 
  btnText, 
  icon, 
  iconSize, 
  useCommonSvg = false 
}) => {
  const IconComponent = LucideIcons[icon];

  return (
    <button 
      className={`inline-flex gap-2.5  capitalize items-center justify-center ${className}`}
    >
      {btnText}

      {useCommonSvg && (
        <img src="/svg/gradient-icon.svg" alt="gradient-icon" />
      )}

      {!useCommonSvg && icon && IconComponent && (
        <IconComponent
          style={{
            width: iconSize || "20px",
            height: iconSize || "20px",
          }}
          className="hover:rotate-45 transition"
        />
      )}
    </button>
  );
};

export default Button;

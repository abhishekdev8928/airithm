// Button.jsx
import React from "react";
import * as LucideIcons from "lucide-react";

const Button = ({ className = "", btnText, icon, iconSize }) => {
  const IconComponent = LucideIcons[icon];
  return (
    <button
      className={`inline-flex gap-2.5 items-center justify-center ${className}`}
    >
      {btnText}
      {icon && (
        <IconComponent
          className={`size-${iconSize || "20px"} hover:rotate-45 transition`}
        />
      )}
    </button>
  );
};

export default Button;

import React from "react";

const SectionHeading = ({
  title,
  subtitle,
  wrapperClassName,
  titleClassName,
  subtitleClassName,
}) => {
  return (
    <div className={`text-center space-y-4 sm:space-y-2 ${wrapperClassName || ""}`}>
      
      {title && (
        <h2
          className={`
            font-primary font-medium
            text-[32px] sm:text-[40px] 
            leading-[1.2] tracking-[2%] 
            capitalize
            ${titleClassName || ""}
          `}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}

      {subtitle && (
        <p
          className={`
            font-secondary font-medium 
            text-[16px] sm:text-[18px] 
            leading-[1.4] tracking-[2%] 
            capitalize
            mx-auto
            ${subtitleClassName || ""}
          `}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      )}
    </div>
  );
};

export default SectionHeading;

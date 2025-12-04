import React from "react";

const SectionHeading = ({
  title,
  subtitle,
  titleClassName,
  subtitleClassName,
  wrapperClassName,
}) => {
  return (
    <div className={` text-center space-y-2`}>
{title && (
        <h2
          className={titleClassName}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}

      {subtitle && (
        <p
          className={subtitleClassName}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      )}
    </div>
  );
};

export default SectionHeading;

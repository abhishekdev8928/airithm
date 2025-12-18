import React from "react";
import * as LucideIcons from "lucide-react";

const FeatureCard = ({
  id,
  icon,
  iconColor,
  textColor,
  discColor,
  title,
  description,
  cardClassName,
  points,
  gradent
}) => {
  const IconComponent = LucideIcons[icon];

  return (
    <div
      className={`core-feature-card transition-shadow duration-300 
      hover:shadow-[0px_0px_40px_2px_#C4455840] shrink-0 
      ${cardClassName ? cardClassName : "w-full sm:w-[340px] min-h-[258px]"} 
      rounded-3xl border border-[#9d9d9d] p-5 gap-12 flex flex-col`}
    >
      {/* Card Icon */}
      {IconComponent ? (
        <IconComponent size={32} color={iconColor || "#C44558"} />
      ) : (
        <div className="w-10 h-10 rounded-full bg-gray-300" />
      )}

      {/* Content */}
      <div className="feature-card-content">
        <h2
          className={`font-primary font-medium text-[24px] leading-[1.2] capitalize ${gradent=== true ? ` bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)] bg-clip-text text-transparent` : "text-[#fff]"} `}
          style={{ color: textColor || "#1E1E1E" }}
        >
          {title}
        </h2>

        <p
          className="font-secondary text-[18px] leading-[1.4] pt-4 capitalize"
          style={{ color: discColor || "#626161" }}
        >
          {description}
        </p>
      </div>

      {/* Points */}
      {points?.labels && (
        <ul className="points space-y-2">
          {points.labels.map((item, index) => {
            const isGradient =
              points.textGradientColor?.includes("gradient");

            const PointIcon =
              points.icon?.name &&
              LucideIcons[points.icon.name];

            return (
              <li key={index} className="flex items-start gap-2">
                {/* Left indicator */}
                {PointIcon ? (
                  <PointIcon
                    size={16}
                    className="mt-1 shrink-0"
                    color={points.icon.color || "#C44558"}
                  />
                ) : (
                  <span
                    className="mt-2 h-2 w-2 rounded-full shrink-0"
                    style={{ background: points.discGradientColor }}
                  />
                )}

                {/* Text */}
                <span
                  className={isGradient ? "bg-clip-text text-transparent" : ""}
                  style={
                    isGradient
                      ? { backgroundImage: points.textGradientColor }
                      : { color: points.textGradientColor }
                  }
                >
                  {item}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default FeatureCard;

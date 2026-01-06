import React from "react";
import * as LucideIcons from "lucide-react";
import {CircleArrowOutUpRight} from "lucide-react"

const FeatureCard = ({
  id,
  icon,
  iconColor,
  bgColor,
  hasBg = false,
  textColor,
  discColor,
  title,
  description,
  cardClassName,
  points,
  linkicon,
  showLink = false,
  href,
  linkText = "Learn More",
}) => {
  const IconComponent = LucideIcons[icon];
  const ArrowIconComponent = LucideIcons["ArrowRight"];

  // Determine final icon color
  const finalIconColor = hasBg ? "#FFFFFF" : iconColor || "#C44558";

  return (
    <div
      className={`core-feature-card transition-shadow justify-between duration-300 
        hover:shadow-[0px_0px_40px_2px_#C4455840] shrink-0 
        ${cardClassName ? cardClassName : "w-full sm:w-[340px] min-h-[258px]"} 
        rounded-3xl border border-[#9d9d9d] p-5 gap-7 flex flex-col`}
    >
      {/* Card Icon */}
      {IconComponent ? (
        <div
          className={`rounded-2xl ${
            hasBg
              ? "flex items-center justify-center w-[66px] h-[66px]"
              : "w-auto h-auto"
          }`}
          style={{
            background: hasBg ? bgColor || "#C44558" : "transparent",
          }}
        >
          <IconComponent size={32} color={finalIconColor} />
        </div>
      ) : (
        <div className="w-10 h-10 rounded-full bg-gray-300">
          {/* fallback empty */}
        </div>
      )}

      {/* Content */}
      <div className="feature-card-content">
        <h2
          className="font-primary font-medium text-[24px] leading-[1.2] capitalize"
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

      {showLink && href && (
        <a
          href={href}
          className="text-[#C44558] flex gap-2 items-center leading-[1.4] capitalize tracking-[0.02em] font-semibold text-[18px] font-secondary"
        >
          {linkText}
          { linkicon !== "CircleArrowOutUpRight"?
<ArrowIconComponent size={22} strokeWidth={2} /> :
<CircleArrowOutUpRight size={20}/>

          }
        </a>
      )}

      {/* Points */}
      {points?.labels && (
        <ul className="points space-y-2">
          {points.labels.map((item, index) => {
            const isGradient = points.textGradientColor?.includes("gradient");

            const PointIcon =
              points.icon?.name && LucideIcons[points.icon.name];

            return (
              <li key={index} className="flex items-start gap-2">
              
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

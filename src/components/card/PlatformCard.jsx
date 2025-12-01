import React from "react";
import { BadgeCheck } from "lucide-react";
import Button from "../Button"; // make sure path is correct

const PlatformCard = ({
  badge,
  badgeColor,
  title,
  description,
  image,
  ctaText,
  ctaLink,
  ctaIcon,
  imgAlignment = "left",
}) => {
  const isRightAligned = imgAlignment !== "left";

  return (
    <div
      className={`max-w-[1190px] flex gap-14 justify-center mx-auto pb-20 ${
        isRightAligned ? "flex-row-reverse" : ""
      }`}
    >
      {/* Image Block */}
      <div className="w-[580px] shadow-[0px_15px_33px_rgba(0,49,73,0.29)] relative">
        <div
          className={`w-10 h-10 flex justify-center items-center rounded-full bg-white shadow absolute -translate-y-1/2 ${
            isRightAligned ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
          }`}
        >
          {/* Placeholder SVG */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#C44558" />
          </svg>
        </div>
        <img className="w-full" src={image} alt={title} />
      </div>

      {/* Content Block */}
      <div className="w-[584px] flex flex-col justify-between items-start">
        <div className="platform-content-top flex flex-col gap-6">
          {/* Badge */}
          <div className="border-gradient w-fit">
            <div className="platform-badge border-gradient-inner w-fit rounded-full px-3 py-2 flex gap-2 items-center">
              <BadgeCheck size={18} color={badgeColor} />
              <span
                className="font-inter font-medium text-[14px]"
                style={{ color: badgeColor }}
              >
                {badge}
              </span>
            </div>
          </div>

          <h2 className="font-dm-sans text-[36px] text-[#1E1E1E] leading-[1.2] tracking-[0.02em]">
            {title}
          </h2>
          <p className="font-inter capitalize font-medium text-[#626161] text-[18px] leading-[1.4] tracking-[0.02em]">
            {description}
          </p>
        </div>

        {/* Dynamic Button */}
        <Button
          className="font-dm-sans rounded-lg capitalize px-5 py-4 text-white bg-primary-gradient font-bold text-[16px]"
          btnText={ctaText}
          icon={ctaIcon}
          iconSize="20px"
          onClick={() => window.location.href = ctaLink} // optional navigation
        />
      </div>
    </div>
  );
};

export default PlatformCard;

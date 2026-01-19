import * as LucideIcons from "lucide-react";

const StatsCard = ({
  iconName,
  iconSize = 40,
  value, // <-- display value
  percentage, // <-- numeric for progress etc
  title,
  description,
  wrapperClass = "",
}) => {
  const Icon = LucideIcons[iconName];

  return (
    <div
      className={`
        md:w-[280px] w-[100%]
        rounded-[20px]
        border border-gray-200
        bg-white
        px-4 py-6
        text-center
        space-y-[40px]
        ${wrapperClass}
      `}
    >
      {/* Icon */}
      <div className="mx-auto flex w-[64px] h-[64px] items-center justify-center rounded-2xl bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]">
        {Icon && (
          <Icon
            style={{ width: iconSize, height: iconSize , strokeWidth:1 }}
            className="text-white"
            
          />
        )}
      </div>

      {/* Content */}
      <div className="space-y-[14px]">
        <div className="font-primary font-medium md:text-[40px] text-[32px] leading-[100%] tracking-[0.02em] text-center
 capitalize">
          {value} {/* <-- fixed to show value */}
        </div>

        <div className="font-dm-sans font-semibold text-[24px] leading-[120%] tracking-[0.02em] text-[#1E1E1E] text-center capitalize">
          {title}
        </div>

        <p className="font-inter font-medium text-[14px] leading-[140%] tracking-[0.02em] text-gray-500 text-center capitalize">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;

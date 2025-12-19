import { Check as LucideCheck } from "lucide-react";

const PricingCard = ({
  title,
  subtitle,
  features = [],
  cta,
  size,
  badge,
  highlight = false,
  svgImgPath,
}) => {
  return (
    <div
      className={`
        ${size}
        rounded-2xl py-6 px-5 overflow-hidden
        flex flex-col justify-between relative
        transition-transform duration-300
        ${highlight ? "min-h-[450px] z-20" : "min-h-[400px]"}
      `}
      style={{
        background: highlight
          ? "linear-gradient(90deg, rgba(255,166,141,0.1) 0.03%, rgba(253,58,132,0.1) 100%)"
          : "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(153,153,153,0.1) 100%)",
      }}
    >
      {badge && (
        <span
          className=" 
            absolute top-0 right-0 
            px-8 py-2
            text-xs font-primary font-medium text-black
            bg-[linear-gradient(90deg,_#FFA68D_0.03%,_#FD3A84_100%)]
            rounded-l-sm overflow-hidden leading-[1.4] tarcking-[0.04em]
          "
        >
          {badge}
        </span>
      )}

      {/* Content */}
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="font-primary font-medium text-[30px] leading-none tracking-[0.02em] capitalize">
            {title}
          </h3>

          <p className="font-secondary text-[#C6C6C6] font-medium text-[16px] leading-[1.4] tracking-[0.04em]">
            {subtitle}
          </p>
        </div>

        {/* Features */}
        <div className="space-y-2">
          {features.map((item, index) => (
            <div key={index} className="flex gap-2 items-center">
              <FeatureCheckIcon svgImgPath={svgImgPath} />
              <p
                className="font-secondary font-medium text-[16px] leading-[1.4] tracking-[0.04em]"
                style={
                  highlight
                    ? {
                        background:
                          "linear-gradient(90deg, #FFA68D 0.03%, #FD3A84 100%)",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                      }
                    : { color: "#C6C6C6" }
                }
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <button
        className={`
          w-full rounded-lg py-4 cursor-pointer
          font-primary font-medium capitalize text-white
          text-[20px] leading-[1.2]
          shadow-[0px_2px_4px_0px_#00000029,0px_8px_8px_0px_#00000024,0px_17px_10px_0px_#00000014,0px_30px_12px_0px_#00000005,0px_47px_13px_0px_#00000000]
          ${cta?.bgClass}
        `}
      >
        {cta?.text}
      </button>
    </div>
  );
};

const FeatureCheckIcon = ({ svgImgPath, size = 24 }) => {
  if (svgImgPath) {
    return (
      <img
        src={svgImgPath}
        alt="check"
        width={size}
        height={size}
        className="shrink-0"
      />
    );
  }

  return <LucideCheck size={size} className="text-white shrink-0" />;
};

export default PricingCard;

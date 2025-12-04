
import Button from "@/components/ui/Button.jsx";

const CtaSection = ({
  heading,
  paragraph,
  backgroundImage,
  buttons = [],
  wrapperClassName,
}) => {
  return (
    <section>
      <div
        className={`w-full ${ wrapperClassName && wrapperClassName} bg-img-overlay overflow-hidden rounded-t-[100px]  relative z-10`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="py-[180px] text-center flex flex-col items-center relative z-12 text-white">
          {heading && (
            <h2 className="text-dmsans-64  mb-4  leading-none font-semibold">
              {heading}
            </h2>
          )}

          {paragraph && (
            <p className="text-inter-24 w-1/2 text-center mb-8  leading-[1.4] font-medium">
              {paragraph}
            </p>
          )}

          {buttons.length > 0 && (
            <div className="btn-group flex gap-6">
              {buttons.map((btn, index) => (
                <Button
                  key={index}
                  btnText={btn.text}
                  className={btn.className}
                  icon={btn.icon}
                  iconSize={btn.iconSize}
                  useCommonSvg={btn.useCommonSvg}
                  onClick={() => {
                    if (btn.href) window.location.href = btn.href;
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

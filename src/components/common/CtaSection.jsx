import Button from "@/components/ui/Button.jsx";
import React from "react";
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
        className={`w-full ${
          wrapperClassName && wrapperClassName
        } bg-img-overlay overflow-hidden sm:rounded-t-[100px] rounded-t-[50px] relative z-10`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="py-[180px] px-4 lg:px-0 text-center flex flex-col items-center relative z-12 text-white">
          {heading && (
            <h2 className="font-primary  tracking-[0.02em] text-[48px] md:text-[64px] mb-4 leading-none font-semibold">
              {heading}
            </h2>
          )}

          {paragraph && (
            <p className="font-secondary tracking-[0.02em] text-[16px] md:text-[24px] w-full md:w-[80%]  lg:w-1/2 text-center mb-8 leading-[1.4] font-medium">
              {paragraph}
            </p>
          )}

          {buttons.length > 0 && (
            <div className="flex max-w-[316px] sm:max-w-full w-full flex-col-reverse sm:flex-row justify-center items-stretch gap-6 btn-group">
              {buttons.map((btn, index) => {
                const Wrapper = btn.wrapperClass ? "div" : React.Fragment;
                return (
                  <Wrapper key={index} className={btn.wrapperClass}>
                    <Button
                      btnText={btn.text}
                      className={btn.className}
                      icon={btn.icon}
                      iconSize={btn.iconSize}
                      useCommonSvg={btn.useCommonSvg}
                      onClick={() => {
                        if (btn.href) window.location.href = btn.href;
                      }}
                    />
                  </Wrapper>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

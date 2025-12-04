import React from "react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

const HeroSection = ({
  heading,
  paragraph,
  buttons = [],
  backgroundGradient,
  imageSrc,
  rounded = "50px",
  badges,
}) => {
  return (
    <section>
      <div
        className="w-full h-auto lg:h-[800px] relative overflow-hidden"
        style={{
          background: backgroundGradient,
          borderRadius: rounded,
        }}
      >
        {/* CONTENT */}
        <div
          className="flex flex-col pt-[100px] mx-auto  items-center  w-full px-4"

        >
          {/* Heading with <br/> support */}
          {heading && (
            <h2
              className="text-dmsans-64 mb-4 font-semibold leading-none text-white text-center"
              dangerouslySetInnerHTML={{ __html: heading }}
            ></h2>
          )}

          {/* Paragraph with <br/> support */}
          {paragraph && (
            <p
              className="text-inter-16 text-white mb-8 text-center leading-[1.4]"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            ></p>
          )}

          {/* Buttons */}
          {buttons.length > 0 && (
            <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 ">
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
                      onClick={() =>
                        btn.href && (window.location.href = btn.href)
                      }
                    />
                  </Wrapper>
                );
              })}
            </div>
          )}
        </div>

        {/* IMAGE */}
        {imageSrc && (
          <div className="absolute w-full bottom-[-150px] left-1/2 -translate-x-1/2 max-w-[815px]">
            <div>
              {badges.map((item, i) => (
                <Badge key={i} text={item.text} className={item.className} />
              ))}


            </div>
            <img className="w-full mx-auto" src={imageSrc} alt="" />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;

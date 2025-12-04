import React from "react";
import Button from "../ui/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroHeader() {
  return (
    <header className="w-full text-white rounded-b-[100px] overflow-hidden relative">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .hero-swiper .swiper-pagination {
            bottom: 30px !important;
          }
          
        `,
        }}
      />

      <Swiper
        loop={true}
        speed={800} // 👈 smooth slide speed
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="hero-swiper w-full h-[800px]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/home/carousel/carousel-two.jpg")',
            }}
          >
            <div className="absolute inset-0 bg-black/5" />

            <div className="relative text-center pt-[220px] px-4 z-10">
              <h1 className="text-dmsans-64 leading-none font-medium">
                Enterprise Intelligence, Reimagined
              </h1>

              <p className="text-inter-18 leading-[1.4] font-medium max-w-[750px] mx-auto pt-2.5">
                AIRITHM Core Powers Next-Generation AI Platforms With Advanced
                Agentic AI, GenAI, And ML Capabilities Designed For Enterprise
                Scale
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 mt-[30px]">
                <div className="bg-[linear-gradient(86.66deg,#C44558_10.85%,#FF7F7F_84.93%)] overflow-hidden rounded-lg w-fit p-[2px]">
                  <Button
                    btnText="Join Partner Program"
                    className="py-5 custom-btn-text text-[#C44558] px-10 bg-white "
                    iconSize="20"
                    useCommonSvg="true"
                  />
                </div>

                <Button
                  btnText="Explore Products"
                  className="py-5  bg-primary-gradient custom-btn-text  px-10 text-white "
                  iconSize="20"
                  icon="CircleArrowOutUpRight"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}

        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/home/carousel/carousel-two.jpg")',
            }}
          >
            <div className="absolute inset-0 bg-black/5" />

            <div className="relative text-center pt-[220px] px-4 z-10">
              <h1 className="text-dmsans-64 leading-none font-medium">
                Enterprise Intelligence, Reimagined
              </h1>

              <p className="text-inter-18 leading-[1.4] font-medium max-w-[750px] mx-auto pt-2.5">
                AIRITHM Core Powers Next-Generation AI Platforms With Advanced
                Agentic AI, GenAI, And ML Capabilities Designed For Enterprise
                Scale
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 mt-[30px]">
                <div className="bg-[linear-gradient(86.66deg,#C44558_10.85%,#FF7F7F_84.93%)] overflow-hidden rounded-lg w-fit p-[2px]">
                  <Button
                    btnText="Join Partner Program"
                    className="py-5 custom-btn-text text-[#C44558] px-10 bg-white "
                    iconSize="20"
                    useCommonSvg="true"
                  />
                </div>

                <Button
                  btnText="Explore Products"
                  className="py-5  bg-primary-gradient custom-btn-text  px-10 text-white "
                  iconSize="20"
                  icon="CircleArrowOutUpRight"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </header>
  );
}

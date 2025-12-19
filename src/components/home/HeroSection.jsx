
import Button from "../ui/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroHeader() {
  return (
    <header className="w-full text-white min-h-[904px]  rounded-b-[50px]  sm:rounded-b-[100px] overflow-hidden relative">
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
        className="hero-swiper w-full h-[904px] "
      >
        {/* Slide 2 */}

        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/home/carousel/carousel-two.jpg")',
            }}
          >
            <div className="absolute inset-0 bg-black/5" />

            <div className="relative text-center px-4 lg:px-0  pt-[220px]  z-10">
              <h1 class="font-primary text-[40px] mx-auto  sm:w-fit leading-none sm:text-[64px] tracking-[0.02em]">
                Enterprise Intelligence, Reimagined
              </h1>

              <p class="font-secondary font-medium text-[18px] leading-[1.4] tracking-[2%] text-center capitalize  sm:max-w-[750px] mx-auto pt-2.5 text-[#C6C6C6]">
                AIRITHM Core Powers Next-Generation AI Platforms With Advanced
                Agentic AI, GenAI, And ML Capabilities Designed For Enterprise
                Scale
              </p>

              <div className="flex mx-auto w-[264px]  sm:w-full flex-col-reverse   sm:flex-row justify-center items-stretch gap-4 mt-[30px]">
                <div className="bg-[linear-gradient(86.66deg,#C44558_10.85%,#FF7F7F_84.93%)] overflow-hidden rounded-lg w-fit p-0.5">
                  <Button
                      btnText="Join Partner Program"
                      className="py-5 px-6 min-w-[228px] font-primary font-medium text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#C44558] bg-white"
                      iconSize="20"
                      useCommonSvg="true"
                    />

                </div>

                <Button
                  btnText="Explore Products"
                  className="text-[16px]  min-w-[228px] py-5 px-4 font-primary font-medium leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white"
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

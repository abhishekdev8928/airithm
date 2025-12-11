import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { ExternalLink, CircleArrowOutUpRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import Button from "@/components/ui/Button";
import { BlogCard } from "@/components/card/BlogCard";
import SectionHeading from "@/components/common/SectionHeading";

import { Home_BLOGS_CONFIG } from "@/config/homeConfig";

// Blog Card Component

// Main Blogs Section Component
const BlogsSection = () => {
  return (
    <section>
      <div className=" px-4 pb-[30px] sm:pb-0 sm:px-0 section-wrapper bg-gray-50 ">
        <div className="">
          {/* Section Header */}

          <SectionHeading
            titleClassName=" text-[#00273A] capitalize  pt-[36px]"
            title="insight, ideas, and innovation"
            wrapperClassName="max-w-[274px] sm:max-w-full mx-auto"
          />

          {/* Swiper Container */}
          <div className="relative pt-12 ">
            <Swiper
              modules={[Pagination]}
              spaceBetween={24}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                el: ".custom-pagination",
              }}
              className="mb-8"
              breakpoints={{
                0: {
                  slidesPerView: 1, // small screens show 1 slide
                  spaceBetween: 16,
                },
                640: {
                  slidesPerView: 2, // from sm screens show 2 slides
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3, // from lg screens show 3 slides
                  spaceBetween: 24,
                },
              }}
            >
              {Home_BLOGS_CONFIG.map((blog) => (
                <SwiperSlide key={blog.id} className="h-auto">
                  <BlogCard blog={blog} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Pagination and View More Button Container */}
            <div className="flex items-center flex-col sm:flex-row gap-12 sm:gap-0 sm:flex-nowrap pb-14 px-10 justify-between w-full">
              {/* Custom Pagination Container */}
              <div className="custom-pagination flex items-center gap-2"></div>

              <Button
                icon="CircleArrowOutUpRight"
                iconSize="20px"
                btnText="View More"
                className="py-5 pl-6 pr-5 bg-primary-gradient rounded-lg text-white shadow-[0px_2px_4px_0px_#00000029,0px_8px_8px_0px_#00000024,0px_17px_10px_0px_#00000014,0px_30px_12px_0px_#00000005,0px_47px_13px_0px_#00000000] font-bold leading-[1.2] font-dm-sans"
              />
            </div>
          </div>
        </div>

        <style jsx>{`
          .custom-pagination {
            display: flex !important;
            align-items: center !important;
            gap: 8px !important;
            position: static !important;
            width: auto !important;
          }

          .swiper-pagination-bullet {
            width: 14px;
            height: 14px;
            background-color: #d9d9d9;

            opacity: 1;
            border-radius: 50%;
            transition: background 0.3s ease;
            cursor: pointer;
            margin: 0 !important;
          }

          .swiper-pagination-bullet-active {
            width: 14px;
            height: 14px;
            background: #111827;
            border-radius: 50%;
            background: linear-gradient(
              76.14deg,
              #00273a 50.23%,
              #006ca0 131.99%
            );
          }

          .swiper-slide {
            height: auto;
            display: flex;
          }

          .swiper-slide > div {
            width: 100%;
          }

          @media (max-width:576px){
           .swiper-pagination-bullet {
            width: 16px;
            height: 16px;
           
          }

          .swiper-pagination-bullet-active {
            width: 16px;
            height: 16px;
           
          }}
        `}</style>
      </div>
    </section>
  );
};

export default BlogsSection;

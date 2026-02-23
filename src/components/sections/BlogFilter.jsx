import React, { useState } from "react";
import SectionHeading from "@/components/common/SectionHeading";
import { BLOG_CONFIG } from "../../config/resourceConfig";
import Button from "../ui/Button";

const BlogFilter = () => {
  // ✅ Categories must match BLOG_CONFIG
  const categories = ["All Posts", "Research", "Autonomous", "Whitepaper"];

  const [activeCategory, setActiveCategory] = useState("All Posts");

  const filteredBlogs =
    activeCategory === "All Posts"
      ? BLOG_CONFIG
      : BLOG_CONFIG.filter(
          (item) =>
            item.category.toLowerCase() ===
            activeCategory.toLowerCase()
        );

  return (
    <>
      <section className="py-[100px] mt-[-60px] bg-white rounded-[60px]">
        <div className="max-w-[1200px] mx-auto">

          {/* Heading */}
          <SectionHeading
            title="Latest from Our Blog"
            titleClassName="sm:text-[48px] text-[#000]"
          />

          {/* Filters */}
          <div className="text-center mb-[60px]">
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveCategory(item)}
                  className={`px-4 py-1 rounded-full text-[13px] border transition-all duration-300
                  ${
                    activeCategory === item
                      ? "bg-[#C44558] text-white border-[#C44558] scale-105"
                      : "border-[#E5E5E5] text-[#C44558] hover:bg-[#C44558]/10"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid px-5 md:px-0 grid-cols-1 md:grid-cols-2 gap-[20px]">
            {filteredBlogs.map((item) => (
              <div
                key={item.id}
                className="flex lg:flex-row flex-col md:w-[600px] w-full 
                bg-white rounded-[20px] border border-[#E5E5E5] 
                overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div
                  className="md:w-[45%] w-full lg:h-[390px] h-[300px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.img})` }}
                />

                {/* Content */}
                <div className="md:w-[55%] w-full p-6 flex flex-col justify-between">
                  <div>
                    <span
                      className="inline-block mb-3 px-3 py-1 rounded-full text-[12px]
                      bg-[linear-gradient(90deg,rgba(255,166,141,0.15)_0%,rgba(253,58,132,0.15)_100%)]
                      text-[#C44558] font-medium"
                    >
                      {item.tag}
                    </span>

                    <h3 className="text-[24px] font-primary font-semibold text-[#1E1E1E]">
                      {item.title}
                    </h3>

                    <p className="text-[16px] text-[#626161] mt-2">
                      {item.desc}
                    </p>

                    <ul className="flex items-center justify-between mt-4">
                      <li className="text-[14px] text-[#8A8A8A]">
                        {item.category}
                      </li>
                      <li className="text-[14px] text-[#8A8A8A]">
                        {item.time}
                      </li>
                    </ul>
                  </div>

                  <Button
                    btnText="Learn More"
                    className="text-[16px] w-full md:mt-[40px] mt-[20px] py-5 px-4 font-primary font-medium rounded-lg bg-primary-gradient text-white"
                    href="#"
                    icon="CircleArrowOutUpRight"
                    iconSize="20px"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredBlogs.length === 0 && (
            <div className="text-center mt-10 text-gray-400">
              No posts found in this category.
            </div>
          )}
        </div>
      </section>

    </>
  );
};

export default BlogFilter;
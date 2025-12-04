import Button from "../ui/Button";

export const BlogCard = ({ blog }) => {
  return (
    <div className=" p-4 border  border-[#D9D9D9] rounded-3xl overflow-hidden gap-6  h-full flex items-start flex-col">
      {/* Blog Image */}
      <div className="flex w-[400px] flex-col gap-4">
        <div className="size-[400px] overflow-hidden rounded-3xl ">
          <img
            src={
              blog.image ||
              "/home/blog.png"
            }
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-[#1E1E1E] text-inter-20 font-normal leading-snug ">
          {blog.title}
        </h3>
      </div>

     <Button icon="CircleArrowOutUpRight" iconSize="20px" btnText="Read Blog" className="text-[#C44558] p-2.5 font-dm-sans font-semibold leading-[1.2] tracking-[0.02em]" />
        
        
      
    </div>
  );
};
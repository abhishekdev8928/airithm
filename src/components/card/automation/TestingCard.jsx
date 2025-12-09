const TestingCard = ({ title, description, bgImgSrc }) => {
  return (
    <div
      className="
        relative group 
        w-full sm:w-[260px] md:w-[220px] lg:w-[200px]
         h-[400px] md:h-[300px]     /* STATIC HEIGHT */
        rounded-xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-[cubic-bezier(.25,.8,.25,1)]
      "
      style={{
        backgroundImage: `url(${bgImgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* Dark Layer */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-all duration-700" />

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-700" />

      {/* Pink Hover Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f78da7] to-[#f05862] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Text */}
      <div className="absolute bottom-5 left-5 right-5">
        <h2 className="text-white text-[20px] leading-[110%] tracking-[0.02em] w-full sm:max-w-[140px] font-primary font-semibold">
  {title}
</h2>


        <p
  className="
    text-white text-[16px] leading-[140%] tracking-[0.04em] font-secondary font-medium
    overflow-hidden max-h-0 opacity-0 translate-y-2
    group-hover:max-h-[100px] 
    group-hover:opacity-100 
    group-hover:translate-y-0
    transition-all duration-700 mt-2
  "
>
  {description}
</p>

      </div>
    </div>
  );
};


export default TestingCard;

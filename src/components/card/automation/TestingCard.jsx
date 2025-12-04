const TestingCard = ({ title, description, bgImgSrc }) => {
  return (
    <div
      className="relative automation-cap-card group w-[200px] h-[400px] rounded-[12px] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(.25,.8,.25,1)]"
      style={{
        backgroundImage: `url(${bgImgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Base Darken Layer */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-all duration-700 ease-[cubic-bezier(.25,.8,.25,1)]" />

      {/* Smooth Bottom Gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 
                      bg-gradient-to-t from-black/80 to-transparent 
                      group-hover:opacity-0
                      transition-opacity duration-700 ease-[cubic-bezier(.25,.8,.25,1)]"
      />

      {/* 🔥 Super Smooth Pink Hover Layer */}
      <div
        className="
          absolute inset-0 
          bg-gradient-to-br from-[#f78da7] to-[#f05862]
          opacity-0 
          group-hover:opacity-100 
          transition-opacity duration-700 
          ease-[cubic-bezier(.25,.8,.25,1)]
      "
      />

      {/* TEXT AREA */}
      <div className="absolute bottom-5 left-5 right-5">
        <h2 className="text-white text-xl w-[140px] font-semibold">{title}</h2>

        {/* Super-smooth description */}
        <p
          className="
            text-white text-sm overflow-hidden
            max-h-0 opacity-0 translate-y-2
            group-hover:max-h-[100px] 
            group-hover:opacity-100 
            group-hover:translate-y-0
            transition-all duration-700 
            ease-[cubic-bezier(.25,.8,.25,1)]
            mt-2
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default TestingCard;

import React from "react";



const Chip = ({ label , wrapperClassName}) => {
  return (
    <div
      className={`p-px w-fit rounded-full bg-linear-to-r from-[#FFA68D] to-[#FD3A84] ${wrapperClassName}`}
    >
      <div className="px-4 font-secondary capitalize leading-[1.2] tracking-[0.02em]  py-2 rounded-full bg-white text-sm text-[#C44558] font-medium">
        {label}
      </div>
    </div>
  );
};

export default Chip;
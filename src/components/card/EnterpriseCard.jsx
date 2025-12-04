import * as LucideIcon from "lucide-react";

const EnterpriseCard = ({ icon, title, description }) => {
    
  const IconComponent = LucideIcon[icon] || LucideIcon.ArrowUp; // fallback

  return (
    <div className="enterprise-card w-full mb-10  md:mb-0 md:w-[300px] flex flex-col items-center justify-between min-h-[120px] md:min-h-[140px]">
      <IconComponent size="32" className=" text-[#C44558]" />

      <div className="enterprise-card-content flex flex-col gap-2.5 text-center">
        <h4 className="text-dmsans-20 leading-[1.4]  text-[#1E1E1E] font-medium">{title}</h4>
        <p className="text-inter-18 leading-[1.4]  text-[#626161]">{description}</p>
      </div>
    </div>
  );
};

export default EnterpriseCard;

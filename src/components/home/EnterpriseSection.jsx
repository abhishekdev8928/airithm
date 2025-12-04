import { Earth } from "lucide-react";
import React from "react";
import {HOME_ENTERPRISE_CONFIG} from "../../config/homeConfig.js"
import EnterpriseCard from "../card/EnterpriseCard.jsx";
import SectionHeading from "@/components/common/SectionHeading"
const EnterpriseSection = () => {

    const {title , subtitle , cards} = HOME_ENTERPRISE_CONFIG;

    
  return (
    <section className="">
      <div className="bg-white rounded-[100px] py-[100px]  z-10 relative   mt-[-100px]">

        <div className="max-w-7xl mx-auto ">

<SectionHeading
        title={title}
        titleClassName="section-title"
        subtitleClassName="section-subtitle text-[#626161]"
        subtitle={subtitle}
      />
       
      

      <div className="group-icon pt-[60px] pb-[100px] flex justify-center">
        <img  src="./home/group-logo.png" alt="" />
      </div>

      <div className="flex flex-wrap justify-between mx-auto max-w-[1012px]">

        {
           Array.isArray(cards) && cards.length > 0 && cards.map(enterprise => <EnterpriseCard key={enterprise.id} {...enterprise} />)
        }




      </div>
    </div>


      
      </div>
      
    </section>
  );
};

export default EnterpriseSection;

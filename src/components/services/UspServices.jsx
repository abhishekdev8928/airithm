import { Earth } from "lucide-react";
import React from "react";
// import { HOME_ENTERPRISE_CONFIG} from "../../config/homeConfig.js";
import EnterpriseCard from "../card/EnterpriseCard.jsx";
import SectionHeading from "@/components/common/SectionHeading";
import FeatureCard from "@/components/card/FeaturedCard.jsx";
// import { HOME_FEATURED_CONFIG } from "@/config/servicesConfig";

const UspServices = ({data}) => {
  const { title, subtitle, cards, bodyclass } = data;
//   console.log(data);
  
  return (
       <section className="">
      <div className={`${bodyclass === true ? "bg-[linear-gradient(180deg,#042539_0%,#000000_100%)]" : bodyclass }  rounded-[50px] px-4 md:px-0 sm:rounded-[100px] py-[100px]  z-10 relative   mt-[100px]`}>
        <div className="max-w-7xl mx-auto ">
         
           <SectionHeading 
                    titleClassName={` ${bodyclass === true? "text-white": "text-black"}  capitalize `} 
                    title={title}
                    subtitleClassName={`${bodyclass === true? "text-white" : "text-black"} `}
                    subtitle={subtitle}
                    wrapperClassName="w-full  sm:max-w-[909px] mx-auto"
          
                    
                  />
                        <div className="flex flex-wrap  gap-6 pt-10 justify-center max-w-[1200px] mx-auto">
                          {data.cards.map((card) => (
                            <FeatureCard key={card.id} {...card} />
                          ))}
                        </div>

          

       
        </div>
      </div>
    </section>
  )
}

export default UspServices
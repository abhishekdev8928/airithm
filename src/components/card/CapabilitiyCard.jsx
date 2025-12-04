
import { Bot } from 'lucide-react'
import React from 'react'

import * as LuicideIcon from "lucide-react"

const CapabilitiyCard = ({title , description , icon}) => {

 const IconComponent = LuicideIcon[icon]
  return (
      <div className="capability-card w-full sm:w-1/2 mb-[40px] md:mb-0 md:w-[300px] flex flex-col items-center gap-6">
    
            <div className="size-10 flex justify-center items-center bg-[#C44558]">
    
                <IconComponent  className="text-white size-[22px]" />
    
    
            </div>
    
            <div className="capability-content flex flex-col gap-2">
                <h2 className="text-dmsans-24 leading-[1.2] font-medium text-center text-white">{title}</h2>
                <p className="text-inter-18 font-medium leading-[1.4]  text-white">{description}</p>
            </div>
    
            
    
    
         </div>
  )
}

export default CapabilitiyCard
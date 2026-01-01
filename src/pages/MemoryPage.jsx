import React from 'react'
import SectionHeading from "@/components/common/SectionHeading";
import UspServices from '../components/services/UspServices';
import FooterSection from "@/components/home/FooterSection"; 
import Navbar from "@/components/Navbar.jsx";
import MainBanner from '../components/services/MainBanner';
import {Memory_HEADER , PLANING_CTA_CONFIG} from "./../config/memoryConfig"

import CtaSection from "@/components/common/CtaSection";
import PlatformSynergy from "../components/services/PlatformSynergy";
import * as LucideIcons from "lucide-react";

const MemoryPage = () => {
  
    const type =[
        {
            id:1,
            title:"Vector Memory",
            dis:"Stores and retrieves information using embeddings for semantic search and similarity matching. Enables long-term contextual understanding across test cases, requirements, and historical results.",
            points:["Semantic search", "Context retrieval", "Pattern matching"],
            icon:"VectorSquare"
        },
        {
            id:2,
            title:"Graph Memory",
            dis:"Represents relationships between entities such as tests, requirements, agents, and systems. Enables relationship-aware reasoning and impact analysis across interconnected data.",
            points:["Entity relationships", "Dependency tracking", " Impact analysis"],
            icon:"Waypoints"
        },
        {
            id:3,
            title:"Temporal Memory",
            dis:"Maintains time-aware context by tracking historical execution data, trends, and changes over time. Supports learning from past behavior and adapting future testing strategies.",
            points:["Execution history", "Trend analysis", "Performance evolution"],
            icon:"RotateCcw"
        }
    ]
  return (
    <>
        <Navbar
            wrapperClassName="relative "
            disableScrollHide={true}
            linkClassName="text-black"
            iconClassName="invert-0"
        />
        <section className='py-[150px] text-center rounded-[50px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)] text-white'>
   
            <MainBanner data={Memory_HEADER} />
        </section>
       <section className='py-[90px]'>
        <div className='max-w-[1240px] m-auto '>
            <SectionHeading
                title="Memory Types"
                subtitle='Three distinct memory types working together seamlessly'
                titleClassName="sm:text-[48px]"
                subtitleClassName=" sm:text-[16px] text-[#626161]"
            />
            <div className="mt-[40px] flex gap-4">
                
            {
                type.map((item,index, id)=>{
                        const Icon = LucideIcons?.[item.icon];
                        return(
                               <div id={index} className="w-[400px] rounded-2xl border shadow-[0px_12px_12px_0px_#C4455817] border-[#E5E5E5] gap-10 p-5 px-6 flex flex-col items-start">
                          
                          <div className="">
                              
                              {Icon && <Icon size={24} className="text-[#C44558]" />}
                          </div>
                    
                          <div className="sidecard-group sapce-y-6">
                            <h3 className="text-[24px] capitalize font-primary font-[600] tracking-[0.02em] leading-[1.2] text-[#1e1e1e] mb-4">
                              {item.title}
                            </h3>
                            <p className='text-[#626161] text-[18px] font-secondary font-[500]'>{item.dis}</p>
                    
                            {/* Points list */}
                            <ul className="space-y-2.5 mt-8">
                              {item.points?.map((list, i) => (
                                <li key={i} className="flex items-center gap-3 text-[#C44558]">
                               
                                    <img src="./public/svg/circle-check1.svg"  className="w-5 h-5" />
                                 
                    
                                  <span className="text-base text-[16px] font-normal font-secondary leading-none tracking-[0.0em]">
                                    {list.label || list}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        )
                 
                })
            }
            
            </div>
        </div>

       </section>
        <section className='py-[90px] rounded-[90px] bg-[linear-gradient(360deg,#042539_0%,#000000_100%)]'>
            <div className='max-w-[1240px] m-auto '>
                <SectionHeading
                    title="Why Graph-RAG?"
                    subtitle='Transform how your AI systems understand, remember, and reason about context.'
                    titleClassName="sm:text-[48px] text-[#fff]"
                    subtitleClassName=" sm:text-[16px] text-[#D9D9D9]"
                />
                <div className="mt-[40px]">
                    <img className='m-auto' src="./public/topics/why-graph.png" alt="" />
                </div>
                <div className="grid grid-cols-12 gap-4 mt-[40px]">
                    <div className="col-span-4 border-[1px ] border-[#D9D9D9] border p-5 rounded-[16px]" >
                        <div className="icon h-[48px] w-[48px] rounded-[4px] flex items-center justify-center bg-[linear-gradient(90deg,rgba(255,166,141,0.15)_0.03%,rgba(253,58,132,0.15)_100%)]">
                            <LucideIcons.ShieldCheck className="text-[#C44558]"/>
                           

                        </div>
                         <h3 className='text-[#fff] text-[24px] font-primary font-[600] mb-2 mt-8'>Reduced Hallucinations</h3>
                            <p className='font-[16px] font-secondary text-[#D9D9D9]'>Ground AI responses in verified, interconnected facts.</p>
                                
                                <p className='font-[16px] font-secondary text-[#D9D9D9] mt-6'>Graph-RAG ensures every answer traces back to concrete relationships and validated data sources, dramatically reducing false or invented information.</p>

                    </div>
                    <div className="col-span-4 border-[1px ] border-[#D9D9D9] border p-5 rounded-[16px]" >
                        <div className="icon h-[48px] w-[48px] rounded-[4px] flex items-center justify-center bg-[linear-gradient(90deg,rgba(255,166,141,0.15)_0.03%,rgba(253,58,132,0.15)_100%)]">
                            <LucideIcons.Route className="text-[#C44558]"/>
                           

                        </div>
                         <h3 className='text-[#fff] text-[24px] font-primary font-[600] mb-2 mt-8'>Complete Traceability</h3>
                            <p className='font-[16px] font-secondary text-[#D9D9D9]'>Follow the reasoning path from question to answer.</p>
                                
                                <p className='font-[16px] font-secondary text-[#D9D9D9] mt-6'>Visualize how information flows through your knowledge graph, making AI decision-making transparent, auditable, and trustworthy for critical applications.</p>

                    </div>
                    <div className="col-span-4 border-[1px ] border-[#D9D9D9] border p-5 rounded-[16px]" >
                        <div className="icon h-[48px] w-[48px] rounded-[4px] flex items-center justify-center bg-[linear-gradient(90deg,rgba(255,166,141,0.15)_0.03%,rgba(253,58,132,0.15)_100%)]">
                            <LucideIcons.Link className="text-[#C44558]"/>
                           

                        </div>
                         <h3 className='text-[#fff] text-[24px] font-primary font-[600] mb-2 mt-8'>Context Continuity</h3>
                            <p className='font-[16px] font-secondary text-[#D9D9D9]'>Maintain coherent understanding across conversations and sessions.</p>
                                
                                <p className='font-[16px] font-secondary text-[#D9D9D9] mt-6'>Graph-RAG preserves relationships and context over time, enabling your AI to build on previous interactions and evolve its understanding naturally. </p>

                    </div>
                   

                </div>
            </div>
        </section>
        <section className='py-[90px]'>
              <SectionHeading
                title="Technical Advantages"
                // subtitle='Three distinct memory types working together seamlessly'
                titleClassName="sm:text-[48px]"
                // subtitleClassName=" sm:text-[16px] text-[#626161]"
            />
            <div className='max-w-[1128px] m-auto mt-[80px] grid grid-cols-12 gap-4'>
                <div className="col-span-3 text-center ">
                    <div className='rounded-[4px] m-auto bg-[linear-gradient(86.66deg,_#C44558_10.85%,_#FF7F7F_84.93%)] h-[50px] w-[50px] flex justify-center items-center '>
                        <LucideIcons.Zap className='text-[#fff]'/>
                    </div>
                        <h3 className="text-[24px] mt-6 text-[#1E1E1E] font-primary font-[600]">Fast Retrieval</h3>
                        <p className='text-[#626161] text-[18px] font-secondary font-[500] mt-2'>Sub-second query <br /> response times</p>
                </div>
                <div className="col-span-3 text-center ">
                    <div className='rounded-[4px] m-auto bg-[linear-gradient(86.66deg,_#C44558_10.85%,_#FF7F7F_84.93%)] h-[50px] w-[50px] flex justify-center items-center '>
                        <LucideIcons.Expand className='text-[#fff]'/>
                    </div>
                        <h3 className="text-[24px] mt-6 text-[#1E1E1E] font-primary font-[600]">Scalable</h3>
                        <p className='text-[#626161] text-[18px] font-secondary font-[500] mt-2'>Billions of nodes and edges</p>
                </div>
                <div className="col-span-3 text-center ">
                    <div className='rounded-[4px] m-auto bg-[linear-gradient(86.66deg,_#C44558_10.85%,_#FF7F7F_84.93%)] h-[50px] w-[50px] flex justify-center items-center '>
                        <LucideIcons.Layers2 className='text-[#fff]'/>
                    </div>
                        <h3 className="text-[24px] mt-6 text-[#1E1E1E] font-primary font-[600]">Multi-Modal</h3>
                        <p className='text-[#626161] text-[18px] font-secondary font-[500] mt-2'>Text, images, and <br /> structured data</p>
                </div>
                <div className="col-span-3 text-center ">
                    <div className='rounded-[4px] m-auto bg-[linear-gradient(86.66deg,_#C44558_10.85%,_#FF7F7F_84.93%)] h-[50px] w-[50px] flex justify-center items-center '>
                        <LucideIcons.Settings className='text-[#fff]'/>
                    </div>
                        <h3 className="text-[24px] mt-6 text-[#1E1E1E] font-primary font-[600]">Flexible</h3>
                        <p className='text-[#626161] text-[18px] font-secondary font-[500] mt-2'>Adapt to any domain <br />or use case</p>
                </div>


            </div>

        </section>
        <CtaSection wrapperClassName="mt-[-100px]" {...PLANING_CTA_CONFIG} />
        <FooterSection/>

    </>
  )
}

export default MemoryPage
import InfoCard from "../components/card/InfoCard";
import InsightCard from "../components/card/InsightCard";
import SectionHeading from "../components/common/SectionHeading";
import Navbar from "../components/Navbar";
import MainBanner from "../components/services/MainBanner";
import FeatureCard from "@/components/card/FeaturedCard";
import FooterSection from "@/components/home/FooterSection";
import TimeLine2 from "../components/services/TimeLine2";
import UspServices2 from "../components/services/UspServices2";
import { Atom, Repeat2, Eye, Check, ShieldCheck, Plug, LockOpen, UserRoundPen, } from 'lucide-react';
import UspServices from "../components/services/UspServices";
const TestingAISystemsPage = () => {
    return (
        <>
            <Navbar
                wrapperClassName="relative "
                disableScrollHide={true}
                linkClassName="text-black"
                iconClassName="invert-0"
            />
            <section className=' py-[100px] rounded-[50px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)]'>
                <span class="bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)] taxt-center m-auto  mb-8
                                                             w-fit p-0  rounded-[100px] px-[15px] border border[1px] border-[#797979] flex justify-center items-center ">
                    <span class="font-secondary  block text-[12px]   bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]
                                                            bg-clip-text p-2
                                                            text-transparent font-[600]">Enterprise AI Validation</span></span>
                <MainBanner data={Testing_HEADER} />

                <div className="px-7 py-6 gap-5 mt-[60px] grid grid-cols-12 max-w-[680px] rounded-[24px] border border-[1px] border-[#D9D9D9] m-auto mt-[60px ]" >
                    <div className="col-span-4 text-center rounded-[16px] border border-[1px] border-[#D9D9D9] bg-[#FFFFFF0D] p-4">
                        <div className="h-[40px] m-auto  w-[40px] rounded-[4px] justify-center items-center bg-[linear-gradient(90deg,rgba(255,166,141,0.15)_0.03%,rgba(253,58,132,0.15)_100%)] flex flex-col">
                            <img src="./svg/brain.svg" className="h-[24px]" alt="" />
                        </div> 
                        <h2 className="text-[16px] font-primary font-[500] text-[#fff] mt-1">Input</h2>

                    </div>
                    <div className="col-span-4 text-center rounded-[16px] border border-[1px] border-[#D9D9D9] bg-[#FFFFFF0D] p-4">
                        <div className="h-[40px] m-auto  w-[40px] rounded-[4px] justify-center items-center bg-[linear-gradient(90deg,rgba(255,166,141,0.15)_0.03%,rgba(253,58,132,0.15)_100%)] flex flex-col">
                            <img src="./svg/network.svg" className="h-[24px]" alt="" />
                        </div> 
                        <h2 className="text-[16px] font-primary font-[500] text-[#fff] mt-1">Reasoning</h2>

                    </div>
                    <div className="col-span-4 text-center rounded-[16px] border border-[1px] border-[#D9D9D9] bg-[#FFFFFF0D] p-4">
                        <div className="h-[40px] m-auto  w-[40px] rounded-[4px] justify-center items-center bg-[linear-gradient(90deg,rgba(255,166,141,0.15)_0.03%,rgba(253,58,132,0.15)_100%)] flex flex-col">
                            <img src="./svg/circle-check-lg.svg" className="h-[24px]" alt="" />
                        </div> 
                        <h2 className="text-[16px] font-primary font-[500] text-[#fff] mt-1">Output</h2>

                    </div>
                    <div className="col-span-12 flex justify-between rounded-[16px] border border-[1px] border-[#D9D9D9] bg-[#FFFFFF0D] p-4">
                       
                        <h2 className="text-[16px] font-primary font-[500] text-[#fff] ">Accuracy Score</h2>
                        <span className="bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]
                        bg-clip-text text-transparent text-[16px] font-secondary">94.2%</span>

                    </div>
                    <div className="col-span-12 flex justify-between rounded-[16px] border border-[1px] border-[#D9D9D9] bg-[#FFFFFF0D] p-4">
                       
                        <h2 className="text-[16px] font-primary font-[500] text-[#fff] ">Faithfulness</h2>
                        <span className="bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]
                        bg-clip-text text-transparent text-[16px] font-secondary">97.8%</span>

                    </div>
                    <div className="col-span-12 flex justify-between rounded-[16px] border border-[1px] border-[#D9D9D9] bg-[#FFFFFF0D] p-4">
                       
                        <h2 className="text-[16px] font-primary font-[500] text-[#fff] ">Hallucination Rate</h2>
                        <span className="bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]
                        bg-clip-text text-transparent text-[16px] font-secondary">2.1%</span>

                    </div>

                </div>
             
            </section>
            <UspServices data={USP_CONFIG}/>
        </>
    )
}

export default TestingAISystemsPage



export const USP_CONFIG = {
  title: "Why Traditional Testing Fails for AI Systems",
  subtitle: "AI systems require fundamentally different validation approaches than deterministic software",
  bodyclass: "",

  cards: [
    {
      id: 1,
      icon: "Dices",
      title: "Non-Deterministic Outputs",
      discColor: "#626161",
      cardClassName:"bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] w-full sm:w-[295px] min-h-[258px]",
      textColor: "#000",
      description:
        "Same input can produce different valid outputs, making traditional assertion-based testing impossible.",
     
        
    
    },
     {
      id: 2,
      icon: "ChartSpline",
      title: "Configure Test Strategy",
      discColor: "#626161",
      cardClassName:"bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] w-full sm:w-[295px] min-h-[258px]",
      textColor: "#000",
      description:
        "AI decisions are based on confidence scores and learned patterns, not fixed logic paths.",
    
    },
     {
      id: 3,
      icon: "Database",
      title: "Data & Prompt Sensitivity",
      discColor: "#626161",
      cardClassName:"bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] w-full sm:w-[295px] min-h-[258px]",
      textColor: "#000",
      description:
        "Minor changes in input context or phrasing can significantly alter AI behavior and outputs.",
    
    },
     {
      id: 4,
      icon: "RefreshCcw",
      title: "Continuous Evolution",
      discColor: "#626161",
      cardClassName:"bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] w-full sm:w-[295px] min-h-[258px]",
      textColor: "#000",
      description:
        "Models update, data drifts, and prompts change—requiring ongoing validation, not one-time testing.",
    
    }
   
  ],
};




export const Testing_HEADER = {
    heading: "Testing AI Systems at <br/> Enterprise Scale",
    headclass: " text-white",
    paragraph:
        "A comprehensive approach to validating AI behavior, reliability, and safety in production <br/> environments.",
    //   backgroundImage: "/bg/bg-gradient-four.jpg",
    buttons: [
        {
            text: "View Evaluation Architecture",
            className:
                "py-5 px-8  font-primary font-[600] text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#C44558] bg-white",
            icon: "CircleArrowOutUpRight",
            hoverIcon: true,
            iconSize: "20px",
            href: "",
        },
        {
            text: "Request AI Testing Demo",
            className:
                "text-[16px]  min-w-[228px] py-5 px-6 font-primary font-[600] leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white",
            href: "",
            icon: "CircleArrowOutUpRight",
            iconSize: "20px",
        }

    ],
};
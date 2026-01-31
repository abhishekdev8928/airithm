import { useEffect, useState, useRef } from "react";
import {
  Brain,
  BriefcaseBusiness,
  ChartLine,
  CirclePlay,
  CircleQuestionMark,
  Expand,
  FileText,
  FlaskConicalIcon,
  Layers,
  Menu,
  Network,
  Puzzle,
  Rocket,
  Settings,
  ShieldCheck,
  X,
} from "lucide-react";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

export default function Navbar({
  wrapperClassName = "",
  disableScrollHide = false,
  initialTextColor = "text-black",
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const lastScrollY = useRef(0);
  const [openSection, setOpenSection] = useState(null);


  /* Scroll hide logic */
  useEffect(() => {
    if (disableScrollHide) return;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 20);

      if (currentScroll > lastScrollY.current && currentScroll > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [disableScrollHide]);

  /* ESC key close */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setShowModal(false);
        setShowModal1(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const textColor = scrolled ? "text-white" : initialTextColor;
  const iconColor = textColor;

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`
          fixed top-0 left-0 w-full z-50
          py-6 px-4 px-10
          transition-all duration-300
          ${disableScrollHide ? "" : isVisible ? "translate-y-0" : "-translate-y-full"}
          ${scrolled ? "bg-black/60 backdrop-blur-md" : "bg-transparent"}
          ${wrapperClassName}
        `}
      >
        <div className="mx-auto w-full flex items-center justify-between gap-4">
      <Link to="/">
      
          <img
            src="/svg/airithm-logo.svg"
            alt="Airithm Logo"
            className="w-[120px] sm:w-[140px] lg:w-[150px]"
          /></Link>

          <nav className="hidden lg:flex gap-6">
            {NAVBAR_LINKS.map((item) => (
              <>

              {
                item.link && (
                  <a href={`${item.link}`}   className={`
                  flex items-center gap-2
                  text-[14px] sm:text-[15px] lg:text-[16px]
                  transition-colors duration-300
                  ${textColor}
                `}>
                         {item.label}
                  </a>
                )
              }
                {
                !item.link && (

              <button 
               
                key={item.label}
                className={`
                  flex items-center gap-2
                  text-[14px] sm:text-[15px] lg:text-[16px]
                  transition-colors duration-300
                  ${textColor}
                `}
                onClick={() => {
                  if (item.label === "Platform") {
                    setShowModal(true);
                    setShowModal1(false);
                  }
                  if (item.label === "Resources") {
                    setShowModal1(true);
                    setShowModal(false);
                  }
                }}
              >
                {item.label}
                {item.hasDropdown && (
                  <svg className={`w-4 h-4 ${iconColor}`} viewBox="0 0 20 20" fill="currentColor">
                    <circle cx="3.25" cy="6" r="1.25" />
                    <circle cx="16.75" cy="6" r="1.25" />
                    <circle cx="5.75" cy="10" r="1.25" />
                    <circle cx="14.25" cy="10" r="1.25" />
                    <circle cx="10" cy="14" r="1.25" />
                  </svg>
                )}
              </button>
                )
              }

              </>
            ))}
          </nav>

          <div className="hidden lg:block p-px rounded-lg bg-gradient-to-r from-[#C44558] via-[#FF7F7F] to-[#FF7F7F]">
            <Button
              btnText="Book A Demo"
              className="bg-white text-[#C44558] px-6 py-4 rounded-lg"
              useCommonSvg
              href="/demo"
            />
          </div>

          <button className={`block lg:hidden ${iconColor}`} onClick={() => setShowModal2(true)}>
            <Menu size={32} />
          </button>
        </div>
      </header>

      {/* ================= PLATFORM MODAL ================= */}
      {/* {showModal && ( */}
      <div
        className={`fixed inset-0  flex items-start justify-center  z-50 lg:block none    transform transition-transform duration-300 ease-out  ${showModal ? "lg:translate-y-0 translate-y-[-1000px]" : "lg:-translate-y-[1000px] translate-y-[1000px]"}`}
        onClick={() => setShowModal(false)}
      >
        <div
          className={`
        bg-white rounded-xl mt-24 m-auto max-w-[1400px] shadow-xl
      
      
      `}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid grid-cols-4 px-7">
            <div className="col-span-1 px-6 py-9">
              <h2 className="text-[#C44558] font-[600] text-[24px]">AI Test Platform</h2>
              <div className="menu mt-6">
                <Link to="/neuro-test" className="flex gap-3">
                  <div className="w-[39px]">
                    <Brain color="#C44558" className="mt-[5px]" />
                  </div>
                  <div>
                    <h3 className="text-[20px] font-primary font-[500] mt-0 text-[#1E1E1E]">Neuro Test</h3>
                    <p className="text-[14px] text-[#797979] font-secondary font-[400]">Advanced testing for AI/LLM systems with specialized validation capabilities</p>
                  </div>
                </Link>
                <Link to="/core-test" className="flex gap-3 mt-5">
                  <div className="w-[39px]">
                    <FlaskConicalIcon color="#C44558" className="mt-[5px]" />
                  </div>
                  <div>
                    <h3 className="text-[20px] font-primary font-[500] mt-0 text-[#1E1E1E]">Core Test</h3>
                    <p className="text-[14px] text-[#797979] font-secondary font-[400]">Comprehensive testing for enterprise and non-AI Applications</p>
                  </div>
                </Link>
              </div>

            </div>
            <div className="col-span-2 px-6 py-9 border border-y-[1px] border-x-[#D9D9D9] border-y-[#fff]">
              <h2 className="text-[#C44558] font-[600] text-[24px]">Context Intelligent Platform</h2>
              <div className="menu mt-6 flex gap-6">
                <div>
                  <Link to="real-time-context" className="flex gap-3">
                    <div className="w-[39px]">
                      <Network color="#C44558" className="mt-[5px]" />
                    </div>
                    <div>
                      <h3 className="text-[20px] font-primary font-[500] mt-0 text-[#1E1E1E]">Real-time Context</h3>
                      <p className="text-[14px] text-[#797979] font-secondary font-[400]">Ensure smooth synchronization of agents and devices with secure, scalable, event-driven AI across organizations.</p>
                    </div>
                  </Link>
                  <Link to="/declarative-context-protocol" className="flex gap-3 mt-5">
                    <div className="w-[39px]">
                      <Settings color="#C44558" className="mt-[5px]" />
                    </div>
                    <div>
                      <h3 className="text-[20px] font-primary font-[500] mt-0 text-[#1E1E1E]">Declarative Context Protocol</h3>
                      <p className="text-[14px] text-[#797979] font-secondary font-[400]">Enterprise-grade governance framework for multiagent AI systems. </p>
                    </div>
                  </Link>
                  <Link to="/temporal-context-memory" className="flex gap-3 mt-5">
                    <div className="w-[39px]">
                      <Rocket color="#C44558" className="mt-[5px]" />
                    </div>
                    <div>
                      <h3 className="text-[20px] font-primary font-[500] mt-0 text-[#1E1E1E]">Temporal Context Memory</h3>
                      <p className="text-[14px] text-[#797979] font-secondary font-[400]">Dual-tier storage enhances memory architecture for better contextual understanding and retrieval performance.</p>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link to='/context-capsule' className="flex gap-3">
                    <div className="w-[39px]">
                      <ShieldCheck color="#C44558" className="mt-[5px]" />
                    </div>
                    <div>
                      <h3 className="text-[20px] font-primary font-[500] mt-0 text-[#1E1E1E]">Context Capsules</h3>
                      <p className="text-[14px] text-[#797979] font-secondary font-[400]">Portable, scoped context units with persona, tools, and time-bound memory for AIRITHM’s Agentic Memory Engine</p>
                    </div>
                  </Link>
                  <Link to='/reflective-memory' className="flex gap-3 mt-5">
                    <div className="w-[39px]">
                      <Expand color="#C44558" className="mt-[5px]" />
                    </div>
                    <div>
                      <h3 className="text-[20px] font-primary font-[500] mt-0 text-[#1E1E1E]">Reflective Memory</h3>
                      <p className="text-[14px] text-[#797979] font-secondary font-[400]">An AI that evolves through self-analysis, reflection, and intelligent adaptation.</p>
                    </div>
                  </Link>
                  <Link to="/hybrid-attention-memory-network" className="flex gap-3 mt-5">
                    <div className="w-[39px]">
                      <Puzzle color="#C44558" className="mt-[5px]" />
                    </div>
                    <div>
                      <h3 className="text-[20px] font-primary font-[500] mt-0 text-[#1E1E1E]">Hybrid Attention Memory Network</h3>
                      <p className="text-[14px] text-[#797979] font-secondary font-[400]">Revolutionary AI routing engine with policy-gated multi-head attention mechanism.</p>
                    </div>
                  </Link>
                </div>
              </div>

            </div>
            <div className="col-span-1 px-6 py-9">
              <h2 className="text-[#C44558] font-[600] text-[24px]">AI Governance</h2>
              <div className="menu mt-6">
                <Link  className="flex ">
                  <div className="w-[39px]">
                    <Brain color="#C44558" className="mt-[0px]" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-primary font-[500] mt-0 text-[#1E1E1E]">Hybrid Agent Architecture</h3>

                  </div>
                </Link>
                <Link className="flex mt-3">
                  <div className="w-[39px]">
                    <Brain color="#C44558" className="mt-[0px]" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-primary font-[500] mt-0 text-[#1E1E1E]">Agent Security</h3>

                  </div>
                </Link>
                <Link className="flex  mt-3">
                  <div className="w-[39px]">
                    <Brain color="#C44558" className="mt-[0px]" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-primary font-[500] mt-0 text-[#1E1E1E]">GenSecOps</h3>

                  </div>
                </Link>
                <Link className="flex  mt-3">
                  <div className="w-[39px]">
                    <Brain color="#C44558" className="mt-[0px]" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-primary font-[500] mt-0 text-[#1E1E1E]">GenDevOps</h3>

                  </div>
                </Link>

              </div>

            </div>
          </div>
        </div>
      </div>
      {/* )} */}

      {/* ================= RESOURCES MODAL ================= */}
      {/* {showModal1 && ( */}
      <div
        className={`fixed inset-0  flex items-start justify-center  z-50    transform transition-transform duration-300 ease-out  ${showModal1 ? "lg:translate-y-0 translate-y-[-1000px]" : "lg:-translate-y-[1000px] translate-y-[1000px]"}`}
        onClick={() => setShowModal1(false)}
      >
        <div
          className="bg-white rounded-xl mt-24 m-auto max-w-[1400px] shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-10 py-9">
            {/* <h2 className="text-[#C44558] font-[600] text-[24px]">Resources</h2> */}

            <div className="grid grid-cols-4 justify-center px-7">
              <div className="col-span-1 "></div>

              <div className="col-span-2 px-6 py-3 ">
                <h2 className="text-[#C44558] font-[600] text-[24px]">Resources</h2>
                <div className="menu mt-6 flex gap-6">
                  <div className="w-[50%]">
                    <Link to="/resources" className="flex gap-3">
                      <div className="w-[39px]">
                        <FileText color="#C44558" className="mt-[5px]" />
                      </div>
                      <div>
                        <h3 className="text-[20px] font-primary font-[500] mt-0 text-[#1E1E1E]">Blog</h3>
                        <p className="text-[14px] text-[#797979] font-secondary font-[400]">Thought leadership on agents, AI testing, and reliability</p>
                      </div>
                    </Link>
                    <Link to="/resources" className="flex gap-3 mt-5">
                      <div className="w-[39px]">
                        <Layers color="#C44558" className="mt-[5px]" />
                      </div>
                      <div>
                        <h3 className="text-[20px] font-primary font-[500] mt-0 text-[#1E1E1E]">Whitepapers</h3>
                        <p className="text-[14px] text-[#797979] font-secondary font-[400]">In-depth research and technical frameworks</p>
                      </div>
                    </Link>
                    <Link to="/resources" className="flex gap-3 mt-5">
                      <div className="w-[39px]">
                        <BriefcaseBusiness color="#C44558" className="mt-[5px]" />
                      </div>
                      <div>
                        <h3 className="text-[20px] font-primary font-[500] mt-0 text-[#1E1E1E]">Case Studies</h3>
                        <p className="text-[14px] text-[#797979] font-secondary font-[400]">Lorem ipsum dolor sit amet consectetur. Sagittis ornare.</p>
                      </div>
                    </Link>
                  </div>
                  <div className="w-[50%]">
                    <Link to="/resources" className="flex gap-3">
                      <div className="w-[39px]">
                        <ChartLine color="#C44558" className="mt-[5px]" />
                      </div>
                      <div>
                        <h3 className="text-[20px] font-primary font-[500] mt-0 text-[#1E1E1E]">Benchmarks</h3>
                        <p className="text-[14px] text-[#797979] font-secondary font-[400]">Lorem ipsum dolor sit amet consectetur. Aenean consectetur.</p>
                      </div>
                    </Link>
                    <Link to="/resources" className="flex gap-3 mt-5">
                      <div className="w-[39px]">
                        <CirclePlay color="#C44558" className="mt-[5px]" />
                      </div>
                      <div>
                        <h3 className="text-[20px] font-primary font-[500] mt-0 text-[#1E1E1E]">Webinars & Events</h3>
                        <p className="text-[14px] text-[#797979] font-secondary font-[400]">Lorem ipsum dolor sit amet consectetur. Neque ut tellus.</p>
                      </div>
                    </Link>
                    <Link to="/resources" className="flex gap-3 mt-5">
                      <div className="w-[39px]">
                        <CircleQuestionMark color="#C44558" className="mt-[5px]" />
                      </div>
                      <div>
                        <h3 className="text-[20px] font-primary font-[500] mt-0 text-[#1E1E1E]">FAQs</h3>
                        <p className="text-[14px] text-[#797979] font-secondary font-[400]">Lorem ipsum dolor sit amet consectetur. Neque ut tellus.</p>
                      </div>
                    </Link>
                  </div>
                </div>

              </div>

              <div className="col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}

      {/* ================= mobile MODAL ================= */}
      {/* {showModal1 && ( */}
      <div
        className={`fixed inset-0  flex items-start justify-center  z-50    transform transition-transform duration-300 ease-out  ${showModal2 ? "translate-x-0" : "-translate-x-full"}`}
       
      >
        <div
          className="bg-white mt-0 w-[100%] h-[100%] shadow-xl relative"

        >
         
          {/* <button className="absolute top-2 right-2 z-100 h-[20px] w-[20px]" onClick={() => setShowModal2(false)}><X /></button> */}
          <div className="px-10 py-9 overflow-scroll h-full no-scrollbar">
             <div className="flex justify-between mb-[30px]">
              <img
            src="/svg/airithm-logo.svg"
            alt="Airithm Logo"
            className="w-[120px] sm:w-[140px] lg:w-[150px]"
          />
           <button className=" h-[20px] w-[20px]" onClick={() => setShowModal2(false)}><X /></button>
          </div>
            {/* <h2 className="text-[#C44558] font-[600] text-[24px]">Resources</h2> */}

            <div className="grid grid-cols-4 text-left justify-center">
              {/* <div className="col-span-1 "></div> */}
              <div className="col-span-4  py-5">
                <button
                  onClick={() =>
                    setOpenSection(openSection === "Platform" ? null : "Platform")
                  }
                  className="w-full flex justify-between items-center"
                >
                  <h2 className="text-[#1E1E1E] font-[600] text-[20px]">
                    Platform
                  </h2>
                  <span
                    className={`transition-transform duration-300 ${openSection === "Platform" ? "rotate-180" : ""
                      }`}
                  >
                     <svg className={`w-4 h-4 ${iconColor}`} viewBox="0 0 20 20" fill="#000">
                    <circle cx="3.25" cy="6" r="1.25" />
                    <circle cx="16.75" cy="6" r="1.25" />
                    <circle cx="5.75" cy="10" r="1.25" />
                    <circle cx="14.25" cy="10" r="1.25" />
                    <circle cx="10" cy="14" r="1.25" />
                  </svg>
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${openSection === "Platform"
                      ? "max-h-[2000px] opacity-100 "
                      : "max-h-0 opacity-0"
                    }`}
                >
                   <h2 className="text-[#C44558] font-[600] text-[24px] pt-3 pb-2 mt-4">AI Test Platform</h2>
                <div className="menu mt-6">
                  <Link to="/neuro-test" className="flex gap-3">
                    <div className="w-[39px]">
                      <Brain color="#C44558" className="mt-[5px]"/>
                    </div>
                    <div>
                      <h3 className="text-[20px] font-primary font-[500] mt-0 text-[#1E1E1E]">Neuro Test</h3>
                      <p className="text-[14px] text-[#797979] font-secondary font-[400]">Advanced testing for AI/LLM systems with specialized validation capabilities</p>
                    </div>
                  </Link>
                  <Link to="/core-test" className="flex gap-3 mt-5">
                    <div className="w-[39px]">
                     <FlaskConicalIcon color="#C44558" className="mt-[5px]"/>
                    </div>
                    <div>
                      <h3 className="text-[20px] font-primary font-[500] mt-0 text-[#1E1E1E]">Core Test</h3>
                      <p className="text-[14px] text-[#797979] font-secondary font-[400]">Comprehensive testing for enterprise and non-AI Applications</p>
                    </div>
                  </Link>
                </div>

             
                <h2 className="text-[#C44558] font-[600] text-[24px] pt-3 pb-2 mt-4">Context Intelligent Platform</h2>
             
                <div className="mt-6">
                    <Link to="/real-time-context" className="flex gap-3">
                      <div className="w-[39px]">
                        <Network color="#C44558" className="mt-[5px]"/>
                      </div>
                      <div>
                        <h3 className="text-[20px] font-primary font-[500] mt-0 text-[#1E1E1E]">Real-time Context</h3>
                        <p className="text-[14px] text-[#797979] font-secondary font-[400]">Ensure smooth synchronization of agents and devices with secure, scalable, event-driven AI across organizations.</p>
                      </div>
                    </Link>
                    <Link to="/declarative-context-protocol" className="flex gap-3 mt-5">
                      <div className="w-[39px]">
                      <Settings color="#C44558" className="mt-[5px]"/>
                      </div>
                      <div>
                        <h3 className="text-[20px] font-primary font-[500] mt-0 text-[#1E1E1E]">Declarative Context Protocol</h3>
                        <p className="text-[14px] text-[#797979] font-secondary font-[400]">Enterprise-grade governance framework for multiagent AI systems. </p>
                      </div>
                    </Link>
                    <Link to="/temporal-context-memory" className="flex gap-3 mt-5">
                      <div className="w-[39px]">
                      <Rocket color="#C44558" className="mt-[5px]"/>
                      </div>
                      <div>
                        <h3 className="text-[20px] font-primary font-[500] mt-0 text-[#1E1E1E]">Temporal Context Memory</h3>
                        <p className="text-[14px] text-[#797979] font-secondary font-[400]">Dual-tier storage enhances memory architecture for better contextual understanding and retrieval performance.</p>
                      </div>
                    </Link>
               
                    <Link to="/context-capsule" className="flex gap-3 mt-5">
                      <div className="w-[39px]">
                        <ShieldCheck color="#C44558" className="mt-[5px]"/>
                      </div>
                      <div>
                        <h3 className="text-[20px] font-primary font-[500] mt-0 text-[#1E1E1E]">Context Capsules</h3>
                        <p className="text-[14px] text-[#797979] font-secondary font-[400]">Portable, scoped context units with persona, tools, and time-bound memory for AIRITHM’s Agentic Memory Engine</p>
                      </div>
                    </Link>
                    <Link to="/reflective-memory" className="flex gap-3 mt-5">
                      <div className="w-[39px]">
                      <Expand color="#C44558" className="mt-[5px]"/>
                      </div>
                      <div>
                        <h3 className="text-[20px] font-primary font-[500] mt-0 text-[#1E1E1E]">Reflective Memory</h3>
                        <p className="text-[14px] text-[#797979] font-secondary font-[400]">An AI that evolves through self-analysis, reflection, and intelligent adaptation.</p>
                      </div>
                    </Link>
                    <Link to="/hybrid-attention-memory-network" className="flex gap-3 mt-5">
                      <div className="w-[39px]">
                      <Puzzle color="#C44558" className="mt-[5px]"/>
                      </div>
                      <div>
                        <h3 className="text-[20px] font-primary font-[500] mt-0 text-[#1E1E1E]">Hybrid Attention Memory Network</h3>
                        <p className="text-[14px] text-[#797979] font-secondary font-[400]">Revolutionary AI routing engine with policy-gated multi-head attention mechanism.</p>
                      </div>
                    </Link>
                </div>
                
                <h2 className="text-[#C44558] font-[600] text-[24px] pt-3 pb-2 mt-4">AI Governance</h2>
                <div className="menu mt-6">
                  <Link  className="flex ">
                    <div className="w-[39px]">
                      <Brain color="#C44558" className="mt-[0px]"/>
                    </div>
                    <div>
                      <h3 className="text-[16px] font-primary font-[500] mt-0 text-[#1E1E1E]">Hybrid Agent Architecture</h3>
                  
                    </div>
                  </Link>
                  <Link  className="flex mt-3">
                    <div className="w-[39px]">
                      <Brain color="#C44558" className="mt-[0px]"/>
                    </div>
                    <div>
                      <h3 className="text-[16px] font-primary font-[500] mt-0 text-[#1E1E1E]">Agent Security</h3>
                  
                    </div>
                  </Link>
                  <Link className="flex  mt-3">
                    <div className="w-[39px]">
                      <Brain color="#C44558" className="mt-[0px]"/>
                    </div>
                    <div>
                      <h3 className="text-[16px] font-primary font-[500] mt-0 text-[#1E1E1E]">GenSecOps</h3>
                  
                    </div>
                  </Link>
                  <Link className="flex  mt-3">
                    <div className="w-[39px]">
                      <Brain color="#C44558" className="mt-[0px]"/>
                    </div>
                    <div>
                      <h3 className="text-[16px] font-primary font-[500] mt-0 text-[#1E1E1E]">GenDevOps</h3>
                  
                    </div>
                  </Link>
               
                </div>
                </div>

              </div>
              <div className="col-span-4  py-5 ">
                <button
                  onClick={() =>
                    setOpenSection(openSection === "Resources" ? null : "Resources")
                  }
                  className="w-full flex justify-between items-center"
                >
                  <h2 className="text-[#1E1E1E] text-left font-[600] text-[20px]">
                    Resources
                  </h2>
                  <span
                    className={`transition-transform duration-300 ${openSection === "Resources" ? "rotate-180" : ""
                      }`}
                  >
                      <svg className={`w-4 h-4 ${iconColor}`} viewBox="0 0 20 20" fill="#000">
                    <circle cx="3.25" cy="6" r="1.25" />
                    <circle cx="16.75" cy="6" r="1.25" />
                    <circle cx="5.75" cy="10" r="1.25" />
                    <circle cx="14.25" cy="10" r="1.25" />
                    <circle cx="10" cy="14" r="1.25" />
                  </svg>
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${openSection === "Resources"
                      ? "max-h-[8200px] opacity-100 mt-6"
                      : "max-h-0 opacity-0"
                    }`}
                >
                  <div>
                      <h2 className="text-[#C44558] font-[600] text-[24px]">Resources</h2>
                <div className="menu mt-6 ">
      
                    <Link to="/resources" className="flex gap-3">
                      <div className="w-[39px]">
                        <FileText color="#C44558" className="mt-[5px]"/>
                      </div>
                      <div>
                        <h3 className="text-[20px] font-primary font-[500] mt-0 text-[#1E1E1E]">Blog</h3>
                        <p className="text-[14px] text-[#797979] font-secondary font-[400]">Thought leadership on agents, AI testing, and reliability</p>
                      </div>
                    </Link>
                    <Link to="/resources" className="flex gap-3 mt-5">
                      <div className="w-[39px]">
                      <Layers color="#C44558" className="mt-[5px]"/>
                      </div>
                      <div>
                        <h3 className="text-[20px] font-primary font-[500] mt-0 text-[#1E1E1E]">Whitepapers</h3>
                        <p className="text-[14px] text-[#797979] font-secondary font-[400]">In-depth research and technical frameworks</p>
                      </div>
                    </Link>
                    <Link to="/resources" className="flex gap-3 mt-5">
                      <div className="w-[39px]">
                      <BriefcaseBusiness color="#C44558" className="mt-[5px]"/>
                      </div>
                      <div>
                        <h3 className="text-[20px] font-primary font-[500] mt-0 text-[#1E1E1E]">Case Studies</h3>
                        <p className="text-[14px] text-[#797979] font-secondary font-[400]">Lorem ipsum dolor sit amet consectetur. Sagittis ornare.</p>
                      </div>
                    </Link>
             
                    <Link to="/resources" className="flex gap-3 mt-5">
                      <div className="w-[39px]">
                        <ChartLine color="#C44558" className="mt-[5px]"/>
                      </div>
                      <div>
                        <h3 className="text-[20px] font-primary font-[500] mt-0 text-[#1E1E1E]">Benchmarks</h3>
                        <p className="text-[14px] text-[#797979] font-secondary font-[400]">Lorem ipsum dolor sit amet consectetur. Aenean consectetur.</p>
                      </div>
                    </Link>
                    <Link to="/resources" className="flex gap-3 mt-5">
                      <div className="w-[39px]">
                      <CirclePlay color="#C44558" className="mt-[5px]"/>
                      </div>
                      <div>
                        <h3 className="text-[20px] font-primary font-[500] mt-0 text-[#1E1E1E]">Webinars & Events</h3>
                        <p className="text-[14px] text-[#797979] font-secondary font-[400]">Lorem ipsum dolor sit amet consectetur. Neque ut tellus.</p>
                      </div>
                    </Link>
                    <Link to="/resources" className="flex gap-3 mt-5">
                      <div className="w-[39px]">
                      <CircleQuestionMark color="#C44558" className="mt-[5px]"/>
                      </div>
                      <div>
                        <h3 className="text-[20px] font-primary font-[500] mt-0 text-[#1E1E1E]">FAQs</h3>
                        <p className="text-[14px] text-[#797979] font-secondary font-[400]">Lorem ipsum dolor sit amet consectetur. Neque ut tellus.</p>
                      </div>
                    </Link>
                </div>
                   
                  </div>
                </div>

              </div>
              <div className="col-span-4  py-5">
                <Link 
                 to="/company"
                  className="w-full flex justify-between items-center"
                >
                  <h2 className="text-[#1E1E1E] font-[600] text-[20px]">
                   Company
                  </h2>
                 
                     
                </Link>

              

              </div>
              <div className="col-span-4  py-5">
                <Link
                to="/pricing"
              
                  className="w-full flex justify-between items-center"
                >
                  <h2 className="text-[#1E1E1E] font-[600] text-[20px]">
                   Pricing
                  </h2>
                 
                     
                </Link>

              

              </div>
              <div className="col-span-4">

              <div className=" p-px mt-[40px] w-[fit] rounded-lg bg-gradient-to-r from-[#C44558] via-[#FF7F7F] to-[#FF7F7F]">
            <Button
              btnText="Start Now"
                   href="/demo"
              className="bg-white text-[#C44558] px-6 py-4 rounded-lg"
              useCommonSvg
              />
              </div>
          </div>
     

              {/* <div className="col-span-1"></div> */}
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
}

export const NAVBAR_LINKS = [
  { label: "Platform", hasDropdown: true },
  { label: "Resources", hasDropdown: true },
  { label: "Company", hasDropdown: false, link:"/company" },
  { label: "Pricing", hasDropdown: false, link:"/pricing" },
];
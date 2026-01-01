export const AgenticArchitectureConfig = {
  heading: "Agentic Architecture",
//   subheading:"AIRITHM’s Unified Evaluation Hub for AI Quality",
  headclass:"pt-[0px]",
  paragraph:
    "Coordinated AI agents driving intelligent testing decisions.",
//   backgroundImage: "/bg/bg-gradient-four.jpg",
  buttons: [],
};


export const CORE_MODULE_CONFIG = {
   title: "Agent Design",
   bodyclass:"bg-[#fff] text-[#00273A] relative z-10 ",
   headcolor:"#00273A",
     paracolor:"#000",
  // subtitle:
  //   "",
    cards: [
    {
      id: 1,
      icon: "Route",
      textColor:"#000",
      iconColor: "",
        cardClassName: "w-[600px] bg-[#fff]",
      title: "Planning",
      discColor:'#626161',
      description:
        "Intelligent agents autonomously develop comprehensive test strategies, analyzing requirements and creating optimal execution plans with dynamic adaptation capabilities.",
    },
    {
      id: 2,
      icon: "Wrench",
      iconColor: "",
      cardClassName: "w-[600px] bg-[#fff]",
       textColor:"#000",
       discColor:'#626161',
      title: "Tool Usage",
      description:
        "Agents leverage advanced testing tools and frameworks, intelligently selecting and orchestrating the most appropriate resources for specific testing scenarios.",
    },
    {
      id: 3,
      icon: "Lightbulb",
      iconColor: "",
       textColor:"#000",
       cardClassName: "w-[600px] bg-[#fff]",
       discColor:'#626161',
      title: "Decision Autonomy",
      description:
        "Independent decision-making capabilities enable agents to adapt testing approaches in real time, prioritizing critical paths and optimizing coverage.",
    },
    {
      id: 4,
      icon: "MessageCircle",
      iconColor: "",
       textColor:"#000",
       cardClassName: "w-[600px] bg-[#fff]",
       discColor:'#626161',
      title: "Inter-agent Communication",
      description:
        "Seamless communication protocols allow agents to share insights, coordinate activities, and collectively enhance testing effectiveness through collaborative intelligence.",
    },
    
  ],
};
export const CORE_MODULE_CONFIG2 = {
   title: "Orchestration & Safety",
   bodyclass:true,
   headcolor:"#fff",
     paracolor:"#000",
  // subtitle:
  //   "",
    cards: [
    {
      id: 1,
      icon: "Route",
      textColor:"#fff",
      hasBg:false,
      bgColor:"linear-gradient(90deg, rgba(255, 166, 141, 0.15) 0.03%, rgba(253, 58, 132, 0.15) 100%)",
      iconColor: "",
        cardClassName: "w-[400px] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]",
      title: "Task Routing",
      discColor:'#D9D9D9',
      description:
        "Intelligent task distribution system that analyzes workload complexity, agent capabilities, and resource availability to optimize task allocation across the agent network. Dynamic load balancing ensures efficient utilization of system resources.",
    },
    {
      id: 2,
      icon: "Wrench",
      iconColor: "",
      cardClassName: "w-[400px] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]",
       textColor:"#fff",
       discColor:'#D9D9D9',
      title: "Failure Handling",
      description:
        "Robust error recovery mechanisms with automated rollback capabilities, graceful degradation strategies, and intelligent retry logic. Comprehensive logging and alerting systems ensure rapid issue identification and resolution.",
    },
    {
      id: 3,
      icon: "Lightbulb",
      iconColor: "",
       textColor:"#fff",
       cardClassName: "w-[400px] bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]",
       discColor:'#D9D9D9',
      title: "Guardrails & Controls",
      description:
        "Multi-layered security framework with behavioral constraints, permission boundaries, and compliance monitoring. Real-time governance ensures agents operate within defined parameters while maintaining operational flexibility.",
    }
    
  ],
};


export const PLANING_CTA_CONFIG = {
  heading: "Need Help?",
  paragraph:
    "Get Assistance with agentic architecture implementation",
  backgroundImage: "/bg/bg-gradient-four.jpg",
  wrapperClassName:"",
  buttons: [
  
    {
      text: "Contact Support",
      icon:"CircleArrowOutUpRight",
      className:
        "text-[16px]  min-w-[228px] py-5 px-4 font-primary font-medium leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white",
      href: "",
    },
  ],
};
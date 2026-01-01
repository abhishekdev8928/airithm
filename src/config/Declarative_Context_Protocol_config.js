
export const HEADER = {
  heading: "Declarative Context Protocol",
  headclass:true,
  paragraph:
    "Enterprise-grade governance framework for multiagent AI systems. Policy Driven context flow that ensures safety, auditability, and explainable AI operations",
//   backgroundImage: "/bg/bg-gradient-four.jpg",
  buttons: [
   {
  text: "Documentation",
  className:
    "py-5 px-6  font-primary font-medium text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#C44558] bg-white",
//   icon: "Eye",
  hoverIcon:true,
  iconSize: "20px",
  href: "",
},
{
  text: "View Policy Recipe",
  className:
    "text-[16px]  min-w-[228px] py-5 px-4 font-primary font-medium leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white",
  href: "",
  icon: "CircleArrowOutUpRight",
  iconSize: "20px",
}

  ],
};

export const CARD_CONFIG = {
    cards: [
      {
      id: 1,
      icon: "Server",
      textColor:"#C44558",
      discColor:'#626161 ',
      cardClassName: " h-[100%] md:w-[275px] w-[100%]",
      iconColor: "",
      title: "Authentication Layer",
      description:
        "Identify verification and access control",
    },
    {
      id: 2,
      icon: "ShieldCheck",
      iconColor: "",
        cardClassName: " h-[100%] md:w-[275px] w-[100%]",
   textColor:"#C44558",
      discColor:'#626161 ',
      title: "Validation Layer",
      description:
        "Policy compliance and data validation",
    },
    {
      id: 3,
      icon: "Maximize2",
      iconColor: "",
        cardClassName: " h-[100%] md:w-[275px] w-[100%]",
       textColor:"#C44558",
      discColor:'#626161 ',
      title: "Execution Layer",
      description:
        "Controlled context processing and routing",
    },
    {
      id: 4,
      icon: "Cpu",
        cardClassName: " h-[100%] md:w-[275px] w-[100%]",
      iconColor: "",
      textColor:"#C44558",
      discColor:'#626161 ',
      title: "Audit Layer",
      description:
        "Comprehensive logging and compliance tracking",
    },
   
  ],
};

export const KEY_FEATURE_CONFIG = {
   title: "Key Features",
   bodyclass:true,
    headclass:true,
  subtitle:
    "Comprehensive governance capabilities designed for enterprise-scale AI deployments ",
 cards: [
    {
      id: 1,
      icon: "Server",
      textColor:"#fff",
      iconColor: "",
      title: "Real-time synchronization",
      discColor:'#C6C6C6',
      description:
        "Ensure all distributed agents and device maintain accurate state awareness through continuous context updates",
    },
    {
      id: 2,
      icon: "ShieldCheck",
      iconColor: "",
       textColor:"#fff",
       discColor:'#C6C6C6',
      title: "Secure Federation",
      description:
        "Enable secure data sharing across organizational boundaries while maintaining privacy and control",
    },
    {
      id: 3,
      icon: "Maximize2",
      iconColor: "",
       textColor:"#fff",
       discColor:'#C6C6C6',
      title: "Event-driven AI",
      description:
        "Facilitate scalable intelligent behaviors across devices and systems through dynamic context awareness",
    }
  ],
};
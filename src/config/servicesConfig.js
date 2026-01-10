
export const REAL_TIME_CONTEXT_HEADER = {
  heading: "Real-time Context Distribution Across Federated Systems",
   headclass:true,
  paragraph:
    "Enable seamless synchronization of distributed agents, devices and subsystems with secure, scalable event- driven, and subsystems with secure, scalable event-driven AI behaviors acorss organizational boundaries.",
//   backgroundImage: "/bg/bg-gradient-four.jpg",
  buttons: [
   {
  text: "View Demo",
  className:
    "py-5 px-6 min-w-[228px] font-primary font-medium text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#C44558] bg-white",
  icon: "Eye",
  hoverIcon:false,
  iconSize: "20px",
  href: "",
},
{
  text: "Explore Module",
  className:
    "text-[16px]  min-w-[228px] py-5 px-4 font-primary font-medium leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white",
  href: "",
  icon: "CircleArrowOutUpRight",
  iconSize: "20px",
}

  ],
};




export const CORE_MODULE_CONFIG = {
   title: "What is Context <br class='hidden md:block' />Broadcasting & Federation ?",
   bodyclass:true,
   headcolor:"#fff",
   
  subtitle:
    "A revolutionary approach to real-time context distribution that enables AI agents, devices, and subsystems to maintain synchronized awareness while preserving organizational autonomy and security",
    cards: [
    {
      id: 1,
      linkIconSrc: "./svg/network.svg",
      textColor:"#fff",
      cardClassName:"bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] w-full sm:w-[340px]",
      iconColor: "",
      title: "Real-time synchronization",
      discColor:'#C6C6C6',
      description:
        "Ensure all distributed agents and device maintain accurate state awareness through continuous context updates",
    },
    {
      id: 2, 
      linkIconSrc: "./svg/shield-check.svg",
      iconColor: "",
       textColor:"#fff",
             cardClassName:"bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] w-full sm:w-[340px]",
       discColor:'#C6C6C6',
      title: "Secure Federation",
      description:
        "Enable secure data sharing across organizational boundaries while maintaining privacy and control",
    },
    {
      id: 3,
      linkIconSrc: "./svg/zap.svg",
      iconColor: "",
       textColor:"#fff",
             cardClassName:"bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] w-full sm:w-[340px]",
       discColor:'#C6C6C6',
      title: "Event-driven AI",
      description:
        "Facilitate scalable intelligent behaviors across devices and systems through dynamic context awareness",
    }
  ],
};

export const TIMELINE_SECTION_CONFIG = {
   title: "How it Works",
  subtitle:
    "Four key components work together to enable seamless context distribution",
 cards: [
   {
    id: 1,
    title: "Signal Generation",
    description:
      "Agents and devices generate context signals based on their current state and environmental changes",
    align: "right",
  },
  {
    id: 2,
    title: "Agent Coordination",
    description:
      "Distributed agents receive and process context updates to maintain synchronized awareness",
    align: "left",
  },
  {
    id: 3,
    title: "Federation Layer",
    description:
      "Secure federation protocols enable cross-organizational context sharing while preserving autonomy",
    align: "right",
  },
  {
    id: 4,
    title: "Channel Broadcasting",
    description:
      "Context updates are broadcast through secure channels to relevant subscribers in the network",
    align: "left",
  },
  ]

}
export const KEY_FEATURES_CONFIG = {
     title: "Key Features",
  subtitle:
    "Advanced capabilities for enterprise-grade context intelligence",
    bodyclass:"lg:rounded-t-[100px] rounded-t-[50px] border border-[1px] border-[#D9D9D9] mt-[90px]",
 
    cards: [
      {
      id: 1,
      icon: "Wifi",
      textColor:"#1E1E1E",
      discColor:'#626161 ',
      cardClassName: " md:w-[270px] w-[100%] ",
      iconColor: "",
      title: "Low-Latency Upadtes",
      description:
        "Sub-millisecond context propagation ensures real-time responsiveness across your entire network",
    },
    {
      id: 2,
      icon: "Expand",
      iconColor: "",
        cardClassName: " md:w-[270px] w-[100%] ",
   textColor:"#1E1E1E",
      discColor:'#626161 ',
      title: "Infinite Scalability",
      description:
        "Handle millions of agents and devices with our distributed architecture and intelligent load balancing",
    },
    {
      id: 3,
      icon: "ShieldHalf",
      iconColor: "",
        cardClassName: "  md:w-[270px] w-[100%] ",
       textColor:"#1E1E1E",
      discColor:'#626161 ',
      title: "Infinite Scalability",
      description:
        "Military-grade security protocals protect sensitive context data throughout the entire distribution chain",
    },
    {
      id: 4,
      icon: "Waypoints",
        cardClassName: "  md:w-[270px] w-[100%] ",
      iconColor: "",
      textColor:"#1E1E1E",
      discColor:'#626161 ',
      title: "High Performance",
      description:
        "AI-powered context routing ensures optimal delivery paths and minimal resource consumption",
    },
   
  ],
};
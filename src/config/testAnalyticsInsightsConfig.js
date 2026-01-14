export const TEST_ANALYTICS_INSIGHTS_HEADER_CONFIG = {
  heading: "Test Analytics & Insights",
  paragraph:
    "Turn test execution data into actionable insights with real-time dashboards and reporting.",
    headclass:false,
  buttons: [
    {
      text: "Request Demo",
      className:
        "py-5 px-6 min-w-[228px] font-primary font-[600] text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#C44558] bg-white",
      href: "",
        icon: "Play",
        hoverIcon:false

        
    },
    {
      text: "View Analytics",
      useCommonSvg:true,
      className: "py-5 min-w-[228px] px-6 font-primary font-[600] text-[16px] leading-[120%] rounded-lg text-white bg-primary-gradient flex items-center gap-2",
      href: "",
        icon: "CircleArrowOutUpRight",
    },
  ],
};



export  const ANALYTICS_TABS_CONFIG = [
  {
    id: "realtime-analytics",
    label: "Real-Time Analytics",
    iconSrc: "/svg/chart-line.svg",
    iconSize: 22,
  },
  {
    id: "automated-reporting",
    label: "Automated Reporting",
    iconSrc: "/svg/shield-check.svg",
    iconSize: 22,
  },
  {
    id: "ml-powered-insights",
    label: "ML-Powered Insights",
    iconSrc: "/svg/brain.svg",
    iconSize: 20,
  },
  {
    id: "risk-prediction",
    label: "Risk Prediction",
    iconSrc: "/svg/repeat-2.svg",
    iconSize: 22,
  },
];



export const TEST_ANALYTICS_STEPS_CONFIG = [
  {
    step: "1",
    title: "Data Collection",
    description:
      "Autonomously ingest test results, logs, and quality signals across environments and tools.",
  },
  {
    step: "2",
    title: "Data Processing",
    description:
      "Clean, normalize, and analyze data streams to ensure accurate and consistent insights.",
  },
  {
    step: "3",
    title: "Insight Generation",
    description:
      "Apply machine learning models to identify patterns, anomalies, and quality risks.",
  },
  {
    step: "4",
    title: "Reporting & Alerts",
    description:
      "Deliver actionable dashboards, reports, and real-time alerts to support informed decision-making.",
  },
];

export const TEST_ANALYTICS_INSIGHTS_CONFIG = {
  topRow: [
    {
      id: "testCoverage",
      iconName: "AlertCircle", 
      value: "95%", 
      description:
        "Test coverage visibility with gap identification and recommendations",
      cardClassName: "md:w-[293px] w-[100%]",
      iconWrapperClass: "text-[#C44558]",
      flag: {
        text: "Coverage",
        className: "bg-[#FDEDEE] rounded-[100px] py-2 px-3 text-[#C44558] font-inter font-medium text-[12px] leading-[140%] tracking-[0.04em]",
      },
    },
    {
      id: "fasterDeployments",
      iconName: "Rocket",
      value: "60%",
      description:
        "Reduce deployment time from hours to minutes with intelligent automation.",
      cardClassName: "md:w-[293px] w-[100%]",
      iconWrapperClass: "text-[#C44558]",
      flag: {
        text: "speed",
        className: "bg-[#FDEDEE] rounded-[100px] py-2 px-3 text-[#C44558] font-inter font-medium text-[12px] leading-[140%] tracking-[0.04em]",
      }
    },
    {
      id: "costReduction",
      iconName: "DollarSign",
      value: "40%",
      description:
        "Reduction in testing costs through automation and resource optimization Risk.",
      cardClassName: "md:w-[293px] w-[100%]",
      iconWrapperClass: "text-[#C44558]",
      flag: {
        text: "Cost",
        className: "bg-[#FDEDEE] rounded-[100px] py-2 px-3 text-[#C44558] font-inter font-medium text-[12px] leading-[140%] tracking-[0.04em]",
      }
    },
    {
      id: "riskMitigation",
      iconName: "TriangleAlert",
      value: "85%",
      description:
        "Early risk detection preventing production issues and downtime",
      cardClassName: "md:w-[293px] w-[100%]",
      iconWrapperClass: "text-[#C44558]",
      flag: {
        text:"Risk",
        className: "bg-[#FDEDEE] rounded-[100px] py-2 px-3 text-[#C44558] font-inter font-medium text-[12px] leading-[140%] tracking-[0.04em]",
      }
    },
  ],
};

export const TEST_ANALYTICS_USP_CONFIG = {
  title: "System Architecture",
  subtitle: "Deep dive into HAMN’s layered attention mechanism",
  bodyclass: true,

  cards: [
    {
      id: 1,
      icon: "MessageCircle",
      title: "CI/CD Pipeline Optimization",
      textColor: "#fff",
      discColor: "#C6C6C6",
      cardClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] md:w-[364px] w-[100%]",
      description:
        "Automatically optimize test execution during CI/CD pipelines to reduce build times and improve release velocity.",
     
    },

    {
      id: 2,
      icon: "FileText",
      title: "Predictive Quality Assurance",
      textColor: "#fff",
      discColor: "#C6C6C6",
      cardClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] md:w-[364px] w-[100%]",
      description:
        "AI analyzes historical test data and usage patterns to anticipate quality risks before they impact releases.",
     
    },

    {
      id: 3,
      icon: "CodeXml",
      title: "Resource Allocation",
      textColor: "#fff",
      discColor: "#C6C6C6",
      cardClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] md:w-[364px] w-[100%]",
      description:
        "Optimize testing resources by identifying high-risk areas and focusing efforts where they matter most.",
      
    },
  ],
};


export const TEST_ANALYTICS_CTA_CONFIG = {
  heading: "Ready to Transform Your Testing?",
  paragraph:
    "Join hundreds of engineering teams who trust our platform to deliver better software faster with data-driven insights.",
  backgroundImage: "/bg/bg-gradient-four.jpg",
  buttons: [
    {
      text: "Request Demo",
      className:
        "py-5 px-6 min-w-[253px]   font-primary font-semibold text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#C44558] bg-white",
      icon: "Play",
      hoverIcon: false,
      iconSize: "20px",
      href: "",
    },
    {
      text: "View Architecture",
      className:
        "text-[16px]  min-w-[228px] py-5 px-4 font-primary font-semibold leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white",
      href: "",
      icon: "CircleArrowOutUpRight",
      iconSize: "20px",
    },
  ],
};
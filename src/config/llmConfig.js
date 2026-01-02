export const LLM_BASED_EVALUATION_HEADER = {
  heading: "LLM Based Evaluation",
  headclass: "pt-[0px]",
  paragraph:
    "Automate and scale your AI model evaluation with intelligent, context-aware <br /> assessment frameworks.",
  buttons: [
    {
      text: "Request Demo",
      className:
        "py-5 px-6 min-w-[253px]  w-full font-primary font-semibold text-[16px]  leading-[1.2] tracking-[0%] rounded-lg text-[#C44558] bg-white",
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
export const LLM_BASED_FEATURES_CONFIG_ONE = {
  title: "What It Does",
  subtitle:
    "Our CI/CD platform seamlessly integrates with your existing development workflow to automate the entire software delivery lifecycle. From code commit to production deployment, we orchestrate testing, building, security scanning, and deployment with intelligent automation that learns from your team's patterns.",

  cards: [
    {
      id: 1,
      icon: "Search",
      iconColor: "#C44558", // icon white because hasBg is true
      title: "Automated Pipelines",
      description:
        "Trigger builds, tests, and deployments automatically on every commit. Smart parallel execution reduces wait times by up to 70%.",
      cardClassName: "w-[320px] bg-white min-h-[300px] border-[#D9D9D9]",
    },
    {
      id: 2,
      icon: "ChartSpline",
      iconColor: "#C44558",
      title: "Security First",
      description:
        "Built-in vulnerability scanning, compliance checks, and secret management ensure every deployment meets security standards.",
      cardClassName: "w-[320px] bg-white min-h-[300px] border-[#D9D9D9]",
    },
    {
      id: 3,
      icon: "Settings",
      iconColor: "#C44558",

      title: "Real-time Insights",
      description:
        "Monitor pipeline performance, deployment success rates, and team velocity with comprehensive analytics dashboards.",
      cardClassName: "w-[320px] bg-white min-h-[300px] border-[#D9D9D9]",
    },
  ],
};
export const LLM_BASED_WORKS_CONFIG = {
  heading: {
    title: "How It Works",
    subtitle:
      "A streamlined four-step process that transforms your evaluation workflow from manual to automated.",
  },
  steps: [
    {
      step: 1,
      title: "Data Input",
      description:
        "Upload your model outputs and reference datasets through our secure API or dashboard.",
    },
    {
      step: 2,
      title: "LLM Processing",
      description:
        "Our evaluation LLM analyzes content for accuracy, coherence, and task-specific criteria.",
    },
    {
      step: 3,
      title: "Score Generation",
      description:
        "Generate comprehensive scores and detailed feedback for each evaluation dimension.",
    },
    {
      step: 4,
      title: "Report Delivery",
      description:
        "Receive actionable insights and recommendations through detailed evaluation reports.",
    },
  ],
};
export const LLM_BASED_KEY_BENEFITS = [
  {
    id: "coverage",
    iconName: "ChartBar",
    iconSize: 40,
    value: "95%",
    percentage: 95,
    title: "Coverage",
    description: "Knowledge Capture From All Organizational Sources",
    iconWrapperClass: "bg-gradient-to-br from-pink-400 to-orange-400",
  },
  {
    id: "speed",
    iconName: "Zap",
    iconSize: 40,
    value: "10x",
    percentage: 10, // You can adjust this depending on how you want to represent "10x"
    title: "Speed",
    description: "Faster Information Retrieval And Decision Making",
    iconWrapperClass: "bg-gradient-to-br from-pink-400 to-orange-400",
  },
  {
    id: "cost",
    iconName: "DollarSign",
    iconSize: 40,
    value: "70%",
    percentage: 70,
    title: "Cost Reduction",
    description: "Lower Operational Overhead And Training Costs",
    iconWrapperClass: "bg-gradient-to-br from-pink-400 to-orange-400",
  },
  {
    id: "risk",
    iconName: "ShieldCheck",
    iconSize: 40,
    value: "99%",
    percentage: 99,
    title: "Risk Reduction",
    description: "Minimized Knowledge Loss And Compliance Gaps",
    iconWrapperClass: "bg-gradient-to-br from-pink-400 to-orange-400",
  },
];



export const LLM_BASED_USP_CONFIG = {
  title: "System Architecture",
  subtitle: "Deep dive into HAMN’s layered attention mechanism",
  bodyclass: true,

  cards: [
    {
      id: 1,
      icon: "MessageCircle",
      title: "Customer Support",
      textColor: "#fff",
      descriptionColor: "#C6C6C6",
      cardClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] w-[364px]",
      description:
        "Evaluate chatbot responses for accuracy, helpfulness, and customer satisfaction across thousands of support interactions.",
      points: {
        labels: ["Accuracy +25%"],
        showDisc: false, // ✅ disc visible
        textGradientColor:
          "linear-gradient(90deg, rgba(255,166,141,1) 0%, rgba(253,58,132,1) 100%)",
        discGradientColor:
          "linear-gradient(90deg, rgba(255,166,141,1) 0%, rgba(253,58,132,1) 100%)",
      },
    },

    {
      id: 2,
      icon: "FileText",
      title: "Content Generation",
      textColor: "#fff",
      descriptionColor: "#C6C6C6",
      cardClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] w-[364px]",
      description:
        "Assess generated marketing copy, articles, and documentation for quality, brand alignment, and engagement potential.",
      points: {
        labels: ["Quality +40%"],
        showDisc: false, // ❌ text only, no disc
        textGradientColor:
          "linear-gradient(90deg, rgba(255,166,141,1) 0%, rgba(253,58,132,1) 100%)",
      },
    },

    {
      id: 3,
      icon: "CodeXml",
      title: "Code Review",
      textColor: "#fff",
      descriptionColor: "#C6C6C6",
      cardClassName:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] w-[364px]",
      description:
        "Automatically evaluate AI-generated code for functionality, security, and best practices compliance.",
      points: {
        labels: ["Efficiency +60%"],
        showDisc: false,
        textGradientColor:
          "linear-gradient(90deg, rgba(255,166,141,1) 0%, rgba(253,58,132,1) 100%)",
        discGradientColor:
          "linear-gradient(90deg, rgba(255,166,141,1) 0%, rgba(253,58,132,1) 100%)",
      },
    },
  ],
};

export const LLM_BASED_CTA_CONFIG = {
  heading: "Ready to Transform Your Evaluation Process?",
  paragraph:
    "Join leading AI teams who trust our platform for comprehensive, <br /> automated model evaluation.",
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

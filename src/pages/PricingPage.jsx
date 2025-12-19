import MainBanner from "../components/services/MainBanner";
import Navbar from "@/components/Navbar.jsx";
import PricingCard from "../components/card/PricingCard";
import CtaSection from "@/components/common/CtaSection";
import FooterSection from "@/components/home/FooterSection";
const PRICING_HEADER_CONFIG = {
  heading: "Flexible Pricing for <br /> Autonomous Testing",
  paragraph:
    "Plans designed to scale from pilot teams to enterprise-wide autonomy.",
  buttons: [],
};

export const PLANING_CTA_CONFIG = {
  heading: "Not sure which plan fits your needs?",
  paragraph:
    "We’re looking for exceptional engineers, designers, and thinkers who want to <br /> solve hard problems and redefine what’s possible in software quality.",
  backgroundImage: "/bg/bg-gradient-four.jpg",
  buttons: [
    {
      text: "Schedule Architecture Review",
      className:
        "px-9 py-5 min-w-[228px] font-primary font-medium leading-[1.2] text-[16px] tracking-[0.02em] text-[#C44558] bg-white rounded-lg flex items-center gap-2",
      href: "",
    },
    {
      text: "Contact Sales",
      className:
        "text-[16px]  min-w-[228px] py-5 px-4 font-primary font-medium leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white",
      href: "",
    },
  ],
};
const PricingPage = () => {
  return (
    <>
      <Navbar />
      <section
        className="bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)] pb-[200px] pt-[140px]    mt-[104px] rounded-t-[50px]  text-white
"
      >
        <div className="max-w-7xl mx-auto">
          <MainBanner data={PRICING_HEADER_CONFIG} />
          <div className="flex items-center gap-4 mt-8">
            {PRICING_CONFIG.cards.map((pricing) => (
              <PricingCard {...pricing} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection wrapperClassName="mt-[-100px]" {...PLANING_CTA_CONFIG} />

      <FooterSection />
    </>
  );
};

export const PRICING_CONFIG = {
  sectionTitle: "Pricing",
  cards: [
    {
      id: "starter",
      title: "Starter",
      subtitle: "For small teams & pilots",
      size: "w-[400px] min-h-[400px]",
      features: [
        "Core autonomous test generation",
        "Limited agent execution",
        "Standard analytics",
        "Community support",
      ],
      cta: {
        text: "Get Started",
        bgClass: "bg-[#1E1E1E]",
      },
    },
    {
      id: "growth",
      title: "Growth",
      subtitle: "For scaling engineering teams",
      svgImgPath: "/svg/gradient-check.svg",
      size: "w-[400px] min-h-[420px]",
      badge: "Most Popular",
      highlight: true,
      features: [
        "Full agentic execution",
        "Self-LLM-based evaluation test scripts",
        "CI/CD integrations",
        "Advanced analytics",
        "Email & Slack support",
      ],
      cta: {
        text: "Request Demo",
        bgClass:
          "bg-[linear-gradient(85.9deg,_#C44558_62.74%,_#FF7F7F_95.09%)]",
      },
    },
    {
      id: "scale",
      title: "Scale",
      subtitle: "For platform & AI teams",
      size: "w-[400px] min-h-[400px]",
      features: [
        "Unlimited agents",
        "AI testing & RAG validation",
        "Governance & audit logs",
        "Role-based access",
        "Priority support",
      ],
      cta: {
        text: "Talk to Sales",
        bgClass: "bg-[#1E1E1E]",
      },
    },
  ],
};

export default PricingPage;

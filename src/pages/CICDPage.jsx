import InfoCard from "../components/card/InfoCard";
import InsightCard from "../components/card/InsightCard";
import SectionHeading from "../components/common/SectionHeading";
import Navbar from "../components/Navbar";
import MainBanner from "../components/services/MainBanner";
import FeatureCard from "@/components/card/FeaturedCard";
import FooterSection from "@/components/home/FooterSection";
const CICDPage = () => {
  return (
    <>
      <Navbar initialTextColor="black" />

      <section>
        <div className="bg-gradient-primary py-[100px] mt-[104px] text-white rounded-[50px]">
          <div
            className="mx-auto mb-8 w-fit rounded-full px-6 py-2
  backdrop-blur-md
  bg-linear-to-r from-white/10 via-white/5 to-white/10
  border border-white/20
  shadow-[0_0_20px_rgba(255,255,255,0.08)]
"
          >
            <span className="font-inter font-medium text-[12px] leading-[1.4] tracking-[0.04em] mae-gradient-text">
              Automated Pipeline Excellence
            </span>
          </div>

          <MainBanner data={AUTOMATION_PIPELINE_HEADER} />

          <div className="llm-based-feature flex-wrap gap-10 md:gap-20  pt-[60px] flex justify-center items-center">
            <div className="flex gap-2 items-center">
              <img src="/svg/circle-check-lg.svg" alt="" />
              <span className="mae-gradient-text font-secondary font-medium text-sm leading-[1.4] tracking-[0.04em] capitalize">
                Zero-downtime deployments
              </span>
            </div>

            <div className="flex gap-2 items-center">
              <img src="/svg/circle-check-lg.svg" alt="" />
              <span className="mae-gradient-text font-secondary font-medium text-sm leading-[1.4] tracking-[0.04em] capitalize">
                Enterprise-grade security
              </span>
            </div>

            <div className="flex gap-2 items-center">
              <img src="/svg/circle-check-lg.svg" alt="" />
              <span className="mae-gradient-text font-secondary font-medium text-sm leading-[1.4] tracking-[0.04em] capitalize">
                {" "}
                Multi-cloud support
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative  z-2 ">
        <img src="/svg/ellipse.svg" className="absolute  left-0" alt="" />

        <img
          src="/svg/ellipse-bottom.svg"
          className="absolute bottom-[-200px] right-0"
          alt=""
        />

        {/* Content */}
        <div
          className="relative px-4 sm:px-0 w-full gap-10 commmunity-section section-overlap
    flex-col justify-center flex items-center mt-[-100px] z-10"
        >
          <div className="max-w-7xl relative">
            <SectionHeading
              subtitle={
                AUTOMATION_PIPELINE_FEATURES_CONFIG?.subtitle || "Not Provided"
              }
              subtitleClassName="font-secondary max-w-[760px] text-[#626161]"
              titleClassName="font-primary text-[#00273A] capitalize"
              title={
                AUTOMATION_PIPELINE_FEATURES_CONFIG?.title || "Not Provided"
              }
              spacing="space-y-4"
            />

            <div className="flex flex-wrap gap-6 pt-10 justify-center max-w-7xl mx-auto">
              {AUTOMATION_PIPELINE_FEATURES_CONFIG?.cards?.map((item) => (
                <FeatureCard {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="py-[100px]">
          <SectionHeading
            subtitle="
Measurable improvements across your entire development lifecycle.       "
            subtitleClassName=" font-secondary text-[#626161]"
            titleClassName="font-primary   text-[#00273A] captialize"
            title="Key Benefits"
            wrapperClassName=""
            spacing="space-y-4"
          />

          <div className="flex pt-[60px]  flex-wrap gap-6 justify-center">
            {INSIGHTS_DATA?.topRow?.map((item) => (
              <InsightCard key={item?.id} {...item} />
            ))}
          </div>
          <div className="flex pt-[60px]  flex-wrap gap-6 justify-center">
            {INSIGHTS_DATA?.bottomRow.map((item) => (
              <InfoCard key={item?.id} {...item} />
            ))}
          </div>
        </div>
      </section>
      <FooterSection/>
      
    </>
  );
};

export default CICDPage;

export const AUTOMATION_PIPELINE_HEADER = {
  heading: "CI/CD & DevOps <br class='hidden md:block' /> Integration",
  headclass: false,
  paragraph:
    "Streamline your development workflow with intelligent automation that accelerates <br class='hidden md:block' /> delivery while maintaining code quality and security.",
  buttons: [
    {
      text: "Request Demo",
      className:
        "py-5 px-6 min-w-[253px] w-full font-primary font-semibold text-[16px] leading-[1.2] tracking-[0%] rounded-lg text-[#C44558] bg-white",
      icon: "Play",
      hoverIcon: false,
      iconSize: "20px",
      href: "",
    },
    {
      text: "View Architecture",
      className:
        "text-[16px] min-w-[228px] py-5 px-4 font-primary font-semibold leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white",
      href: "",
      icon: "CircleArrowOutUpRight",
      iconSize: "20px",
    },
  ],
};

export const AUTOMATION_PIPELINE_FEATURES_CONFIG = {
  title: "What It Does",
  subtitle:
    "Our CI/CD platform seamlessly integrates with your existing development workflow to automate the entire software delivery lifecycle. From code commit to production deployment, we orchestrate testing, building, security scanning, and deployment with intelligent automation that learns from your team's patterns.",

  cards: [
    {
      id: 1,
      icon: "GitCommitHorizontal",
      iconColor: "#C44558",
      title: "Automated Pipelines",
      description:
        "Trigger builds, tests, and deployments automatically on every commit. Smart parallel execution reduces wait times by up to 70%.",
      cardClassName: "w-[320px] bg-white min-h-[300px] border-[#D9D9D9]",
    },
    {
      id: 2,
      icon: "ShieldCheck",
      iconColor: "#C44558",
      title: "Security First",
      description:
        "Built-in vulnerability scanning, compliance checks, and secret management ensure every deployment meets security standards.",
      cardClassName: "w-[320px] bg-white min-h-[300px] border-[#D9D9D9]",
    },
    {
      id: 3,
      icon: "Clock",
      iconColor: "#C44558",
      title: "Real-Time Insights",
      description:
        "Monitor pipeline performance, deployment success rates, and team velocity with comprehensive analytics dashboards.",
      cardClassName: "w-[320px] bg-white min-h-[300px] border-[#D9D9D9]",
    },
  ],
};


export const INSIGHTS_DATA = {
  topRow: [
    {
      id: "testCoverage",
      iconName: "ChartSpline",
      value: "98%",
      label: "Test Coverage",
      description:
        "Comprehensive automated testing ensures code quality with near-perfect coverage.",
      cardClassName: "w-[293px]",
      iconWrapperClass: "text-[#C44558]",
    },
    {
      id: "fasterDeployments",
      iconName: "Zap",
      value: "5×",
      label: "Faster Deployments",
      description:
        "Reduce deployment time from hours to minutes with intelligent automation.",
      cardClassName: "w-[293px]",
      iconWrapperClass: "text-[#C44558]",
    },
    {
      id: "costReduction",
      iconName: "PiggyBank",
      value: "40%",
      label: "Cost Reduction",
      description:
        "Lower infrastructure costs through optimized resource utilization and efficiency.",
      cardClassName: "w-[293px]",
      iconWrapperClass: "text-[#C44558]",
    },
    {
      id: "riskMitigation",
      iconName: "AlertCircle",
      value: "99.9%",
      label: "Risk Mitigation",
      description:
        "Automated rollbacks and canary deployments minimize production incidents.",
      cardClassName: "w-[293px]",
      iconWrapperClass: "text-[#C44558]",
    },
  ],
  bottomRow: [
    {
      id: "timeToMarket",
      iconName: "Clock",
      label: "Time To Market",
      description:
        "Ship features 3× faster with automated pipelines and continuous delivery.",
      cardClassName: "w-[360px] bg-[#F9F9F9]",
      iconWrapperClass: "text-[#C44558]",
    },
    {
      id: "teamProductivity",
      iconName: "Users",
      label: "Team Productivity",
      description:
        "Developers focus on coding while automation handles deployment complexity.",
      cardClassName: "w-[360px] bg-[#F9F9F9]",
      iconWrapperClass: "text-[#C44558]",
    },
    {
      id: "qualityAssurance",
      iconName: "CheckSquare",
      label: "Quality Assurance",
      description:
        "Catch bugs early with automated testing at every stage of the pipeline.",
      cardClassName: "w-[360px] bg-[#F9F9F9]",
      iconWrapperClass: "text-[#C44558]",
    },
  ],
};

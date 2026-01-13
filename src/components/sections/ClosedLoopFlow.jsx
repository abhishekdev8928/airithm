import React from "react";
import SectionHeading from "../common/SectionHeading";
import { RotateCcw } from "lucide-react";

const FLOW_STEPS = [
  {
    step: 1,
    title: "Context Intelligence",
    desc: [
      "Maintains Semantic & Temporal Memory",
      "Enables Context-Rich Understanding",
    ],
  },
  {
    step: 2,
    title: "Autonomous Testing",
    desc: [
      "Generates And Executes Tests",
      "Evaluates Outcomes With Agents",
    ],
  },
  {
    step: 3,
    title: "Evidence & Signals",
    tags: ["Failures", "Anomalies", "Drift", "Regressions"],
  },
  {
    step: 4,
    title: "Regressions",
    desc: [
      "Graph Enrichment",
      "Memory Reinforcement",
      "Relationship Refinement",
    ],
  },
];

const ClosedLoopFlow = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-5xl mx-auto px-4 text-center">

        <div className="max-w-[800px] mx-auto">
            <SectionHeading

        spacing="space-y-4"

        title="Closed–Loop Intelligence Flow"

        titleClassName=" text-[#00273A]
"
subtitleClassName="text-[#626161]
"
        subtitle="Our CI/CD platform seamlessly integrates with your existing development workflow to automate the entire software delivery lifecycle. From code commit to production deployment, we orchestrate testing, building, security scanning, and deployment with intelligent automation that learns from your team's patterns."
        
        />
        </div>
       

        {/* Flow */}
        <div className="md:mt-20 mt-12 px-6 max-w-2xl mx-auto shadow-[0px_0px_8px_4px_#C4455880] rounded-[24px] py-[50px] flex flex-col items-center gap-8 relative">
          {FLOW_STEPS.map((item, idx) => (
            <div key={idx} className="relative  flex flex-col items-center">
              {/* Step Badge */}
              <div className="absolute -top-4 flex size-[32px] items-center justify-center rounded-full bg-gradient-to-r from-[#FFA68D] via-[#FD3A84] to-[#FD3A84]
                font-secondary font-medium text-[14px] leading-[1.4] tracking-[0.04em]
                text-white">
                {item.step}
              </div>

              {/* Card */}
              <div className="md:w-[360px] w-[100%] space-y-2 rounded-2xl border-light-lg bg-white p-5 shadow-sm">
                <h3 className="font-primary font-medium text-[20px] leading-[1.2] tracking-[0.02em] text-center capitalize
 text-[#1e1e1e">
                  {item.title}
                </h3>

                {item.desc && (
                  <ul className="mt-3  text-sm text-slate-500">
                    {item.desc.map((d, i) => (
                      <li className="font-secondary text-[#626161] font-medium text-[14px] leading-[1.4] tracking-[0.02em] text-center capitalize
" key={i}>{d}</li>
                    ))}
                  </ul>
                )}

                {item.tags && (
                  <div className="mt-4 grid md:grid-cols-2  gap-3">
                    {item.tags.map((tag, i) => (
                      <div
                        key={i}
                        className="font-primary p-4 font-medium text-[14px] leading-none tracking-[0.02em] capitalize
                          bg-gradient-to-r from-[rgba(255,166,141,0.12)] text-[#C44558] to-[rgba(253,58,132,0.12)]
                          "
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Arrow */}
              {idx !== FLOW_STEPS.length - 1 && (
               <img src="/svg/arrow.svg" alt="" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="md:mt-16 mt-10 py-2 px-4 inline-flex items-center gap-2 rounded-full font-secondary font-medium bg-gradient-to-r from-[rgba(255,166,141,0.1)] to-[rgba(253,58,132,0.1)]
 text-[12px] text-[#C44558] leading-[1.4] tracking-[0.04em]
">
          <RotateCcw size={20} color="#C44558" /> Automated Pipeline Excellence
        </div>
      </div>
    </section>
  );
};

export default ClosedLoopFlow;

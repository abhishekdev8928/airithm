import * as LucideIcons from "lucide-react";
import { ArrowUpRight } from "lucide-react";

export const features = [
  {
    title: "Autonomous Test Generation",
    desc: "Automatically creates comprehensive test suites using AI-powered analysis of your application.",
    icon: "Bot",
    iconSize: 28,
  },
  {
    title: "Intelligent Test Execution",
    desc: "Lorem ipsum dolor sit amet consectetur. Gravida netus lacus gravida tincidunt aliquet tincidunt at risus. Cursus hac odio egestas at integer.",
    icon: "Play",
    iconSize: 28,
    col: "lg:col-span-2",
  },
  {
    title: "LLM-Based Evaluation",
    desc: "Advanced language model evaluation for complex testing scenarios and edge cases.",
    icon: "Brain",
    iconSize: 28,
  },
  {
    title: "Self-Healing Tests",
    desc: "Automatically adapt and repair test scripts when application changes are detected.",
    icon: "Shield",
    iconSize: 28,
  },
  {
    title: "Continuous Learning Engine",
    desc: "Machine learning algorithms that improve testing accuracy and efficiency over time.",
    icon: "GraduationCap",
    iconSize: 28,
  },
  {
    title: "Test Analytics & Insights",
    desc: "Lorem ipsum dolor sit amet consectetur. Accumsan sit enim quis amet mi semper luctus augue.",
    icon: "BarChart3",
    iconSize: 28,
    col: "lg:col-span-2",
  },
  {
    title: "CI/CD & DevOps Integration",
    desc: "Seamless integration with your existing development and deployment pipelines.",
    icon: "GitBranch",
    iconSize: 28,
  },
];





export default function FeatureGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-flow-dense">
        {features.map((item, i) => {
          const Icon = LucideIcons[item.icon];

          return (
            <div
              key={i}
              className={`
                rounded-2xl border  border-light-sm bg-white
                p-5 flex flex-col justify-between
                transition-shadow duration-300
  hover:shadow-[0px_0px_40px_2px_#C4455840] space-y-6 bg-white
                ${item.col ?? ""}
              `}
            >
              {/* Icon */}
              {Icon && (
                <Icon
                  size={item.iconSize}
                  className="text-[#C44558] mb-4"
                />
              )}

              {/* Content */}
              <div className="space-y-3 flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="font-inter font-medium text-[#626161] text-[14px] leading-[1.2] tracking-[0.04em]
">
                  {item.desc}
                </p>
              </div>

              {/* CTA */}
              <div className=" ">
                <a
                  href="#"
                  className=" flex items-center gap-2.5 font-primary text-[#C44558] font-semibold text-[16px] leading-[1.2] tracking-[0]
"
                >
                  Learn More
                  <LucideIcons.CircleArrowOutUpRight size="20" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

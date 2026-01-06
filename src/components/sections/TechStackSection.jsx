import { BarChart3 } from "lucide-react";

function TechStackGrid() {
  const stackItems = [
    { src: "/stack/Python.png", alt: "Python" },
    { src: "/stack/Typescript.png", alt: "TypeScript" },
    { src: "/stack/Js.png", alt: "JavaScript" },
    { src: "/stack/Atom.png", alt: "React" },
  ];

  return (
    <div className="w-full h-full rounded-3xl bg-gradient-to-b from-[#042539] to-black p-6 md:p-10 flex flex-col gap-6">

      {/* TOP GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stackItems.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md aspect-square"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="size-[64px]  object-contain"
            />
          </div>
        ))}
      </div>

      {/* BOTTOM */}
      <div className="flex gap-10 items-start">
        {/* Webhook */}
        <div className=" rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center">
          <img
            src="/stack/webhook.png"
            alt="Webhook"
            className="w-[200px] object-contain"
          />
        </div>

        {/* Chart */}
        <div className="size-[144px] rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
          <BarChart3 className="text-white size-[100px]" />
        </div>
      </div>
    </div>
  );
}


export default function TechStackSection() {
  return (
    <div className="max-w-7xl mx-auto pt-16 px-4">
      <div className="flex flex-col md:flex-row  gap-6 items-stretch">

        {/* LEFT — MUST BE RELATIVE */}
        <div className="w-1/2 relative rounded-3xl overflow-hidden">
          <img
            src="/topics/api-call.png"
            alt="API Call"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT — DEFINES HEIGHT */}
        <div className="w-1/2">
          <TechStackGrid />
        </div>

      </div>
    </div>
  );
}



import SectionHeading from "../common/SectionHeading";

export default function ArchitectureDiagram() {
  const layers = [
    "Memory Layer (Episodic + Semantic)",
    "HAMN Routing Engine",
    "Capsule Engine",
    "LLM-Based Execution Layer",
    "Federated Signals Mesh",
    "Reflection Loop",
    "Governance Layer Wrapped Around Entire Structure",
  ];

  return (
   
      <div className="relative w-full space-y-10   mt-[-100px] py-[100px]  bg-white rounded-[100px] ">
        
        {/* Title */}
       <SectionHeading title="End-to-End Architecture Diagram" titleClassName="text-[#00273A]" />

       <div>
         {/* API Gateway */}
        <div className="flex justify-center mb-4">
          <div className="w-full max-w-[450px] py-6 rounded-3xl bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]
 text-white text-center font-primary font-medium text-[36px] leading-[1.2] tracking-[0.02em] capitalize
">
            API Gateway
          </div>
        </div>

        {/* Layers */}
        <div className="flex flex-col items-center gap-4">
          {layers.map((layer, index) => (
            <div
              key={index}
              className="w-full max-w-[450px] py-4 px-6 rounded-3xl border border-[#626161]  font-dm-sans font-medium text-[24px] leading-[120%] tracking-[0.02em] text-[#626161] text-center capitalize
"
            >
              {layer}
            </div>
          ))}
        </div>
       </div>

       
     
    </div>
  );
}

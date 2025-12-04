
import * as LucideIcon from "lucide-react";


function LifeCycleCard({ title, description, icon }) {
  const IconComponet = LucideIcon[icon];
  return (
    <div className="lifecycle-card w-60 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] p-4 rounded-2xl">
      <div className="size-[50px] flex justify-center items-center rounded-sm bg-[#C44558]">
        <IconComponet size="28" className="text-white" />
      </div>

      <div className="lifecycle-card-content pt-10 space-y-4 leading-[1.4] text-white">
        <h4 className="text-dmsans-24 font-medium ">{title}</h4>

        <p className="text-inter-16 font-medium ">{description}</p>
      </div>
    </div>
  );
}




export default LifeCycleCard;
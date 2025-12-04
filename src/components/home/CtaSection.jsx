
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/common/SectionHeading"

const CtaSection = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage: 'url("/bg/bg-gradient-two.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="rounded-[100px] bg-img-overlay section-wrapper z-11 overflow-hidden  w-full relative"
      >
       <div className="max-w-7xl mx-auto relative z-14 ">


        <div className="overlay-content backdrop-blur-[100px] mx-6 space-y-6 flex flex-col items-center p-20 rounded-[40px] border border-white cta-banner-content  relative z-13">
          
            <SectionHeading titleClassName="section-title font-medium leading-[1.2] text-white" title="Ready to modernize your testing?" />

            <Button
              btnText="Talk to sales"
              className="py-5  shadow-[0px_2px_4px_0px_#00000029,0px_8px_8px_0px_#00000024,0px_17px_10px_0px_#00000014,0px_30px_12px_0px_#00000005,0px_47px_13px_0px_#00000000] font-dm-sans bg-primary-gradient capitalize font-bold text-[20px] leading-[1.2] rounded-lg px-10 text-white gap-2.5 "
              iconSize="20px"
              icon="CircleArrowOutUpRight"
            />
          </div>

         <div className="w-full py-[100px] flex flex-col md:flex-row items-center md:items-start gap-10">
  
  {/* LEFT SIDE */}
  <div className="w-full md:w-[700px]">
    <h3 className="section-title mb-5 text-white">
      Happy testers are 1.4x more likely to adopt advanced automation.
      Here’s why it matters.
    </h3>

    <Button
      btnText="Download 2025 Report"
      className="py-5 custom-btn-text text-[#C44558] px-10 bg-white"
      iconSize="20px"
      icon="Download"
    />
  </div>

  {/* RIGHT SIDE */}
  <div className="w-full md:w-[490px] flex justify-center md:justify-end">
    <img
      className="max-w-full h-auto object-contain"
      src="./home/soq-banner.png"
      alt=""
    />
  </div>
</div>

        </div>
       
      </div>
    </section>
  );
};

export default CtaSection;

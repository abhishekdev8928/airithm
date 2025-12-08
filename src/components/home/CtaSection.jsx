
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
        className="rounded-[50px] px-4 sm:px-0 sm:rounded-[100px] bg-img-overlay section-wrapper z-11 overflow-hidden  w-full relative"
      >
       <div className="max-w-7xl mx-auto sm:px-[24px] relative z-14 ">


        <div className="overlay-content backdrop-blur-[100px]  sm:mx-0 space-y-6 justify-center flex flex-col items-center sm:p-20 w-full h-[350px] sm:h-auto sm:max-w-full rounded-[40px] border border-white cta-banner-content  relative z-13">
          
          <SectionHeading
  titleClassName="font-primary font-medium text-white text-[32px] sm:text-[48px] leading-[1.2] tracking-[0.02em]"
  title="Ready to modernize <br class='sm:hidden' /> your testing?"
/>


            <Button
              btnText="Talk to sales"
              className="py-5  shadow-[0px_2px_4px_0px_#00000029,0px_8px_8px_0px_#00000024,0px_17px_10px_0px_#00000014,0px_30px_12px_0px_#00000005,0px_47px_13px_0px_#00000000] font-primary bg-primary-gradient capitalize font-bold text-[20px] leading-[1.2] rounded-lg px-10 text-white gap-2.5 "
              iconSize="20px"
              icon="CircleArrowOutUpRight"
            />
          </div>

         <div className="w-full py-[100px] flex flex-col md:flex-row items-center gap-20 md:items-start sm:gap-10">
  
  {/* LEFT SIDE */}
  <div className="w-full  md:max-w-[700px]">
    <h3 className="font-primary font-medium text-center sm:text-left text-white text-[32px] sm:text-[40px] leading-[1.2] tracking-[0.02em] mb-5">
  Happy testers are 1.4x more likely to adopt advanced automation.
  Here’s why it matters.
</h3>


    <Button
      btnText="Download 2025 Report"
      className="py-5 mx-auto sm:mx-0 custom-btn-text text-[#C44558] px-10 bg-white"
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

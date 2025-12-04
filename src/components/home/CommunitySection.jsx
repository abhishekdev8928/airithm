import React from "react";
import Button from "@/components/ui/Button";
import { SectionIcon } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
const CommunitySection = () => {
  return (
    <section>
      <div
        className="relative bg-img-overlay  w-full gap-10 commmunity-section section-overlap flex-col justify-center flex items-center mt-[-100px] z-5"
        style={{
          backgroundImage: 'url("/bg/gradient.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl py-[60px] relative z-[14]">
          {/* <div className="relative z-12 max-w-[1000px] mx-auto">
              <h2 className="section-heading  text-center text-white">
                Your community advantage
              </h2>
              <p className="section-subheading pt-2 text-[24px] text-[#DADADA]">
                Join the world's largest automated software testing product
                community.
                <br />
                Collaborate with 120,301 testing pros like you. Ask questions,
                get answers.
              </p>
            </div> */}

          <SectionHeading
            subtitle="Join the world's largest automated software testing product community. <br> Collaborate with 120,301 testing pros like you. Ask questions, get answers."
            subtitleClassName="section-subtitle text-[#DADADA]"
            titleClassName=" section-title text-white captialize"
            title="Your community advantage "
          />

          <div className="communtiy-group-btn mx-auto  flex justify-center items-center mt-6 gap-6">
            <Button
              btnText="Meet the community"
              className="py-5 custom-btn-text text-[#C44558] px-10 bg-white "
              iconSize="20px"
              icon="CircleArrowOutUpRight"
            />

            <Button
              btnText="Free Training"
              className="py-5 custom-btn-text bg-primary-gradient rounded   px-10 text-white "
              iconSize="20px"
              icon="CircleArrowOutUpRight"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;

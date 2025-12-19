import React from "react";
const FooterSection = () => {
  return (
    <footer
      className="w-full text-white"
      style={{
        background: "linear-gradient(180deg, #042539 0%, #000000 100%)",
      }}
    >
      <div className="px-10 py-12">
        
        {/* MAIN WRAPPER */}
        <div className=" flex justify-between flex-wrap lg:flex-nowrap gap-12 ">
          
          {/* LEFT TEXT BLOCK */}
          <div className="text-inter-16 leading-[1.2] max-w-[247px] flex-shrink-0">
            Critical Flows Often Go Untested Because Automation Focuses On
            What’s Documented, Not What Human And.
          </div>

          {/* RIGHT NAVIGATION BLOCK */}
          <div className="flex  flex-wrap    gap-10 text-[14px] leading-[22px]">
            
            {/* Column 1 */}
            <div className="flex  flex-col gap-4 w-[150px]">
              <h4 className="text-inter-16 font-semibold leading-[1.2]">
                Platform
              </h4>
              <ul className="space-y-3.5 text-inter-16">
                <li>Test Studio</li>
                <li>Fore Sight</li>
                <li>Detect</li>
                <li>Integration</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4 w-[150px]">
              <h4 className="text-inter-16 font-semibold leading-[1.2]">
                Solutions
              </h4>
              <ul className="space-y-3.5 text-inter-16">
                <li>By Role</li>
                <li>By Industry</li>
                <li>By Use Case</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4 w-[150px]">
              <h4 className="text-inter-16 font-semibold leading-[1.2]">
                Resources
              </h4>
              <ul className="space-y-3.5 text-inter-16">
                <li>Blog</li>
                <li>Case Studies</li>
                <li>Community Forum</li>
                <li>Whitepapers & Ebooks</li>
                <li>Webinars & Videos</li>
                <li>Documentation</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-4 w-[150px]">
              <h4 className="text-inter-16 font-semibold leading-[1.2]">
                Support
              </h4>
              <ul className="space-y-3.5 text-inter-16">
                <li>Documentation</li>
                <li>Sample Projects On Github</li>
                <li>Technical Support</li>
                <li>Training & Certification</li>
                <li>Community Forum</li>
              </ul>
            </div>

            {/* Column 5 */}
            <div className="flex flex-col gap-4 w-[150px]">
              <h4 className="text-inter-16 font-semibold leading-[1.2]">
                Company
              </h4>
              <ul className="space-y-3.5 text-inter-16 text-white/90">
                <li>About Airithm</li>
                <li>Careers</li>
                <li>Events</li>
                <li>News</li>
                <li>Partners</li>
              </ul>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="max-w-[1440px] mx-auto mt-[60px] text-[#FFF9F9] text-[14px]">
          Copyright © 2025
        </div>
      </div>

      {/* SVG WAVE */}
      <div className="w-full overflow-hidden">
        <img
          src="./svg/footer-airithm-logo.svg"
          alt="footer shape"
          className="w-full"
        />
      </div>
    </footer>
  );
};




export default FooterSection;

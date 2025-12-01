import { BadgeCheck } from "lucide-react";
import CoreFeatureSection from "./components/card/CoreFeatureSection";
import Button from "./components/ui/Button.jsx";

import { platformShowcaseConfig } from "./config/constant.js";
const App = () => {
  return (
    <>
      <div className="relative">
        <CoreFeatureSection />

        <div className="platform-section pb-[140px] bg-white relative z-10 rounded-[100px]  ">
          <div className="platform-into py-[94px]  text-center flex gap-2 flex-col ">
            <h2 className="title-primary">
              {platformShowcaseConfig.section.title}
            </h2>
            <p className="font-inter text-[--color-gray] font-medium text-[18px] leading-[140%] tracking-[2%] text-center mx-auto capitalize w-[740px]">
              {platformShowcaseConfig.section.subtitle}{" "}
            </p>
          </div>

          {platformShowcaseConfig.platforms.map((items) => (
            <div
              className={`max-w-[1190px] flex pb-20 justify-center gap-14  ${
                items.imgAlignment !== "left" ? "flex-row-reverse" : ""
              }  mx-auto`}
            >
              <div className="w-[580px] shadow-[0px_15.18px_33.58px_0px_rgba(0,49,73,0.29)]  h-full relative">
                <div
                  className={`
    w-10 h-10 flex bg-white justify-center items-center rounded-full
    shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] absolute
    top-0
    ${
      items.imgAlignment !== "left"
        ? "right-0 translate-x-1/2"
        : "left-0 -translate-x-1/2"
    }
    -translate-y-1/2
  `}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.84922 8.61912C3.70326 7.96165 3.72567 7.27796 3.91437 6.63146C4.10308 5.98496 4.45196 5.39657 4.92868 4.92084C5.40541 4.44512 5.99453 4.09747 6.64142 3.91012C7.28832 3.72277 7.97205 3.70179 8.62922 3.84912C8.99093 3.28342 9.48922 2.81788 10.0782 2.49541C10.6671 2.17293 11.3278 2.00391 11.9992 2.00391C12.6707 2.00391 13.3313 2.17293 13.9203 2.49541C14.5092 2.81788 15.0075 3.28342 15.3692 3.84912C16.0274 3.70114 16.7123 3.72203 17.3602 3.90983C18.0081 4.09764 18.598 4.44626 19.0751 4.92327C19.5521 5.40029 19.9007 5.99019 20.0885 6.63812C20.2763 7.28605 20.2972 7.97095 20.1492 8.62912C20.7149 8.99083 21.1805 9.48912 21.5029 10.0781C21.8254 10.667 21.9944 11.3277 21.9944 11.9991C21.9944 12.6706 21.8254 13.3312 21.5029 13.9202C21.1805 14.5091 20.7149 15.0074 20.1492 15.3691C20.2966 16.0263 20.2756 16.71 20.0882 17.3569C19.9009 18.0038 19.5532 18.5929 19.0775 19.0697C18.6018 19.5464 18.0134 19.8953 17.3669 20.084C16.7204 20.2727 16.0367 20.2951 15.3792 20.1491C15.018 20.717 14.5193 21.1845 13.9293 21.5084C13.3394 21.8324 12.6772 22.0022 12.0042 22.0022C11.3312 22.0022 10.669 21.8324 10.0791 21.5084C9.48914 21.1845 8.99045 20.717 8.62922 20.1491C7.97205 20.2965 7.28832 20.2755 6.64142 20.0881C5.99453 19.9008 5.40541 19.5531 4.92868 19.0774C4.45196 18.6017 4.10308 18.0133 3.91437 17.3668C3.72567 16.7203 3.70326 16.0366 3.84922 15.3791C3.27917 15.0184 2.80963 14.5193 2.48426 13.9283C2.1589 13.3374 1.98828 12.6737 1.98828 11.9991C1.98828 11.3245 2.1589 10.6609 2.48426 10.0699C2.80963 9.47895 3.27917 8.97988 3.84922 8.61912Z"
                      fill="white"
                    />
                    <path
                      d="M8.99922 11.9991L10.9992 13.9991L14.9992 9.99912"
                      fill="white"
                    />
                    <path
                      d="M8.99922 11.9991L10.9992 13.9991L14.9992 9.99912M3.84922 8.61912C3.70326 7.96165 3.72567 7.27796 3.91437 6.63146C4.10308 5.98496 4.45196 5.39657 4.92868 4.92084C5.40541 4.44512 5.99453 4.09747 6.64142 3.91012C7.28832 3.72277 7.97205 3.70179 8.62922 3.84912C8.99093 3.28342 9.48922 2.81788 10.0782 2.49541C10.6671 2.17293 11.3278 2.00391 11.9992 2.00391C12.6707 2.00391 13.3313 2.17293 13.9203 2.49541C14.5092 2.81788 15.0075 3.28342 15.3692 3.84912C16.0274 3.70114 16.7123 3.72203 17.3602 3.90983C18.0081 4.09764 18.598 4.44626 19.0751 4.92327C19.5521 5.40029 19.9007 5.99019 20.0885 6.63812C20.2763 7.28605 20.2972 7.97095 20.1492 8.62912C20.7149 8.99083 21.1805 9.48912 21.5029 10.0781C21.8254 10.667 21.9944 11.3277 21.9944 11.9991C21.9944 12.6706 21.8254 13.3312 21.5029 13.9202C21.1805 14.5091 20.7149 15.0074 20.1492 15.3691C20.2966 16.0263 20.2756 16.71 20.0882 17.3569C19.9009 18.0038 19.5532 18.5929 19.0775 19.0697C18.6018 19.5464 18.0134 19.8953 17.3669 20.084C16.7204 20.2727 16.0367 20.2951 15.3792 20.1491C15.018 20.717 14.5193 21.1845 13.9293 21.5084C13.3394 21.8324 12.6772 22.0022 12.0042 22.0022C11.3312 22.0022 10.669 21.8324 10.0791 21.5084C9.48914 21.1845 8.99045 20.717 8.62922 20.1491C7.97205 20.2965 7.28832 20.2755 6.64142 20.0881C5.99453 19.9008 5.40541 19.5531 4.92868 19.0774C4.45196 18.6017 4.10308 18.0133 3.91437 17.3668C3.72567 16.7203 3.70326 16.0366 3.84922 15.3791C3.27917 15.0184 2.80963 14.5193 2.48426 13.9283C2.1589 13.3374 1.98828 12.6737 1.98828 11.9991C1.98828 11.3245 2.1589 10.6609 2.48426 10.0699C2.80963 9.47895 3.27917 8.97988 3.84922 8.61912Z"
                      stroke="url(#paint0_linear_761_575)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_761_575"
                        x1="1.99414"
                        y1="12.0056"
                        x2="21.9944"
                        y2="12.0056"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FFA68D" />
                        <stop offset="1" stop-color="#FD3A84" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <img className="w-full  " src="./home/sample.png" alt="" />
              </div>

              <div className="w-[584px] flex flex-col justify-between items-start ">
                <div className="plaform-content-top flex flex-col gap-[24px]">
                  <div class="border-gradient w-fit">
                    <div className="platform-badge border-gradient-inner  w-fit rounded-full px-[12px] py-[8px] flex gap-[10px] items-center">
                      <BadgeCheck className="size-[18px] text-[#C44558]" />
                      <span className="font-inter text-[#C44558] font-medium text-[14px] tracking-[0.02em] leading-[1.4]">
                        Patent Pending
                      </span>
                    </div>
                  </div>

                  <h2 className="font-dm-sans text-[36px] text-[#1E1E1E] leading-[1.2] tracking-[0.02em">
                    AI Test Platform
                  </h2>
                  <p class="font-inter  capitalize font-medium  text-[#626161] text-[18px] leading-[1.4]  tracking-[0.02em]">
                    Comprehensive AI model testing and validation with automated
                    quality assurance, performance monitoring, and compliance
                    verification
                  </p>
                </div>

                <Button
                  className="font-dm-sans  rounded-lg capitalize px-[20px] py-[16px] text-white bg-primary-gradient font-bold leading-[1.2] tracking-normal text-[16px]"
                  btnText="Learn More"
                  iconSize="20px"
                  icon={items.ctaIcon}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="relative bg-red-900 h-[400px] -mt-[120px] z-5"></div>
      </div>
    </>
  );
};

export default App;

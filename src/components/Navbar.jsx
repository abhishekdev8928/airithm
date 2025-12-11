import { useEffect, useState, useRef } from "react";
import { Menu } from "lucide-react";
import Button from "../components/ui/Button";

export default function Navbar({
  wrapperClassName = "",
  disableScrollHide = false,
  linkClassName = "",
  iconClassName = "",
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (disableScrollHide) return;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 20);

      if (currentScroll > lastScrollY.current && currentScroll > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [disableScrollHide]);

  return (
    <header
      className={`w-full py-4 sm:py-6 px-4 sm:px-6 lg:px-10 transition-transform duration-300 z-50 ${
        disableScrollHide ? "" : isVisible ? "translate-y-0" : "-translate-y-full"
      } ${wrapperClassName}`}
      style={{
        backdropFilter: scrolled && !disableScrollHide ? "blur(12px)" : "none",
        background: scrolled && !disableScrollHide ? "rgba(0,0,0,0.6)" : "transparent",
      }}
    >
      <div className=" mx-auto w-full flex items-center justify-between flex-wrap gap-4">
        {/* LOGO */}
        <img
          src="/svg/airithm-logo.svg"
          alt="Airithm Logo"
          className="w-[120px] sm:w-[140px] lg:w-[150px] shrink-0"
        />

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden lg:flex gap-6 flex-wrap">
          {NAVBAR_LINKS.map((item) => (
            <button
              key={item.label}
              className={`flex items-center gap-2 text-[14px] sm:text-[15px] lg:text-[16px] whitespace-nowrap ${linkClassName}`}
            >
              {item.label}
              {item.hasDropdown && (
                <svg
                  className={`w-4 h-4 sm:w-4 sm:h-4 ${iconClassName}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <circle cx="3.25" cy="6" r="1.25" />
                  <circle cx="16.75" cy="6" r="1.25" />
                  <circle cx="5.75" cy="10" r="1.25" />
                  <circle cx="14.25" cy="10" r="1.25" />
                  <circle cx="10" cy="14" r="1.25" />
                </svg>
              )}
            </button>
          ))}
        </nav>

        {/* DESKTOP BUTTON */}
        <div className="hidden lg:block flex-shrink-0 p-px rounded-lg bg-gradient-to-r from-[#C44558] via-[#FF7F7F] to-[#FF7F7F]">
          <Button
            btnText="Start Now"
            className="bg-white  text-[#C44558] font-primary font-medium pl-6 pr-5 py-4  rounded-lg text-[16px]  leading-none w-full sm:w-auto"
            useCommonSvg
          />
        </div>

        {/* MOBILE HAMBURGER */}
        <button className={`block lg:hidden flex-shrink-0 ${iconClassName}`}>
          <Menu size={32} />
        </button>
      </div>
    </header>
  );
}

export const NAVBAR_LINKS = [
  { label: "Platform", hasDropdown: true },
  { label: "Solutions", hasDropdown: true },
  { label: "Resources", hasDropdown: true },
  { label: "Services & Support", hasDropdown: true },
  { label: "Company", hasDropdown: false },
];

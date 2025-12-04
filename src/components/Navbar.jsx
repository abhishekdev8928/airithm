import { useEffect, useState, useRef } from "react";
import Button from "../components/ui/Button";

export default function Navbar({
  wrapperClassName = "",
  disableScrollHide = false,
  linkClassName = "",
  iconClassName = "",
}) {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (disableScrollHide) return; // ⭐ disable scroll effects entirely

    const controlNavbar = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY.current && currentScroll > 100) {
        setIsVisible(false); // hide on scroll down
      } else {
        setIsVisible(true); // show on scroll up
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [disableScrollHide]); // ⭐ effect depends on prop

  return (
    <header
      className={`
        w-full py-5 px-10 transition-all duration-300 z-50
        ${
          disableScrollHide
            ? ""
            : isVisible
            ? "translate-y-0"
            : "-translate-y-full"
        }
        ${wrapperClassName}
      `}
      style={{
        backdropFilter:
          window.scrollY > 20 && !disableScrollHide ? "blur(12px)" : "none",
        background:
          window.scrollY > 20 && !disableScrollHide
            ? "rgba(0, 0, 0, 0.6)"
            : "transparent",
      }}
    >
      <div className="mx-auto w-full flex items-center justify-between">
        <img src="/svg/airithm-logo.svg" alt="Airithm Logo" />

        {/* NAV LINKS */}
        <nav className="hidden md:flex gap-10">
          {NAVBAR_LINKS.map((item) => (
            <button
              key={item.label}
              className={`flex text-inter-16 items-center gap-2 ${linkClassName}`}
            >
              {item.label}

              {item.hasDropdown && (
                <svg
                  className={`w-5 h-5 ${iconClassName}`}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="3.25" cy="6" r="1.25" fill="currentColor" />
                  <circle cx="16.75" cy="6" r="1.25" fill="currentColor" />
                  <circle cx="5.75" cy="10" r="1.25" fill="currentColor" />
                  <circle cx="14.25" cy="10" r="1.25" fill="currentColor" />
                  <circle cx="10" cy="14" r="1.25" fill="currentColor" />
                </svg>
              )}
            </button>
          ))}
        </nav>

        <div
          style={{
            background:
              "linear-gradient(86.66deg, #C44558 10.85%, #FF7F7F 84.93%)",
            borderRadius: "8px",
          }}
          className="p-0.5 inline-block"
        >
          <Button
            btnText="Start Now"
            className="bg-white text-[#C44558] font-medium px-8 py-3 rounded-lg font-dm-sans text-[18px] leading-none"
            useCommonSvg={true}
          />
        </div>
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

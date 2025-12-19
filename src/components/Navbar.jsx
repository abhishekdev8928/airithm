import { useEffect, useState, useRef } from "react";
import { Menu } from "lucide-react";
import Button from "../components/ui/Button";

export default function Navbar({
  wrapperClassName = "",
  disableScrollHide = false,
  initialTextColor = "text-black", // 👈 NEW
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

  // ✅ FINAL COLOR LOGIC
  const textColor = scrolled ? "text-white" : initialTextColor;
  const iconColor = textColor;

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        py-4 sm:py-6 px-4 sm:px-6 lg:px-10
        transition-all duration-300
        ${disableScrollHide ? "" : isVisible ? "translate-y-0" : "-translate-y-full"}
        ${scrolled ? "bg-black/60 backdrop-blur-md" : "bg-transparent"}
        ${wrapperClassName}
      `}
    >
      <div className="mx-auto w-full flex items-center justify-between gap-4">
        {/* LOGO (UNCHANGED) */}
        <img
          src="/svg/airithm-logo.svg"
          alt="Airithm Logo"
          className="w-[120px] sm:w-[140px] lg:w-[150px]"
        />

        {/* NAV LINKS */}
        <nav className="hidden lg:flex gap-6">
          {NAVBAR_LINKS.map((item) => (
            <button
              key={item.label}
              className={`
                flex items-center gap-2
                text-[14px] sm:text-[15px] lg:text-[16px]
                whitespace-nowrap
                transition-colors duration-300
                ${textColor}
              `}
            >
              {item.label}
              {item.hasDropdown && (
                <svg
                  className={`w-4 h-4 ${iconColor}`}
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

        {/* CTA */}
        <div className="hidden lg:block p-px rounded-lg bg-gradient-to-r from-[#C44558] via-[#FF7F7F] to-[#FF7F7F]">
          <Button
            btnText="Start Now"
            className="bg-white text-[#C44558] px-6 py-4 rounded-lg"
            useCommonSvg
          />
        </div>

        {/* MOBILE */}
        <button className={`block lg:hidden ${iconColor}`}>
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

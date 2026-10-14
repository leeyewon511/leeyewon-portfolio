import React, { useState, useEffect } from "react";
import { PROFILE_INFO } from "../../data/portfolioData";
import { useLenis } from "lenis/react";

interface NavbarProps {
  onContactClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (targetId === "top") {
      lenis?.scrollTo(0, { duration: 1.2 });
      return;
    }
    const element = document.querySelector<HTMLElement>(`#${targetId}`);
    if (element && lenis) {
      lenis.scrollTo(element, { offset: -80, duration: 1.2 });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 select-none ${
        isScrolled
          ? "bg-[#0C0C0C]/85 backdrop-blur-xl border-b border-[#D7E2EA]/10 shadow-[0_4px_24px_rgba(0,0,0,0.6)] py-3 sm:py-3.5"
          : "bg-[#0C0C0C]/40 backdrop-blur-md border-b border-transparent py-4 sm:py-6"
      } px-5 sm:px-8 md:px-12`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand / Name */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, "top")}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#B600A8] animate-pulse group-hover:scale-125 transition-transform" />
          <span className="font-mono text-xs uppercase tracking-wider text-[#D7E2EA]/90 group-hover:text-white transition-colors font-medium">
            {PROFILE_INFO.nameKorean} <span className="opacity-40">/</span> {PROFILE_INFO.nameEnglish}
          </span>
        </a>

        {/* Navigation Menu */}
        <nav className="flex items-center gap-3 sm:gap-6 md:gap-8 font-medium uppercase tracking-wider text-xs sm:text-sm text-[#D7E2EA]/85">
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "about")}
            className="hover:text-white transition-colors py-1 cursor-pointer"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={(e) => handleNavClick(e, "skills")}
            className="hover:text-white transition-colors py-1 cursor-pointer"
          >
            Skills
          </a>
          <a
            href="#experience"
            onClick={(e) => handleNavClick(e, "experience")}
            className="hover:text-white transition-colors py-1 cursor-pointer"
          >
            Experience
          </a>
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, "projects")}
            className="hover:text-white transition-colors py-1 cursor-pointer"
          >
            Projects
          </a>
        </nav>
      </div>
    </header>
  );
};

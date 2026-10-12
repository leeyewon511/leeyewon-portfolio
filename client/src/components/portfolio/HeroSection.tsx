import React from "react";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { PROFILE_INFO } from "../../data/portfolioData";

interface HeroSectionProps {
  onContactClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  const heroName = "HI, I'M YEWON";

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none pt-20 sm:pt-24 pb-6 sm:pb-8">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[300px] sm:h-[350px] bg-[#B600A8]/20 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[240px] sm:w-[320px] h-[240px] sm:h-[320px] bg-[#7621B0]/20 blur-[110px] pointer-events-none rounded-full" />

      {/* 2. Hero Center Area */}
      <div className="relative w-full flex flex-col items-center justify-center my-auto py-4 z-10">
        {/* Massive Heading */}
        <div className="w-full text-center overflow-visible px-3 sm:px-5 md:px-7">
          <h1 aria-label={heroName} className="font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[9.5vw] sm:text-[11.5vw] md:text-[12.5vw] lg:text-[13.5vw] drop-shadow-lg select-none">
              {Array.from(heroName).map((letter, index) => (
                <motion.span
                  key={`${letter}-${index}`}
                  aria-hidden="true"
                  initial={{ opacity: 1, y: 18, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: 0.08 + index * 0.045,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="hero-heading inline-block will-change-transform"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
          </h1>
        </div>

      </div>

      {/* 3. Bottom Bar */}
      <div className="w-full z-20 px-5 sm:px-8 md:px-12 pt-3 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <FadeIn delay={0.35} y={20}>
          <div className="max-w-[260px] sm:max-w-[280px] md:max-w-[340px]">
            <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-xs sm:text-sm md:text-base">
              {PROFILE_INFO.tagline}
            </p>
            <div className="mt-1.5 text-[10px] sm:text-xs text-[#D7E2EA]/60 font-mono">
              [ React · Node.js · Java · MySQL · Docker · JWT ]
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

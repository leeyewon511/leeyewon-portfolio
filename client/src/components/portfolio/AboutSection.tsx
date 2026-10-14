import React, { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { AnimatedText } from "./AnimatedText";
import { PROFILE_INFO } from "../../data/portfolioData";
import { Sparkles, Terminal, Code2, ShieldCheck, Database, Layers } from "lucide-react";

interface AboutSectionProps {
  onContactClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const [lang, setLang] = useState<"ko" | "en">("ko");

  const decorative3D = [
    {
      src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",
      alt: "Moon icon",
      className: "top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[110px] sm:w-[150px] md:w-[200px]",
      delay: 0.1,
      x: -80
    },
    {
      src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",
      alt: "3D Geometric object",
      className: "bottom-[6%] left-[2%] sm:left-[5%] md:left-[8%] w-[90px] sm:w-[130px] md:w-[170px]",
      delay: 0.25,
      x: -80
    },
    {
      src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",
      alt: "Lego modular icon",
      className: "top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[110px] sm:w-[150px] md:w-[200px]",
      delay: 0.15,
      x: 80
    },
    {
      src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",
      alt: "3D Group visual",
      className: "bottom-[6%] right-[2%] sm:right-[5%] md:right-[8%] w-[120px] sm:w-[160px] md:w-[210px]",
      delay: 0.3,
      x: 80
    }
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-[#0C0C0C] flex flex-col items-center justify-center px-5 sm:px-8 md:px-12 py-24 sm:py-32 overflow-hidden select-none"
    >
      {/* 4 decorative 3D assets in corners */}
      {decorative3D.map((item, idx) => (
        <div
          key={idx}
          className={`absolute pointer-events-none z-0 opacity-80 hover:opacity-100 transition-opacity ${item.className}`}
        >
          <FadeIn delay={item.delay} x={item.x} y={0} duration={0.9}>
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-auto object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
              loading="lazy"
            />
          </FadeIn>
        </div>
      ))}

      {/* Main content container */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center">
        {/* Sub-label with Language Switcher */}
        <FadeIn delay={0} y={-10} className="mb-4">
          <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-[#18191E] border border-[#D7E2EA]/15 text-xs font-mono">
            <span className="px-3 py-1 text-[#D7E2EA]/60 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
              Developer Profile
            </span>
            <div className="flex bg-[#0C0C0C] rounded-full p-0.5">
              <button
                onClick={() => setLang("ko")}
                className={`px-3 py-0.5 rounded-full text-xs font-medium transition-all ${
                  lang === "ko"
                    ? "bg-[#B600A8] text-white shadow-sm"
                    : "text-[#D7E2EA]/60 hover:text-white"
                }`}
              >
                한국어
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-0.5 rounded-full text-xs font-medium transition-all ${
                  lang === "en"
                    ? "bg-[#B600A8] text-white shadow-sm"
                    : "text-[#D7E2EA]/60 hover:text-white"
                }`}
              >
                ENG
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Section Heading */}
        <FadeIn delay={0.05} y={40}>
          <h2 className="text-white font-black uppercase leading-none tracking-tight text-[clamp(2.8rem,10vw,140px)]">
            About me
          </h2>
        </FadeIn>

        {/* Name and Highlights Banner */}
        <FadeIn delay={0.15} y={20} className="mt-4 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-mono text-[#D7E2EA]/75">
            <span className="text-white font-semibold">
              {lang === "ko"
                ? `${PROFILE_INFO.nameKorean} (${PROFILE_INFO.nameEnglish})`
                : `${PROFILE_INFO.nameEnglish} (${PROFILE_INFO.nameKorean})`}
            </span>
            <span>·</span>
            <span className="text-[#B600A8] font-medium">
              {lang === "ko" ? "대학생 개발자" : "University Student"}
            </span>
            <span>·</span>
            <span>React & Node.js</span>
            <span>·</span>
            <span>{lang === "ko" ? "JWT & Docker 학습 중" : "Learning JWT & Docker"}</span>
          </div>
        </FadeIn>

        {/* Animated Paragraph with character-by-character scroll reveal */}
        <div className="max-w-[680px] sm:max-w-[720px] text-[#D7E2EA] font-normal leading-relaxed text-[clamp(0.95rem,1.8vw,1.25rem)] my-4 text-center break-keep">
          <motion.div
            key={lang}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <AnimatedText
              key={lang}
              text={
                lang === "ko"
                  ? PROFILE_INFO.aboutKoreanIntro
                  : PROFILE_INFO.aboutEnglishIntro
              }
            />
          </motion.div>
        </div>

        {/* Core Value Pillars */}
        <FadeIn delay={0.3} y={30} className="w-full mt-12 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="glass-panel p-5 rounded-2xl border border-[#D7E2EA]/10 hover:border-[#B600A8]/50 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-[#B600A8]/20 flex items-center justify-center text-[#B600A8] mb-3">
                <Code2 className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-1">
                Frontend Artistry
              </h4>
              <p className="text-xs text-[#D7E2EA]/70 leading-normal">
                {lang === "ko"
                  ? "React, HTML5, CSS3, JS를 공부하며 반응형 UI와 Framer Motion 인터랙션을 만들어 봅니다."
                  : "Learning React, HTML5, CSS3, and JavaScript to craft responsive UIs and engaging Framer Motion interactions."}
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-[#D7E2EA]/10 hover:border-[#B600A8]/50 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-[#7621B0]/20 flex items-center justify-center text-[#9D4EDD] mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-1">
                Backend & Auth
              </h4>
              <p className="text-xs text-[#D7E2EA]/70 leading-normal">
                {lang === "ko"
                  ? "Node.js와 Express로 서버와 REST API를 만들고, JWT 인증 흐름을 학습했습니다."
                  : "Building servers and REST APIs with Node.js and Express, understanding secure JWT authentication flows."}
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-[#D7E2EA]/10 hover:border-[#B600A8]/50 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-[#BE4C00]/20 flex items-center justify-center text-[#FF6B35] mb-3">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-1">
                Data & DevOps
              </h4>
              <p className="text-xs text-[#D7E2EA]/70 leading-normal">
                {lang === "ko"
                  ? "MySQL, MongoDB를 사용해 보고 Docker와 Vercel 배포도 직접 연습했습니다."
                  : "Practicing database management with MySQL and MongoDB, alongside Docker and Vercel deployments."}
              </p>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

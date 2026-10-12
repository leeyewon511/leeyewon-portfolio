import React, { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { SKILL_CATEGORIES } from "../../data/skillData";

export const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  // 세로 스크롤량과 가로 이동량을 1:1로 연결해 속도가 일정하게 유지되도록 합니다.
  const rawX = useTransform(scrollYProgress, [0, 1], [0, -maxTranslate]);
  const x = useSpring(rawX, { stiffness: 300, damping: 40, mass: 0.15 });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useLayoutEffect(() => {
    const measureTrack = () => {
      if (!trackRef.current) return;
      const visibleWidth = trackRef.current.parentElement?.clientWidth ?? window.innerWidth - 40;
      setMaxTranslate(Math.max(trackRef.current.scrollWidth - visibleWidth, 0));
    };
    measureTrack();
    const observer = new ResizeObserver(measureTrack);
    if (trackRef.current) observer.observe(trackRef.current);
    window.addEventListener("resize", measureTrack);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measureTrack);
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} style={{ height: "170vh" }} className="relative rounded-t-[40px] bg-[#0C0C0C] text-[#D7E2EA] sm:rounded-t-[56px]">
      <div className="sticky top-0 flex h-screen min-h-[560px] flex-col justify-center overflow-hidden px-5 py-8 sm:px-8 sm:py-12 md:px-12">
        <div className="absolute -right-24 top-20 h-64 w-64 rounded-full bg-[#B600A8]/15 blur-3xl" />
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <FadeIn y={20}>
            <span className="inline-block rounded-full border border-[#D7E2EA]/15 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[#D7E2EA]/60">
              // Scroll through the stack
            </span>
          </FadeIn>
          <FadeIn delay={0.08} y={28}>
            <h2 className="mt-3 text-[clamp(3rem,8vw,7rem)] font-semibold uppercase leading-[0.88] tracking-[-0.08em] text-[#D7E2EA]">
              Skills
            </h2>
          </FadeIn>
          <FadeIn delay={0.14} y={18}>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#D7E2EA]/62 sm:text-base">
              스크롤하면 기술 분류가 옆으로 넘어갑니다. 기술 카드에 커서를 올리면 설명이 나타납니다.
            </p>
          </FadeIn>

          <div className="mt-6 overflow-visible sm:mt-8">
            <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-4 pr-16 will-change-transform sm:gap-6 sm:pr-24">
              {SKILL_CATEGORIES.map((category, categoryIndex) => (
                <motion.article
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: categoryIndex * 0.04, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex h-[390px] w-[calc(100vw-40px)] shrink-0 flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white p-5 pb-8 text-[#0C0C0C] shadow-[0_18px_50px_rgba(0,0,0,0.22)] sm:h-[370px] sm:w-[min(620px,calc(100vw-96px))] sm:p-6 sm:pb-8"
                >
                  <div className="pointer-events-none absolute -right-12 -top-16 select-none text-[190px] font-black leading-none tracking-[-0.15em] text-[#B600A8]/[0.05]">{category.number}</div>
                  <div className="pointer-events-none absolute bottom-0 right-0 h-32 w-64 rounded-full bg-gradient-to-tl from-[#B600A8]/10 to-transparent blur-2xl" />

                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="font-black text-5xl leading-none tracking-[-0.08em] text-[#0C0C0C]/12 sm:text-6xl">{category.number}</span>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-[#B600A8]">{category.englishTitle}</p>
                        <h3 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">{category.title}</h3>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-[#0C0C0C]/35">{String(categoryIndex + 1).padStart(2, "0")} / {String(SKILL_CATEGORIES.length).padStart(2, "0")}</span>
                  </div>

                  <p className="relative z-10 mt-3 max-w-md text-sm leading-6 text-[#0C0C0C]/58">{category.summary}</p>

                    <div className="relative z-10 mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ y: -6, scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 350, damping: 18 }}
                        className="group/skill relative flex min-h-[100px] cursor-help items-center justify-center overflow-visible rounded-2xl border border-[#0C0C0C]/10 bg-[#F7F8FA] p-2.5 text-center shadow-sm"
                      >
                        <div className="flex flex-col items-center transition-all duration-200 group-hover/skill:scale-95 group-hover/skill:blur-[4px]">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#0C0C0C]/10 bg-white text-2xl shadow-sm"><i className={`${skill.iconClass} leading-none`} aria-hidden="true" /></div>
                          <span className="mt-3 text-xs font-semibold leading-tight">{skill.name}</span>
                        </div>
                        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center rounded-2xl bg-[#0C0C0C]/90 p-4 text-center opacity-0 transition-opacity duration-200 group-hover/skill:opacity-100">
                          <div>
                            <div className="mb-2 flex items-center justify-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[#FF85EA]"><i className={`${skill.iconClass} text-base`} aria-hidden="true" />{skill.name}</div>
                            <p className="text-[11px] leading-5 text-white/85">{skill.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                </motion.article>
              ))}
            </motion.div>
          </div>

          <div className="mt-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-[#D7E2EA]/38"><span>Scroll to explore</span><div className="h-px w-28 overflow-hidden bg-[#D7E2EA]/15"><motion.div style={{ width: progressWidth }} className="h-full bg-[#B600A8]" /></div><span>6 categories</span></div>
        </div>
      </div>
    </section>
  );
};

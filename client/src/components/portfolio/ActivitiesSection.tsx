import React from "react";
import { motion } from "framer-motion";
import { BookOpen, BriefcaseBusiness, Code2, GraduationCap, Users, Calendar } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { ACTIVITY_PERIODS, ActivityCategory } from "../../data/activityData";

const categoryIcons: Record<ActivityCategory, React.ReactNode> = {
  "Mentoring & Leadership": <Users className="h-3.5 w-3.5" />,
  "Competitions & Projects": <Code2 className="h-3.5 w-3.5" />,
  "Programs & Learning": <GraduationCap className="h-3.5 w-3.5" />,
  "Community & Scholarship": <BookOpen className="h-3.5 w-3.5" />,
};

export const ActivitiesSection: React.FC = () => {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#0C0C0C] px-5 pt-24 pb-36 text-[#D7E2EA] sm:px-8 sm:pt-32 sm:pb-48 md:pb-60 md:px-12">
      <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_20%_20%,rgba(182,0,168,0.12)_0_1px,transparent_1px),radial-gradient(circle_at_80%_50%,rgba(118,33,176,0.12)_0_1px,transparent_1px)] [background-size:90px_90px,130px_130px]" />
      <div className="relative mx-auto max-w-6xl">
        <FadeIn y={18}>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/15 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[#D7E2EA]/60"><BriefcaseBusiness className="h-3.5 w-3.5 text-[#B600A8]" />Campus Timeline</div>
        </FadeIn>
        <FadeIn delay={0.08} y={24}>
          <h2 className="mt-3 text-[clamp(3rem,8vw,7rem)] font-semibold uppercase leading-[0.88] tracking-[-0.08em] text-[#D7E2EA]">Experience</h2>
        </FadeIn>
        <FadeIn delay={0.14} y={16}>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#D7E2EA]/60 sm:text-base">학기와 방학을 원형 타임라인으로 정리했습니다. 각 시기의 활동과 역할을 확인해 보세요.</p>
        </FadeIn>

        <div className="relative mt-16 sm:mt-20">
          <div className="absolute bottom-8 left-7 top-8 w-px bg-gradient-to-b from-[#B600A8] via-[#7621B0]/55 to-transparent sm:left-10" />
          <div className="space-y-12 sm:space-y-16">
            {ACTIVITY_PERIODS.map((period, periodIndex) => (
              <motion.article key={period.id} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.6, delay: periodIndex * 0.05 }} className="relative grid gap-7 pl-20 sm:grid-cols-[180px_1fr] sm:gap-12 sm:pl-28">
                <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.4, delay: periodIndex * 0.05 }} className="absolute left-[-18px] top-0 z-10 flex w-16 items-center justify-center bg-[#0C0C0C] py-1 text-center sm:left-[2px] sm:w-20">
                  <span className="font-mono text-sm font-medium tracking-wide text-[#FF85EA] sm:text-base">{period.label}</span>
                </motion.div>

                <div className="pt-2 sm:pt-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#B600A8]">
                    CHAPTER {String(periodIndex + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-white sm:text-xl leading-tight">
                    <span className="block text-white font-bold tracking-tight">
                      {period.year}
                    </span>
                    <hr className="my-1.5 w-8 border-0 border-t-2 border-[#B600A8]/70" />
                    <span className="block text-xs sm:text-sm font-medium text-[#D7E2EA]/85 font-mono tracking-wide">
                      {period.term}
                    </span>
                  </h3>
                  {period.periodDate && (
                    <p className="mt-2 font-mono text-[11px] text-[#D7E2EA]/55 tracking-tight">
                      {period.periodDate}
                    </p>
                  )}
                </div>

                <div className="space-y-3">
                  {period.items.map((item, itemIndex) => (
                    <motion.div key={item.id} initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ delay: 0.1 + itemIndex * 0.035, duration: 0.4 }} className="group border-b border-[#D7E2EA]/12 pb-4 pt-1 last:border-b-0">
                      <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-wide text-[#B600A8]">{categoryIcons[item.category]}<span>{item.category}</span>{item.role && <span className="rounded-full border border-[#D7E2EA]/15 px-2 py-1 font-mono text-[9px] text-[#D7E2EA]/55">{item.role}</span>}</div>
                      <h4 className="mt-2 text-base font-medium text-white transition-colors group-hover:text-[#FF85EA] sm:text-lg">{item.title}</h4>
                      <div className="mt-1 flex items-center gap-1.5 font-mono text-[11px] text-[#D7E2EA]/55">
                        <Calendar className="h-3 w-3 text-[#B600A8]" />
                        <span>{item.date || "2026.01 ~ 2026.12"}</span>
                      </div>
                      <p className="mt-1.5 max-w-2xl text-xs leading-5 text-[#D7E2EA]/52 sm:text-sm">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

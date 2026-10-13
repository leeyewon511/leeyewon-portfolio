import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { PROJECTS_DATA, ProjectItem } from "../../data/projectData";
import { Github, Server, Database, ShieldCheck, Cpu, Terminal, Sparkles, Layers, Film, ChevronLeft, ChevronRight, Play } from "lucide-react";

const TechVisualCard: React.FC<{
  title: string;
  subtitle: string;
  gradient: string;
  badge: string;
  icon: React.ReactNode;
  heightClass: string;
  techCode?: string;
}> = ({ title, subtitle, gradient, badge, icon, heightClass, techCode }) => {
  return (
    <div
      className={`relative w-full ${heightClass} rounded-[22px] sm:rounded-[32px] overflow-hidden border border-[#D7E2EA]/20 bg-[#121316] group p-4 sm:p-5 flex flex-col justify-between shadow-inner`}
    >
      {/* Dynamic Ambient Background Gradients */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      {/* Top Bar with Icon & Badge */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="w-8 h-8 rounded-xl bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
          {icon}
        </div>
        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-white/80 bg-black/50 px-2.5 py-0.5 rounded-full border border-white/15">
          {badge}
        </span>
      </div>

      {/* Code / Visual Blueprint Pill if provided */}
      {techCode && (
        <div className="relative z-10 my-auto py-1 font-mono text-[10px] sm:text-xs text-white/50 bg-black/30 rounded-lg px-3 py-1.5 border border-white/10 overflow-hidden text-ellipsis whitespace-nowrap">
          <code>{techCode}</code>
        </div>
      )}

      {/* Bottom Title & Details */}
      <div className="relative z-10 pt-2">
        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#D7E2EA]/75 block">
          {subtitle}
        </span>
        <h5 className="text-sm sm:text-base font-bold text-white tracking-tight mt-0.5">
          {title}
        </h5>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{
  project: ProjectItem;
  index: number;
  totalCards: number;
}> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeMediaIdx, setActiveMediaIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.035;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  const mediaList = project.mediaList || [];
  const currentMedia = mediaList[activeMediaIdx] || mediaList[0];

  return (
    <div
      ref={containerRef}
      className="sticky top-20 md:top-24 w-full min-h-[75vh] flex items-center justify-center py-6"
      style={{
        top: `calc(4.5rem + ${index * 26}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[32px] sm:rounded-[40px] border-2 border-[#D7E2EA]/20 bg-[#0F1014]/95 backdrop-blur-2xl p-6 sm:p-8 md:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.9)] flex flex-col gap-6"
      >
        {/* Top Header: Project Index & Category & Actions */}
        <div className="flex items-center justify-between pb-4 border-b border-[#D7E2EA]/15">
          <div className="flex items-center gap-3">
            <span className="font-mono text-2xl sm:text-3xl font-black text-[#D7E2EA]">
              {project.number}
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#B600A8] font-semibold bg-[#B600A8]/10 px-3 py-1 rounded-full border border-[#B600A8]/30">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#D7E2EA]/60">
              {project.period}
            </span>
          </div>
        </div>

        {/* Main Content Grid: Left Media & Title/Tags, Right Structured Report */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (5 cols): Media Display + Project Title + Tech Badges */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Primary Media Box with Interactive Navigation Overlay */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#18191E] border border-[#D7E2EA]/20 shadow-inner flex items-center justify-center group">
              {currentMedia ? (
                currentMedia.type === "video" ? (
                  <video
                    key={currentMedia.src}
                    src={encodeURI(currentMedia.src)}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={currentMedia.src}
                    alt={currentMedia.caption || project.name}
                    className="w-full h-full object-contain p-2"
                  />
                )
              ) : (
                <div className="flex flex-col items-center gap-2 text-[#D7E2EA]/40">
                  <Film className="w-8 h-8" />
                  <span className="text-xs font-mono">미디어 준비 중</span>
                </div>
              )}

              {/* Prev / Next Floating Arrows for intuitive video flipping */}
              {mediaList.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveMediaIdx((prev) => (prev > 0 ? prev - 1 : mediaList.length - 1));
                    }}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-[#B600A8] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all opacity-85 hover:opacity-100 hover:scale-105 shadow-lg z-20"
                    title="이전 미디어"
                    aria-label="이전 영상 보기"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveMediaIdx((prev) => (prev < mediaList.length - 1 ? prev + 1 : 0));
                    }}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-[#B600A8] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all opacity-85 hover:opacity-100 hover:scale-105 shadow-lg z-20"
                    title="다음 미디어"
                    aria-label="다음 영상 보기"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Top Counter Pill (e.g. 1 / 3) */}
              {mediaList.length > 1 && (
                <div className="absolute top-2.5 right-2.5 bg-black/65 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15 text-[10px] font-mono text-white/90 font-medium z-10 flex items-center gap-1.5">
                  <Play className="w-2.5 h-2.5 fill-current text-[#B600A8]" />
                  <span>{activeMediaIdx + 1} / {mediaList.length}</span>
                </div>
              )}

              {/* Bottom Caption & Dot Navigation */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-6 pb-2.5 px-3 z-10 flex flex-col gap-2">
                {currentMedia?.caption && (
                  <div className="text-[11px] font-mono text-[#D7E2EA] font-medium truncate text-center">
                    {currentMedia.caption}
                  </div>
                )}
                {mediaList.length > 1 && (
                  <div className="flex items-center justify-center gap-1.5">
                    {mediaList.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setActiveMediaIdx(dotIdx)}
                        className={`h-1.5 rounded-full transition-all ${
                          activeMediaIdx === dotIdx
                            ? "w-6 bg-[#B600A8]"
                            : "w-2 bg-white/40 hover:bg-white/80"
                        }`}
                        title={`${dotIdx + 1}번 미디어로 이동`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Project Title & Period */}
            <div>
              <h3 className="text-lg sm:text-xl lg:text-[1.35rem] font-black text-white tracking-tight break-keep leading-snug">
                {project.name}
              </h3>
              <p className="mt-1 text-xs font-mono text-[#D7E2EA]/60">
                {project.period}
              </p>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-full text-[11px] font-mono bg-[#1E2028] border border-[#D7E2EA]/20 text-[#D7E2EA] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column (7 cols): Reference-style Structured Information Box with Hanging Indent */}
          <div className="lg:col-span-7 rounded-2xl bg-[#14151B] border border-[#D7E2EA]/15 p-5 sm:p-6 md:p-7 flex flex-col gap-6 text-[#D7E2EA] max-h-[580px] overflow-y-auto scrollbar-thin">
            {/* 1. 프로젝트 개요 */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 mb-2">
                <span className="text-[#B600A8] font-mono">1.</span> 프로젝트 개요
              </h4>
              <div className="pl-3 sm:pl-4 space-y-2 text-xs sm:text-sm">
                <div className="font-semibold text-white/90">■ 목적</div>
                <div className="space-y-1.5 text-[#D7E2EA]/85 pl-2">
                  {project.overview.purpose.map((p, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-white/60 select-none flex-shrink-0 mt-0.5">-</span>
                      <span className="flex-1 break-keep">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. 주요 기능 및 특징 */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 mb-2">
                <span className="text-[#B600A8] font-mono">2.</span> 주요 기능 및 특징
              </h4>
              <div className="pl-3 sm:pl-4 space-y-3.5 text-xs sm:text-sm">
                {project.featuresList.map((feat, fIdx) => (
                  <div key={fIdx} className="space-y-1.5">
                    <div className="font-semibold text-white/90">■ {feat.title}</div>
                    <div className="space-y-1.5 text-[#D7E2EA]/85 pl-2">
                      {feat.points.map((pt, ptIdx) => (
                        <div key={ptIdx} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-white/60 select-none flex-shrink-0 mt-0.5">-</span>
                          <span className="flex-1 break-keep">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. 본인 참여 내용 */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 mb-2">
                <span className="text-[#B600A8] font-mono">3.</span> 본인 참여 내용
              </h4>
              <div className="pl-3 sm:pl-4 space-y-3.5 text-xs sm:text-sm">
                {project.myRoleSection.map((role, rIdx) => (
                  <div key={rIdx} className="space-y-1.5">
                    <div className="font-semibold text-white/90">
                      ■ {role.part}
                      {role.percentage ? ` (${role.percentage})` : ""}
                    </div>
                    <div className="space-y-1.5 text-[#D7E2EA]/85 pl-2">
                      {role.details.map((dt, dtIdx) => (
                        <div key={dtIdx} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-white/60 select-none flex-shrink-0 mt-0.5">-</span>
                          <span className="flex-1 break-keep">{dt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. 마무리 */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 mb-2">
                <span className="text-[#B600A8] font-mono">4.</span> 마무리 및 느낀점
              </h4>
              <div className="pl-3 sm:pl-4 space-y-2 text-xs sm:text-sm">
                <div className="font-semibold text-white/90">■ 느낀점</div>
                <div className="space-y-1.5 text-[#D7E2EA]/85 pl-2">
                  {project.conclusion.learnings.map((c, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-white/60 select-none flex-shrink-0 mt-0.5">-</span>
                      <span className="flex-1 break-keep">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#0C0C0C] z-10 px-5 sm:px-8 md:px-12 pt-16 sm:pt-24 md:pt-32 pb-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <FadeIn delay={0} y={20}>
            <span className="font-mono text-xs uppercase tracking-widest text-[#D7E2EA]/50 bg-white/5 px-3 py-1 rounded-full mb-3 inline-block">
              // Learning Projects & Technical Practice
            </span>
          </FadeIn>
          <FadeIn delay={0.1} y={30}>
            <h2 className="hero-heading font-black uppercase tracking-tight text-[clamp(2.8rem,9vw,130px)] leading-none">
              Project
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} y={20}>
            <p className="mt-3 text-xs sm:text-sm md:text-base text-[#D7E2EA]/70 max-w-xl font-normal">
              인증 시스템, 반응형 웹, 데이터 관리 등
              공부한 내용을 직접 적용해 본 프로젝트 모음입니다.
            </p>
          </FadeIn>
        </div>

        {/* Sticky-stacking project cards */}
        <div className="relative flex flex-col items-center">
          {PROJECTS_DATA.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              totalCards={PROJECTS_DATA.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

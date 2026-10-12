import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { PROJECTS_DATA, ProjectItem } from "../../data/projectData";
import { Github, Server, Database, ShieldCheck, Cpu, Terminal, Sparkles, Layers, Film } from "lucide-react";

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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.04;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky top-20 md:top-28 w-full min-h-[65vh] flex items-center justify-center py-6"
      style={{
        top: `calc(5rem + ${index * 26}px)`
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-5xl rounded-[32px] sm:rounded-[44px] md:rounded-[52px] border-2 border-[#D7E2EA]/25 bg-[#0F1014]/95 backdrop-blur-2xl p-5 sm:p-7 md:p-9 shadow-[0_30px_70px_rgba(0,0,0,0.9)] flex flex-col justify-between"
      >
        {/* Top Row: Index, Name, Meta, and Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#D7E2EA]/15">
          <div className="flex items-center gap-4">
            <span className="font-black text-[clamp(2.4rem,4.5vw,64px)] text-[#D7E2EA] leading-none tracking-tighter select-none">
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B600A8] font-semibold">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white tracking-tight">
                {project.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#D7E2EA]/30 flex items-center justify-center text-[#D7E2EA] hover:bg-white/10 hover:text-white transition-all"
                title="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-[#D7E2EA]/25 px-4 py-2 text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#D7E2EA]/55">
              <Film className="w-3.5 h-3.5" />
              Media Coming Soon
            </span>
          </div>
        </div>

        {/* Middle: Summary & Tech Stack Tags */}
        <div className="my-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <p className="text-xs sm:text-sm text-[#D7E2EA]/85 max-w-2xl font-normal leading-relaxed">
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-[#18191E] border border-[#D7E2EA]/15 text-[#D7E2EA]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Reserved media area for future project photos or videos */}
        <div className="mb-4 flex items-center gap-3 rounded-2xl border border-dashed border-[#D7E2EA]/15 bg-white/[0.02] px-4 py-3 text-[#D7E2EA]/50">
          <Film className="h-4 w-4 text-[#B600A8]/80" />
          <span className="text-[11px] sm:text-xs font-mono">
            이 프로젝트의 사진이나 영상을 나중에 추가할 수 있는 미디어 영역입니다.
          </span>
        </div>

        {/* Bottom Row: 2-Column Responsive Visual Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 mt-2">
          {/* Left Column: 2 stacked items */}
          <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4">
            {project.id === "auth-saas" ? (
              <>
                <TechVisualCard
                  title="JWT Token Signature & Rotation"
                  subtitle="Security & Auth Practice"
                  badge="Bearer Token"
                  gradient="from-[#B600A8]/60 via-[#7621B0]/40 to-[#0C0C0C]/90"
                  icon={<ShieldCheck className="w-4 h-4 text-[#FF85EA]" />}
                  heightClass="h-[140px] sm:h-[160px]"
                  techCode="sign({ uid, role }, SECRET, { expiresIn: '2h' })"
                />
                <TechVisualCard
                  title="Docker Container Isolation"
                  subtitle="Containerization & Env Setup"
                  badge="Dockerfile"
                  gradient="from-[#0077B6]/50 via-[#023E8A]/40 to-[#0C0C0C]/90"
                  icon={<Cpu className="w-4 h-4 text-[#90E0EF]" />}
                  heightClass="h-[140px] sm:h-[160px]"
                  techCode="FROM node:20-alpine -> EXPOSE 3000"
                />
              </>
            ) : project.id === "creative-interactive" ? (
              <>
                <TechVisualCard
                  title="Figma Auto-Layout to React"
                  subtitle="Component Composition"
                  badge="Figma to Code"
                  gradient="from-[#F72585]/50 via-[#7209B7]/40 to-[#0C0C0C]/90"
                  icon={<Sparkles className="w-4 h-4 text-[#F72585]" />}
                  heightClass="h-[140px] sm:h-[160px]"
                  techCode="const ResponsiveFlex = ({ children }) => ..."
                />
                <TechVisualCard
                  title="Framer Motion Physics"
                  subtitle="Scroll & Magnetic Interactions"
                  badge="Micro-interaction"
                  gradient="from-[#4361EE]/50 via-[#3A0CA3]/40 to-[#0C0C0C]/90"
                  icon={<Layers className="w-4 h-4 text-[#4CC9F0]" />}
                  heightClass="h-[140px] sm:h-[160px]"
                  techCode="useScroll({ target, offset: ['start', 'end'] })"
                />
              </>
            ) : (
              <>
                <TechVisualCard
                  title="MariaDB Relational Schema"
                  subtitle="Relational Data Integrity"
                  badge="SQL RDBMS"
                  gradient="from-[#008080]/50 via-[#005F73]/40 to-[#0C0C0C]/90"
                  icon={<Database className="w-4 h-4 text-[#94D2BD]" />}
                  heightClass="h-[140px] sm:h-[160px]"
                  techCode="CREATE INDEX idx_user ON tx_logs(user_id)"
                />
                <TechVisualCard
                  title="SQLite Local In-Memory Cache"
                  subtitle="Lightweight File Storage"
                  badge="Embedded DB"
                  gradient="from-[#DDA15E]/50 via-[#BC6C25]/40 to-[#0C0C0C]/90"
                  icon={<Server className="w-4 h-4 text-[#FFE6A7]" />}
                  heightClass="h-[140px] sm:h-[160px]"
                  techCode="sqlite3.Database(':memory:') -> Fast I/O"
                />
              </>
            )}
          </div>

          {/* Right Column: 1 tall visual card */}
          <div className="md:col-span-7">
            <TechVisualCard
              title={`${project.name} - End-to-End Pipeline`}
              subtitle="Technical Practice Overview"
              badge="System Diagram"
              gradient={
                project.id === "auth-saas"
                  ? "from-[#7621B0]/60 via-[#B600A8]/40 to-[#0C0C0C]/95"
                  : project.id === "creative-interactive"
                  ? "from-[#B600A8]/50 via-[#BE4C00]/40 to-[#0C0C0C]/95"
                  : "from-[#0A9396]/50 via-[#005F73]/40 to-[#0C0C0C]/95"
              }
              icon={<Terminal className="w-4 h-4 text-white" />}
              heightClass="h-[295px] sm:h-[336px]"
              techCode={`[Client: React + UI] <---> [Backend: REST / Node.js] <---> [DB / Docker]`}
            />
          </div>
        </div>

        {/* Features bullet points */}
        <div className="mt-4 pt-3 border-t border-[#D7E2EA]/10 flex flex-wrap gap-x-6 gap-y-1 text-[11px] sm:text-xs font-mono text-[#D7E2EA]/60">
          {project.features.map((feat, fIdx) => (
            <span key={fIdx} className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B600A8]" />
              {feat}
            </span>
          ))}
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

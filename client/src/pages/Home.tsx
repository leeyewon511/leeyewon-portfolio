import React, { useState } from "react";
import { Navbar } from "../components/portfolio/Navbar";
import { HeroSection } from "../components/portfolio/HeroSection";
import { MarqueeSection } from "../components/portfolio/MarqueeSection";
import { AboutSection } from "../components/portfolio/AboutSection";
import { SkillsSection } from "../components/portfolio/SkillsSection";
import { ActivitiesSection } from "../components/portfolio/ActivitiesSection";
import { ProjectsSection } from "../components/portfolio/ProjectsSection";
import { ContactSection } from "../components/portfolio/ContactSection";
import { CursorTrail } from "../components/portfolio/CursorTrail";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-sans selection:bg-[#B600A8]/30 selection:text-white overflow-x-clip">
      <CursorTrail />
      {/* Fixed Header Navbar */}
      <Navbar onContactClick={() => setIsModalOpen(true)} />

      {/* 1. Hero Section */}
      <HeroSection onContactClick={() => setIsModalOpen(true)} />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection onContactClick={() => setIsModalOpen(true)} />

      {/* 4. Skills Section (Light themed section with rounded top corners) */}
      <SkillsSection />

      {/* 5. Campus experience: latest semester to oldest semester */}
      <ActivitiesSection />

      {/* 6. Projects Section */}
      <ProjectsSection />

      {/* 7. Contact & Footer */}
      <ContactSection isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}

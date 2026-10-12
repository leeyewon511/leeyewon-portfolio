import React, { useState, useEffect } from "react";
import { useLenis } from "lenis/react";
import { FadeIn } from "./FadeIn";
import { PROFILE_INFO } from "../../data/portfolioData";
import { Mail, Github, Figma, Copy, Check, Send, Sparkles, X } from "lucide-react";
import { toast } from "sonner";

interface ContactSectionProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ isModalOpen, setIsModalOpen }) => {
  const lenis = useLenis();
  const [copied, setCopied] = useState(false);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [isModalOpen, lenis]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopied(true);
    toast.success("이메일 주소가 클립보드에 복사되었습니다!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) {
      toast.error("모든 항목을 입력해주세요.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("메시지가 성공적으로 전송되었습니다! 곧 회신드리겠습니다.");
      setFormName("");
      setFormEmail("");
      setFormMessage("");
      setIsModalOpen(false);
    }, 600);
  };

  return (
    <>
      <footer id="contact" className="relative w-full bg-[#080808] border-t border-[#D7E2EA]/10 pt-20 pb-12 px-6 md:px-12 select-none">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <FadeIn delay={0} y={20}>
            <span className="text-xs uppercase font-mono tracking-widest text-[#B600A8] bg-[#B600A8]/10 px-3.5 py-1 rounded-full mb-4 inline-block font-medium">
              Start A Conversation
            </span>
          </FadeIn>

          <FadeIn delay={0.1} y={30}>
            <h2 className="hero-heading font-black uppercase tracking-tight text-[clamp(2.5rem,8vw,100px)] leading-tight">
              Let&apos;s Build Together
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <p className="mt-4 max-w-xl text-xs sm:text-sm md:text-base text-[#D7E2EA]/70 font-normal leading-relaxed">
              새로운 프로젝트 제안, 프론트/백엔드 개발 포지션 논의 또는 기술적인 대화는 언제든 환영합니다.
              아래 이메일이나 메시지 모달을 통해 편하게 연락주세요!
            </p>
          </FadeIn>

          {/* Quick Actions */}
          <FadeIn delay={0.3} y={20} className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="contact-button-gradient rounded-full text-white font-medium uppercase tracking-widest px-8 py-3.5 text-xs sm:text-sm flex items-center gap-2 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/20 bg-[#121316] px-6 py-3 text-xs sm:text-sm text-[#D7E2EA] hover:border-[#B600A8] hover:text-white transition-all cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              <span className="font-mono">{PROFILE_INFO.email}</span>
            </button>
          </FadeIn>

          {/* Social Links & Stack Badges */}
          <FadeIn delay={0.4} y={20} className="mt-14 pt-8 border-t border-[#D7E2EA]/10 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#D7E2EA]/50">
            <div className="flex items-center gap-4">
              <span>© {new Date().getFullYear()} {PROFILE_INFO.nameKorean} ({PROFILE_INFO.nameEnglish})</span>
              <span>·</span>
              <span>Designed with Kanit & Dark Theme</span>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <a
                href={PROFILE_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="hover:text-white transition-colors cursor-pointer" onClick={() => toast.info("Figma 워크스페이스 연동 준비 중입니다.")}>
                <span className="flex items-center gap-1.5">
                  <Figma className="w-4 h-4" />
                  <span>Figma</span>
                </span>
              </span>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-white transition-colors uppercase tracking-wider"
              >
                Back To Top ↑
              </button>
            </div>
          </FadeIn>
        </div>
      </footer>

      {/* Interactive Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div data-lenis-prevent className="relative w-full max-w-lg rounded-3xl bg-[#121316] border border-[#D7E2EA]/20 p-6 sm:p-8 text-[#E5EEF5] shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#B600A8]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#B600A8]">Direct Inquiry</span>
            </div>
            <h3 className="text-2xl font-black uppercase text-white tracking-tight">
              Send a Message
            </h3>
            <p className="text-xs text-[#D7E2EA]/70 mt-1 mb-6">
              프로젝트 문의, 채용 제안 등 남겨주실 내용을 작성해주세요.
            </p>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-[#D7E2EA]/70 mb-1 uppercase">
                  Your Name / 회사명
                </label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="예: 홍길동 (테크 컴퍼니)"
                  className="w-full rounded-xl bg-[#1A1C22] border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#B600A8] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#D7E2EA]/70 mb-1 uppercase">
                  Email Address / 연락처
                </label>
                <input
                  type="email"
                  required
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  placeholder="contact@company.com"
                  className="w-full rounded-xl bg-[#1A1C22] border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#B600A8] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#D7E2EA]/70 mb-1 uppercase">
                  Message / 내용
                </label>
                <textarea
                  required
                  rows={4}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="개발 포지션 관련 논의를 나누고 싶습니다..."
                  className="w-full rounded-xl bg-[#1A1C22] border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#B600A8] transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-full text-xs font-mono uppercase text-[#D7E2EA]/70 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="contact-button-gradient rounded-full text-white font-medium uppercase tracking-widest px-7 py-2.5 text-xs sm:text-sm flex items-center gap-2 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  {isSubmitting ? "Sending..." : "Submit Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

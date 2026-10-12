import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  onClick,
  className = "",
  label = "Contact Me"
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`contact-button-gradient rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer ${className}`}
    >
      <Mail className="w-4 h-4" />
      <span>{label}</span>
    </button>
  );
};

interface LiveProjectButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  label?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  href,
  onClick,
  className = "",
  label = "Live Project"
}) => {
  const content = (
    <>
      <span>{label}</span>
      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </>
  );

  const baseClasses = `group inline-flex items-center gap-1.5 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2 sm:px-8 sm:py-2.5 text-xs sm:text-sm hover:bg-[#D7E2EA]/15 active:scale-95 transition-all duration-200 cursor-pointer ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
};

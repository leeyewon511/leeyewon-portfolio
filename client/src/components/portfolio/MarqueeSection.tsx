import React, { useEffect, useRef, useState } from "react";
import { MARQUEE_GIFS } from "../../data/portfolioData";

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = window.scrollY + rect.top;
            const calculated = (window.scrollY - sectionTop + window.innerHeight) * 0.35;
            setOffset(calculated);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const row1Images = MARQUEE_GIFS.slice(0, 11);
  const row2Images = MARQUEE_GIFS.slice(11);

  // Triple images for infinite smooth horizontal scrolling
  const row1Tripled = [...row1Images, ...row1Images, ...row1Images];
  const row2Tripled = [...row2Images, ...row2Images, ...row2Images];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0C0C0C] pt-20 sm:pt-28 md:pt-36 pb-12 overflow-hidden select-none"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1: Moves RIGHT on scroll */}
        <div
          className="flex gap-3 will-change-transform"
          style={{
            transform: `translate3d(${offset - 250}px, 0, 0)`,
            transition: "transform 0.08s linear"
          }}
        >
          {row1Tripled.map((url, i) => {
            const isVideo = /\.(mp4|webm|mov)$/i.test(url);
            return (
              <div
                key={`r1-${i}`}
                className="flex-shrink-0 w-[300px] sm:w-[360px] md:w-[420px] h-[190px] sm:h-[230px] md:h-[270px] rounded-2xl overflow-hidden border border-[#D7E2EA]/10 bg-[#15161A] group relative"
              >
                {isVideo ? (
                  <video
                    src={encodeURI(url)}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <img
                    src={encodeURI(url)}
                    alt={`Portfolio dynamic visual ${i}`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div
          className="flex gap-3 will-change-transform"
          style={{
            transform: `translate3d(${-(offset - 250)}px, 0, 0)`,
            transition: "transform 0.08s linear"
          }}
        >
          {row2Tripled.map((url, i) => {
            const isVideo = /\.(mp4|webm|mov)$/i.test(url);
            return (
              <div
                key={`r2-${i}`}
                className="flex-shrink-0 w-[300px] sm:w-[360px] md:w-[420px] h-[190px] sm:h-[230px] md:h-[270px] rounded-2xl overflow-hidden border border-[#D7E2EA]/10 bg-[#15161A] group relative"
              >
                {isVideo ? (
                  <video
                    src={encodeURI(url)}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <img
                    src={url}
                    alt={`Portfolio dynamic visual ${i}`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

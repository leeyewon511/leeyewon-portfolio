import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const Character: React.FC<{
  char: string;
  globalIndex: number;
  total: number;
  progress: any;
}> = ({ char, globalIndex, total, progress }) => {
  const start = globalIndex / Math.max(total, 1);
  const end = Math.min(1, start + 0.05);
  const opacity = useTransform(progress, [start, end], [0.25, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-25 select-none pointer-events-none">{char}</span>
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 select-text"
      >
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "center 0.52"]
  });

  // Split into paragraphs by newline
  const paragraphs = text.split("\n\n");
  const totalLength = text.length;
  let charCounter = 0;

  return (
    <div
      ref={containerRef}
      className={`leading-relaxed tracking-normal break-keep select-text ${className}`}
      style={{ wordBreak: "keep-all" }}
    >
      {paragraphs.map((para, pIdx) => {
        const words = para.split(" ");
        return (
          <p key={pIdx} className="mb-4 last:mb-0 leading-relaxed" style={{ wordBreak: "keep-all" }}>
            {words.map((word, wIdx) => {
              const wordChars = Array.from(word);
              const wordElements = (
                <span key={wIdx} className="inline-block whitespace-nowrap">
                  {wordChars.map((char, cIdx) => {
                    const currentIndex = charCounter++;
                    return (
                      <Character
                        key={`${currentIndex}-${char}`}
                        char={char}
                        globalIndex={currentIndex}
                        total={totalLength}
                        progress={scrollYProgress}
                      />
                    );
                  })}
                </span>
              );

              // Add space between words
              if (wIdx < words.length - 1) {
                charCounter++; // for space
                return (
                  <React.Fragment key={wIdx}>
                    {wordElements}
                    <span className="inline-block whitespace-pre"> </span>
                  </React.Fragment>
                );
              }
              return wordElements;
            })}
          </p>
        );
      })}
    </div>
  );
};

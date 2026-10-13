import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const Character: React.FC<{
  char: string;
  index: number;
  total: number;
  progress: any;
}> = ({ char, index, total, progress }) => {
  if (char === "\n") {
    return <span className="block h-3 w-full" aria-hidden="true" />;
  }

  const start = index / Math.max(total, 1);
  const end = Math.min(1, start + 0.05);
  const opacity = useTransform(progress, [start, end], [0.25, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-25 select-none pointer-events-none">{char === " " ? "\u00A0" : char}</span>
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 select-text"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "" }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // 글이 화면 중앙(center 0.5) 쯤에 도달했을 때 100% 완성(모두 흰색)되도록 offset 조정
    offset: ["start 0.85", "center 0.52"]
  });

  const characters = Array.from(text);

  return (
    <div
      ref={containerRef}
      className={`leading-relaxed tracking-normal ${className}`}
    >
      {characters.map((char, i) => (
        <Character
          key={`${i}-${char}`}
          char={char}
          index={i}
          total={characters.length}
          progress={scrollYProgress}
        />
      ))}
    </div>
  );
};

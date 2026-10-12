import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// About 섹션 오른쪽 아래에 사용 중인 보라색 화살표 에셋을 커서로 재사용합니다.
const arrowImage = "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png";

export const CursorTrail: React.FC = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 500, damping: 30, mass: 0.28 });
  const smoothY = useSpring(y, { stiffness: 500, damping: 30, mass: 0.28 });
  const previous = useRef({ x: 0, y: 0 });
  const rotation = useMotionValue(0);
  const smoothRotation = useSpring(rotation, { stiffness: 360, damping: 24 });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const velocityX = event.clientX - previous.current.x;
      const velocityY = event.clientY - previous.current.y;
      const angle = Math.max(-14, Math.min(14, velocityX * 0.45 + velocityY * 0.08));
      x.set(event.clientX + 12);
      y.set(event.clientY + 12);
      rotation.set(angle);
      previous.current = { x: event.clientX, y: event.clientY };
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [rotation, x, y]);

  return (
    <motion.div style={{ x: smoothX, y: smoothY, rotate: smoothRotation }} className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-12 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center md:flex" aria-hidden="true">
      <span className="absolute h-8 w-8 rounded-full bg-[#B600A8]/20 blur-xl" />
      <img src={arrowImage} alt="" className="relative w-11 object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)]" />
    </motion.div>
  );
};

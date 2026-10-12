import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";

function AnchorScrollHandler() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const element = document.querySelector<HTMLElement>(hash);
      if (element) {
        e.preventDefault();
        lenis.scrollTo(element, {
          offset: -80,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, [lenis]);

  return null;
}

interface SmoothScrollProps {
  children: React.ReactNode;
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      }}
    >
      <AnchorScrollHandler />
      {children}
    </ReactLenis>
  );
};

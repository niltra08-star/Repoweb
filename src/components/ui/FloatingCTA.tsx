"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function FloatingCTA() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Check if we've scrolled past the hero section (roughly 50vh)
    const threshold = typeof window !== "undefined" ? window.innerHeight * 0.5 : 500;
    
    if (latest > threshold && !isVisible) {
      setIsVisible(true);
    } else if (latest <= threshold && isVisible) {
      setIsVisible(false);
    }
  });

  const handleScrollToRequest = () => {
    const el = document.getElementById("solicitar-servicio");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: isVisible ? 1 : 0, 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      onClick={handleScrollToRequest}
      className={`
        fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50
        px-6 py-4 md:px-8 md:py-5
        bg-clay hover:bg-clay/90 text-white
        rounded-full shadow-xl shadow-clay/20
        font-body font-medium uppercase tracking-wider text-sm md:text-base
        transition-colors duration-300 pointer-events-auto
        flex items-center gap-2
      `}
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      <span>Comenzar Proyecto</span>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14"></path>
        <path d="M12 5l7 7-7 7"></path>
      </svg>
    </motion.button>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { letterStagger, staggerContainer } from "@/lib/animations";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 1000], [0, 300]);
  const yText = useTransform(scrollY, [0, 800], [0, -100]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);

  const firstName = "LUCÍA".split("");
  const lastName = "JIMÉNEZ".split("");

  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px] overflow-hidden bg-stone flex items-center justify-center">
      {/* Background Parallax */}
      <motion.div 
        className="absolute inset-0 z-0 h-[120%]"
        style={{ y: yImage }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-linen z-10" />
        <div className="absolute inset-0 bg-black/15 z-10 mix-blend-multiply" />
        {/* Placeholder gradient matching architecture mood */}
        <div 
          className="w-full h-full bg-cover bg-center object-cover" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')",
            filter: "sepia(0.2) contrast(1.1) brightness(0.9)"
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-20 text-center px-6 mt-16 md:mt-24 flex flex-col items-center"
        style={{ y: yText, opacity: opacityText }}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="font-display text-warm-white mb-2 md:mb-6 flex flex-col md:flex-row items-center gap-0 md:gap-8 lg:gap-12 leading-[0.85]"
        >
          <div className="flex overflow-hidden pb-4 md:pb-6">
            {firstName.map((letter, i) => (
              <motion.span 
                key={`first-${i}`} 
                variants={letterStagger}
                className="text-7xl md:text-[8rem] lg:text-[10rem] xl:text-[14rem] drop-shadow-lg inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <div className="flex overflow-hidden pb-4 md:pb-6">
            {lastName.map((letter, i) => (
              <motion.span 
                key={`last-${i}`} 
                variants={letterStagger}
                className="text-7xl md:text-[8rem] lg:text-[10rem] xl:text-[14rem] drop-shadow-lg inline-block text-sand"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="w-[1px] h-12 md:h-16 bg-warm-white/60 mb-2" />
          <h1 className="font-body text-warm-white/90 text-sm md:text-base lg:text-lg font-light tracking-[0.3em] uppercase max-w-lg mx-auto leading-relaxed">
            Diseño de Interiores <br className="md:hidden" />& Dirección de Arte
          </h1>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <span className="font-body text-xs uppercase tracking-widest text-warm-white/70">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-warm-white to-transparent"
        />
      </motion.div>
    </section>
  );
}

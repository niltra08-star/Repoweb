"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const NAV_LINKS = [
  { name: "Sobre Mí", href: "#sobre-mi" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Diario Visual", href: "#diario" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? "py-4 bg-linen/90 backdrop-blur-md shadow-sm" 
            : "py-6 md:py-8 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, "#hero")}
            className={`font-display text-2xl md:text-3xl z-50 relative transition-colors ${
              isScrolled || isMobileMenuOpen ? "text-charcoal" : "text-warm-white"
            }`}
          >
            Lucía.
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-body text-sm uppercase tracking-widest transition-colors hover:text-clay hover:underline underline-offset-8 decoration-sand decoration-2 ${
                  isScrolled ? "text-charcoal/80" : "text-warm-white/90"
                }`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={(e) => {
                // Not standard element anchor, let's cast
                handleNavClick(e as any, "#solicitar-servicio");
              }}
              className={`px-6 py-2 border rounded-full font-body text-sm uppercase tracking-widest transition-colors hover:bg-clay hover:text-white hover:border-clay ${
                isScrolled ? "border-clay text-clay" : "border-warm-white/80 text-warm-white/90"
              }`}
            >
              Contactar
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden z-50 relative p-2 focus:outline-none transition-colors ${
              isScrolled || isMobileMenuOpen ? "text-charcoal" : "text-warm-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 flex flex-col gap-1.5 items-end">
              <span className={`block h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? "w-6 rotate-45 translate-y-[8px]" : "w-6"}`} />
              <span className={`block h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "w-4"}`} />
              <span className={`block h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? "w-6 -rotate-45 -translate-y-[8px]" : "w-5"}`} />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? "auto" : "none"
        }}
        className="fixed inset-0 z-30 bg-linen flex flex-col justify-center items-center pt-20"
      >
        <div className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              initial={{ opacity: 0, y: 20 }}
              animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 * i }}
              className="font-display text-4xl text-charcoal"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
            onClick={(e) => handleNavClick(e as any, "#solicitar-servicio")}
            className="mt-4 px-8 py-4 bg-clay text-white rounded-full font-body tracking-wider uppercase"
          >
            Comenzar Proyecto
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}

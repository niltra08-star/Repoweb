"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  id = "",
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeInUp}
      custom={delay}
    >
      {children}
    </motion.section>
  );
}

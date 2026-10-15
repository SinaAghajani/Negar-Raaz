"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export default function PageTransition({
  children,
  className = "",
}: PageTransitionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.main
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.3,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.main>
  );
}

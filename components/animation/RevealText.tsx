"use client";

import { motion, useReducedMotion } from "motion/react";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function RevealText({
  text,
  className = "",
  delay = 0,
}: RevealTextProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay }}
    >
      {text}
    </motion.span>
  );
}

"use client";

import { motion, useReducedMotion } from "motion/react";
import { BookOpen, Sparkles } from "lucide-react";

interface OpeningBookProps {
  onOpen: () => void;
  loading?: boolean;
}

export default function OpeningBook({
  onOpen,
  loading = false,
}: OpeningBookProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mx-auto flex max-w-md flex-col items-center text-center">
      <motion.div
        animate={
          reduceMotion ? undefined : { y: [0, -8, 0], rotate: [0, -1, 0] }
        }
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative mb-9 flex h-64 w-52 items-center justify-center rounded-r-3xl border border-gold/70 bg-linear-to-br from-[#23674d] via-[#12402f] to-[#09251e] shadow-[12px_20px_55px_rgba(0,0,0,0.35)]"
      >
        <div className="absolute inset-3 rounded-r-2xl border border-gold/50" />
        <div className="absolute right-5 top-0 h-full w-1 bg-gold/40" />

        <div className="relative flex flex-col items-center gap-4">
          <Sparkles size={27} className="text-gold-light" />
          <BookOpen size={58} strokeWidth={1.2} className="text-gold-light" />
          <span className="text-xl font-bold text-gold-light">دیوان حافظ</span>
          <span className="text-xs text-foreground/80">نگار راز</span>
        </div>
      </motion.div>

      <h2 className="text-2xl font-bold text-gold-light">لحظه‌ای برای خودت</h2>

      <p className="mt-4 max-w-sm text-sm leading-8 text-muted">
        آرام بگیر، نیت کن و برای خواندن یکی از غزل‌های حافظ آماده شو.
      </p>

      <button
        type="button"
        onClick={onOpen}
        disabled={loading}
        className="mt-7 rounded-2xl bg-gold px-8 py-4 font-semibold text-background transition hover:bg-gold-light disabled:opacity-60"
      >
        {loading ? "در حال گشودن دیوان..." : "گشودن دیوان حافظ"}
      </button>
    </div>
  );
}

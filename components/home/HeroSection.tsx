"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, BookOpen, Sparkles } from "lucide-react";

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_30%,rgba(36,110,84,0.25),transparent_65%)]" />

      <div className="section-container grid min-h-155 items-center gap-12 py-20 md:grid-cols-2 md:py-28">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-2 text-sm text-gold">
            <Sparkles size={16} />
            دنیای شعر و رازهای حافظ
          </div>

          <h1 className="text-4xl font-bold leading-[1.8] text-foreground sm:text-5xl lg:text-6xl">
            گاهی یک غزل،
            <span className="block text-gold-light">پاسخ یک دل است</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-9 text-muted sm:text-lg">
            در باغ خیال حافظ قدم بزن، غزل‌هایش را بخوان و لحظه‌ای برای شنیدن
            صدای درونت آرام بگیر.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/fal"
              className="inline-flex items-center gap-3 rounded-2xl bg-gold px-6 py-4 font-semibold text-background transition hover:bg-gold-light"
            >
              <Sparkles size={19} />
              نیت کن و فال بگیر
              <ArrowLeft size={17} />
            </Link>

            <Link
              href="/ghazals"
              className="inline-flex items-center gap-3 rounded-2xl border border-border px-6 py-4 text-foreground transition hover:bg-surface"
            >
              <BookOpen size={19} />
              خواندن غزل‌ها
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.9, delay: 0.1 }}
          className="relative mx-auto flex aspect-square w-full max-w-105 items-center justify-center"
        >
          <div className="absolute inset-8 rounded-full border border-gold/20" />
          <div className="absolute inset-14 rounded-full border border-gold/15" />
          <div className="absolute inset-20 rounded-full bg-emerald-700/10 blur-3xl" />

          <div className="relative w-64 rotate-[-5deg] rounded-[28px] border border-gold/50 bg-linear-to-br from-[#1a5743] to-[#08231d] p-5 shadow-[0_25px_100px_rgba(0,0,0,0.4)] sm:w-72">
            <div className="flex aspect-3/4 flex-col items-center justify-center rounded-2xl border border-gold/50 px-5 text-center">
              <Sparkles size={29} className="mb-5 text-gold" />

              <div className="mt-4 h-px w-20 bg-gold/60" />
              <p className="mt-5 text-sm leading-8 text-foreground">
                به جهان خرم از آنم که جهان خرم از اوست
              </p>
              <p className="mt-3 text-xs text-muted">خواجه شمس‌الدین حافظ</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

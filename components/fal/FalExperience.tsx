"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { AlertCircle, RotateCcw } from "lucide-react";
import { useFal } from "@/features/fal/hooks/useFal";
import IntentionStep from "./IntentionStep";
import OpeningBook from "./OpeningBook";
import FalResultView from "./FalResult";

type ExperienceStep = "intention" | "book" | "result";

export default function FalExperience() {
  const { result, status, error, isLoading, getFal, reset } = useFal();
  const [step, setStep] = useState<ExperienceStep>("intention");
  const reduceMotion = useReducedMotion();

  async function startFal(intention: string) {
    setStep("book");

    const nextResult = await getFal(intention);

    if (nextResult) {
      setStep("result");
    } else {
      setStep("intention");
    }
  }

  function startAgain() {
    reset();
    setStep("intention");
  }

  return (
    <section className="section-container py-14 sm:py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <span className="text-sm text-gold">آیین فال حافظ</span>

        <h1 className="mt-4 text-3xl font-bold leading-relaxed text-gold-light sm:text-4xl">
          دلت را به غزل بسپار
        </h1>

        <p className="mt-4 leading-8 text-muted">
          لحظه‌ای آرام باش و برای خواندن شعر، نیت کن.
        </p>
      </div>

      <motion.div
        key={step}
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.35 }}
        className="mx-auto max-w-4xl"
      >
        {step === "intention" && (
          <IntentionStep onSubmit={startFal} loading={isLoading} />
        )}

        {step === "book" && (
          <OpeningBook onOpen={() => startFal("")} loading={isLoading} />
        )}

        {step === "result" && result && (
          <FalResultView result={result} onRetry={startAgain} />
        )}

        {error && (
          <div
            role="alert"
            className="mt-6 rounded-2xl border border-rose-400/30 bg-rose-950/20 p-5"
          >
            <div className="flex items-start gap-3 text-rose-200">
              <AlertCircle size={20} className="mt-1 shrink-0" />

              <div>
                <p className="font-semibold">دریافت فال انجام نشد</p>
                <p className="mt-2 text-sm leading-7">{error}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={startAgain}
              className="mt-4 inline-flex items-center gap-2 rounded-xl border border-rose-300/30 px-4 py-2 text-sm text-rose-100 transition hover:bg-rose-900/30"
            >
              <RotateCcw size={16} />
              تلاش دوباره
            </button>
          </div>
        )}

        {status === "idle" && step === "book" && (
          <p className="text-center text-sm text-muted">در انتظار شروع...</p>
        )}
      </motion.div>
    </section>
  );
}

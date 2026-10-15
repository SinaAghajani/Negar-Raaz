"use client";

import { useState } from "react";
import { Check, Copy, Share2 } from "lucide-react";
import type { HafezFortune } from "@/types/fal";

interface ShareFalButtonProps {
  fortune: HafezFortune;
}

export default function ShareFalButton({ fortune }: ShareFalButtonProps) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const text = [
    `فال حافظ: ${fortune.title}`,
    fortune.interpreter,
    "از نگار راز",
  ].join("\n\n");

  async function handleShare() {
    setError(null);

    try {
      if (navigator.share) {
        await navigator.share({
          title: `فال حافظ | ${fortune.title}`,
          text,
          url: window.location.href,
        });
        return;
      }

      await navigator.clipboard.writeText(`${text}\n\n${window.location.href}`);

      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (cause) {
      if (cause instanceof Error && cause.name === "AbortError") {
        return;
      }

      setError("اشتراک‌گذاری انجام نشد. دوباره تلاش کن.");
    }
  }

  async function handleCopy() {
    setError(null);

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setError("کپی کردن ممکن نشد. لطفاً دسترسی مرورگر را بررسی کن.");
    }
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <button
        type="button"
        onClick={handleShare}
        className="inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-background transition hover:bg-gold-light"
      >
        <Share2 size={17} />
        اشتراک‌گذاری
      </button>

      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm text-gold transition hover:bg-surface-light"
      >
        {copied ? <Check size={17} /> : <Copy size={17} />}
        {copied ? "کپی شد" : "کپی فال"}
      </button>

      {error && (
        <p role="alert" className="w-full text-center text-sm text-rose-300">
          {error}
        </p>
      )}
    </div>
  );
}

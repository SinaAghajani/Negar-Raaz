"use client";

import { FormEvent, useState } from "react";
import { Sparkles } from "lucide-react";

interface IntentionStepProps {
  onSubmit: (intention: string) => void;
  loading?: boolean;
}

export default function IntentionStep({
  onSubmit,
  loading = false,
}: IntentionStepProps) {
  const [intention, setIntention] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (loading) return;

    onSubmit(intention.trim());
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-xl">
      <label
        htmlFor="fal-intention"
        className="mb-3 block text-lg font-semibold text-gold-light"
      >
        دوست داری با چه نیتی فال بگیری؟
      </label>

      <p className="mb-5 text-sm leading-7 text-muted">
        می‌توانی نیتت را در دل نگه داری یا در چند کلمه بنویسی. نوشتن نیت اختیاری
        است.
      </p>

      <textarea
        id="fal-intention"
        value={intention}
        onChange={(event) => setIntention(event.target.value.slice(0, 500))}
        maxLength={500}
        rows={3}
        placeholder="نیت خود را اینجا بنویس..."
        disabled={loading}
        className="w-full resize-y rounded-2xl border border-border bg-surface px-4 py-4 leading-8 text-foreground outline-none transition placeholder:text-muted/70 focus:border-gold disabled:opacity-60"
      />

      <div className="mt-2 text-left text-xs text-muted" dir="ltr">
        {intention.length}/500
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gold px-6 py-4 font-semibold text-background transition hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Sparkles size={19} />
        {loading ? "در حال آماده‌سازی فال..." : "آغاز فال حافظ"}
      </button>
    </form>
  );
}

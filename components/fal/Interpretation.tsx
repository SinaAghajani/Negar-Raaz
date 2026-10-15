import { Sparkles } from "lucide-react";

interface InterpretationProps {
  text?: string;
  loading?: boolean;
}

export default function Interpretation({
  text,
  loading = false,
}: InterpretationProps) {
  return (
    <section
      aria-live="polite"
      className="rounded-2xl border border-border bg-surface-light/60 p-6 sm:p-8"
    >
      <div className="flex items-center gap-3">
        <Sparkles size={22} className="shrink-0 text-gold" />

        <h3 className="text-lg font-semibold text-gold-light">برداشت و تأمل</h3>
      </div>

      {loading ? (
        <p className="mt-5 animate-pulse leading-8 text-muted">
          در حال آماده‌سازی متن...
        </p>
      ) : text ? (
        <p className="mt-5 whitespace-pre-line text-sm leading-9 text-foreground/90">
          {text}
        </p>
      ) : (
        <p className="mt-5 text-sm leading-8 text-muted">
          برای این غزل هنوز شرحی ثبت نشده است. می‌توانی شعر را بخوانی و برداشت
          شخصی خودت را از آن داشته باشی.
        </p>
      )}

      <p className="mt-5 border-t border-border pt-4 text-xs leading-7 text-muted">
        این برداشت برای تأمل ادبی است؛ شعر را می‌توان از دیدگاه‌های گوناگون
        تفسیر کرد و نباید آن را پیش‌بینی قطعی آینده دانست.
      </p>
    </section>
  );
}

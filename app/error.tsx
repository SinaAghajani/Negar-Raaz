"use client";

import { useEffect } from "react";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import Link from "next/link";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error("Negar Raz application error:", error);
  }, [error]);

  return (
    <main
      dir="rtl"
      className="page-shell flex min-h-screen items-center justify-center px-5 py-16"
    >
      <section className="w-full max-w-xl text-center">
        <div className="relative mx-auto flex h-28 w-28 items-center justify-center">
          <div className="absolute inset-0 animate-pulse rounded-full border border-(--gold)/30" />

          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-(--border) bg-(--surface)">
            <AlertTriangle
              size={36}
              strokeWidth={1.5}
              className="text-(--gold)"
            />
          </div>
        </div>

        <p className="mt-8 text-sm font-medium text-(--gold)">
          وقفه‌ای در مسیر
        </p>

        <h1 className="mt-4 text-3xl font-bold leading-relaxed text-(--gold-light) sm:text-4xl">
          گاهی باید دوباره آغاز کرد
        </h1>

        <p className="mx-auto mt-5 max-w-md text-sm leading-8 text-(--muted)">
          متأسفانه هنگام نمایش این صفحه مشکلی پیش آمده است. می‌توانی دوباره تلاش
          کنی یا به صفحه اصلی نگار راز برگردی.
        </p>

        {error.digest && (
          <p className="mt-4 text-xs text-(--muted)" dir="ltr">
            Error ID: {error.digest}
          </p>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full bg-(--gold) px-6 py-3 font-semibold text-[#10241d] transition hover:bg-(--gold-light)"
          >
            <RefreshCw size={18} />
            تلاش دوباره
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-(--border) px-6 py-3 transition hover:bg-white/5"
          >
            <Home size={18} />
            صفحه اصلی
          </Link>
        </div>

        <div className="mt-10 text-3xl text-(--gold)/60">۞</div>

        <p className="mt-2 text-xs text-(--muted)">
          نگار راز؛ روایتی نو از شعر جاودانه حافظ
        </p>
      </section>
    </main>
  );
}

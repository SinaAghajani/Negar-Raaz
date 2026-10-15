import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <main
      dir="rtl"
      className="page-shell flex min-h-screen items-center justify-center px-5 py-16"
    >
      <section className="w-full max-w-xl text-center">
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-(--border) bg-(--surface)">
          <span className="text-6xl text-(--gold)">۞</span>
        </div>

        <p className="mt-8 text-sm font-medium tracking-widest text-(--gold)">
          ۴۰۴ — صفحه پیدا نشد
        </p>

        <h1 className="mt-4 text-3xl font-bold leading-relaxed text-(--gold-light) sm:text-4xl">
          این صفحه در دفتر رازها نیست!
        </h1>

        <p className="mx-auto mt-5 max-w-md text-sm leading-8 text-(--muted)">
          شاید نشانی را اشتباه وارد کرده‌ای یا صفحه موردنظرت جابه‌جا شده است.
          می‌توانی دوباره به باغ شعر حافظ برگردی.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-(--gold) px-6 py-3 font-semibold text-[#10241d] transition hover:bg-(--gold-light)"
          >
            <ArrowRight size={18} />
            بازگشت به خانه
          </Link>

          <Link
            href="/ghazals"
            className="inline-flex items-center gap-2 rounded-full border border-(--border) px-6 py-3 transition hover:bg-white/5"
          >
            <BookOpen size={18} />
            غزلیات حافظ
          </Link>
        </div>
      </section>
    </main>
  );
}

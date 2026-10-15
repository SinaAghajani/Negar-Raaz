import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "درباره‌ی نگار راز",
  description:
    "نگار راز فضایی برای خواندن غزل‌های حافظ، گرفتن فال و همراهی با شعر فارسی است.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="page-shell mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
      <article className="rounded-3xl border border-border bg-surface p-7 sm:p-12">
        <header className="mb-8 text-center">
          <p className="mb-3 text-sm text-gold">داستان ما</p>
          <h1 className="text-3xl font-bold text-gold-light">
            درباره‌ی نگار راز
          </h1>
        </header>

        <div className="space-y-6 leading-9 text-foreground">
          <p>
            نگار راز فضایی برای مکث، خواندن شعر و نزدیک‌تر شدن به جهان خیال و
            اندیشه‌ی حافظ است.
          </p>
          <p>
            در اینجا می‌توانی غزل‌ها را بخوانی، شعرهای محبوبت را نگه داری و با
            نیتی شخصی، تجربه‌ای شاعرانه از فال حافظ داشته باشی.
          </p>
          <p className="text-muted">
            فال و تعبیر آن را فرصتی برای تأمل و الهام در نظر بگیر، نه پیش‌بینی
            قطعی آینده یا جایگزینی برای تصمیم‌گیری آگاهانه.
          </p>
        </div>
      </article>
    </main>
  );
}

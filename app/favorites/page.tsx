import type { Metadata } from "next";
import FavoritesView from "@/components/favorites/FavoritesView";

export const metadata: Metadata = {
  title: "علاقه‌مندی‌ها",
  description: "غزل‌های محبوبت را در نگار راز مرور کن.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function FavoritesPage() {
  return (
    <main className="page-shell mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <header className="mb-10 text-center">
        <p className="mb-3 text-sm text-gold">کتابخانه‌ی شخصی</p>
        <h1 className="text-3xl font-bold text-foreground">غزل‌های محبوب من</h1>
        <p className="mt-4 text-muted">
          شعرهایی که برای بازگشت دوباره نگه داشته‌ای.
        </p>
      </header>
      <FavoritesView />
    </main>
  );
}

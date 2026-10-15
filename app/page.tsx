import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";

export const metadata: Metadata = {
  title: "صفحه اصلی",
  description:
    "به نگار راز خوش آمدید؛ تجربه‌ای دلنشین برای خواندن غزلیات حافظ و گرفتن فال حافظ.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div className="page-shell">
      <main>
        <HeroSection />
      </main>
    </div>
  );
}

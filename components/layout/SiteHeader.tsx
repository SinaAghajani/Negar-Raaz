import Link from "next/link";
import { BookOpen, Heart, Menu, Sparkles } from "lucide-react";
import MobileNavigation from "./MobileNavigation";

const navigation = [
  { href: "/", label: "خانه" },
  { href: "/fal", label: "فال حافظ" },
  { href: "/about", label: "درباره ما" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="section-container flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-2xl border border-border bg-surface text-gold">
            <BookOpen size={23} />
          </span>
          <span>
            <span className="block text-lg font-bold text-gold-light">
              نگار راز
            </span>
            <span className="block text-[11px] text-muted">
              دریچه‌ای به جهان حافظ
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="منوی اصلی"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition hover:text-gold-light"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/favorites"
            aria-label="علاقه‌مندی‌ها"
            className="hidden rounded-xl border border-border p-3 text-gold transition hover:bg-surface md:inline-flex"
          >
            <Heart size={19} />
          </Link>

          <Link
            href="/fal"
            className="hidden items-center gap-2 rounded-xl bg-gold px-4 py-3 text-sm font-semibold text-background transition hover:bg-gold-light sm:inline-flex"
          >
            <Sparkles size={17} />
            گرفتن فال
          </Link>

          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}

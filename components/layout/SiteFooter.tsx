import Link from "next/link";
import { BookOpen, Heart } from "lucide-react";

const footerLinks = [
  { href: "/fal", label: "فال حافظ" },
  { href: "/favorites", label: "علاقه‌مندی‌ها" },
  { href: "/about", label: "درباره نگار راز" },
];

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-[#061815]">
      <div className="section-container py-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <BookOpen size={25} className="text-gold" />
              <span className="text-xl font-bold text-gold-light">
                نگار راز
              </span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-8 text-muted">
              همراهی برای خواندن غزل‌های حافظ، مکثی در میان روزمرگی‌ها و کشف
              دوباره زیبایی شعر فارسی.
            </p>
          </div>

          <nav
            aria-label="پیوندهای پایین صفحه"
            className="grid grid-cols-2 content-start gap-4"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} نگار راز</p>
          <p className="flex items-center gap-2">
            ساخته‌شده با عشق به شعر فارسی
            <Heart size={14} className="text-gold" />
          </p>
        </div>
      </div>
    </footer>
  );
}

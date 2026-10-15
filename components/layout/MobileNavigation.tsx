"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "خانه" },
  { href: "/fal", label: "فال حافظ" },
  { href: "/favorites", label: "علاقه‌مندی‌ها" },
  { href: "/about", label: "درباره ما" },
];

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        aria-label={open ? "بستن منو" : "باز کردن منو"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
        className="rounded-xl border border-border p-3 text-gold"
      >
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-label="بستن منو"
            className="fixed inset-0 z-40 cursor-default bg-black/40"
            onClick={() => setOpen(false)}
          />

          <nav
            id="mobile-navigation"
            aria-label="منوی موبایل"
            className="absolute left-0 top-14 z-50 w-64 rounded-2xl border border-border bg-surface p-3 shadow-2xl"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-foreground transition hover:bg-surface-light hover:text-gold"
              >
                {link.href === "/favorites" && <Heart size={16} />}
                {link.label}
              </Link>
            ))}
          </nav>
        </>
      )}
    </div>
  );
}

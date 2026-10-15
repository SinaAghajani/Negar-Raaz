"use client";

import type { Ghazal } from "@/types/ghazal";
import { Heart } from "lucide-react";

interface FavoritesListProps {
  ghazals: Ghazal[];
  onSelect?: (ghazal: Ghazal) => void;
}

export default function FavoritesList({
  ghazals,
  onSelect,
}: FavoritesListProps) {
  if (ghazals.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-surface px-5 py-14 text-center">
        <Heart size={36} className="mb-4 text-gold" />

        <h2 className="mb-2 text-lg font-semibold text-foreground">
          هنوز غزلی ذخیره نکرده‌اید
        </h2>

        <p className="max-w-md text-sm leading-7 text-muted">
          غزل‌های موردعلاقه‌تان را با انتخاب علامت قلب ذخیره کنید تا بعداً
          به‌راحتی به آن‌ها دسترسی داشته باشید.
        </p>
      </div>
    );
  }
}

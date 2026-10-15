"use client";

import { Heart } from "lucide-react";

interface FavoriteButtonProps {
  isFavorite: boolean;
  onToggle: () => void;
  disabled?: boolean;
  className?: string;
}

export default function FavoriteButton({
  isFavorite,
  onToggle,
  disabled = false,
  className = "",
}: FavoriteButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      disabled={disabled}
      aria-label={
        isFavorite ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"
      }
      aria-pressed={isFavorite}
      className={`inline-flex items-center justify-center rounded-xl border border-border p-3 transition hover:bg-surface-light disabled:opacity-50 ${className}`}
    >
      <Heart
        size={20}
        fill={isFavorite ? "currentColor" : "none"}
        className={isFavorite ? "text-rose-400" : "text-gold"}
      />
    </button>
  );
}

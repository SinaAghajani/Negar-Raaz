"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Ghazal } from "@/types/ghazal";

const FAVORITES_KEY = "negar-raz-favorites";

export default function FavoritesView() {
  const [items, setItems] = useState<Ghazal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        const stored = localStorage.getItem(FAVORITES_KEY);
        const parsed: unknown = stored ? JSON.parse(stored) : [];

        if (!Array.isArray(parsed)) {
          return;
        }

        const ids = parsed.filter(
          (value): value is string =>
            typeof value === "string" &&
            value.length > 0 &&
            value.length <= 200,
        );

        const results = await Promise.all(
          ids.map(async (id) => {
            try {
              const response = await fetch(
                `/api/ghazals/${encodeURIComponent(id)}`,
                { cache: "no-store" },
              );

              if (!response.ok) return null;

              const payload: { data?: Ghazal } = await response.json();
              return payload.data ?? null;
            } catch {
              return null;
            }
          }),
        );

        if (active) {
          setItems(results.filter((item): item is Ghazal => item !== null));
        }
      } catch {
        if (active) setItems([]);
      } finally {
        if (active) setLoading(false);
      }
    }

    void load();

    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return (
      <p className="py-12 text-center text-muted" aria-live="polite">
        در حال بارگذاری علاقه‌مندی‌ها...
      </p>
    );
  }

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-border bg-surface p-8 text-center">
        <p className="text-foreground">
          هنوز غزلی به علاقه‌مندی‌ها اضافه نشده است.
        </p>
        <Link
          href="/ghazals"
          className="mt-4 inline-block text-gold hover:underline"
        >
          مشاهده‌ی غزل‌ها
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((ghazal) => (
        <article
          key={ghazal.id}
          className="rounded-2xl border border-border bg-surface p-6"
        >
          <h2 className="text-lg font-semibold text-gold-light">
            {ghazal.title || "غزلی از حافظ"}
          </h2>
          <p className="mt-4 line-clamp-3 leading-8 text-foreground">
            {ghazal.verses
              .slice(0, 2)
              .map((verse) => `${verse.first} ${verse.second}`)
              .join(" ")}
          </p>
          <Link
            href={`/ghazals/${encodeURIComponent(ghazal.id)}`}
            className="mt-5 inline-block text-sm text-gold hover:underline"
          >
            خواندن غزل
          </Link>
        </article>
      ))}
    </div>
  );
}

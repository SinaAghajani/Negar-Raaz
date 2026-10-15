import Link from "next/link";
import type { Ghazal } from "@/types/ghazal";
import { BookOpen } from "lucide-react";

interface FeaturedGhazalProps {
  ghazal: Ghazal;
}

export default function FeaturedGhazal({ ghazal }: FeaturedGhazalProps) {
  return (
    <section className="py-16">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-linear-to-br from-surface-light to-surface px-6 py-10 sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute -left-12 -top-16 size-56 rounded-full bg-gold/5 blur-3xl" />

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 text-sm text-gold">
              <BookOpen size={17} />
              غزلی برای امروز
            </span>

            <h2 className="mt-4 text-2xl font-bold text-gold-light">
              {ghazal.title || `غزل شماره ${ghazal.id}`}
            </h2>

            <div className="mt-8 space-y-6">
              {ghazal.verses.slice(0, 3).map((verse, index) => (
                <p
                  key={`${ghazal.id}-${index}`}
                  className="text-base leading-9 text-foreground sm:text-lg"
                >
                  {verse.first}
                  <br />
                  {verse.second}
                </p>
              ))}
            </div>

            <p className="mt-7 text-sm text-muted">{ghazal.poet}</p>

            <Link
              href={`/ghazals/${encodeURIComponent(ghazal.id)}`}
              className="mt-7 inline-flex rounded-xl border border-border px-5 py-3 text-sm text-gold transition hover:bg-gold hover:text-background"
            >
              خواندن غزل کامل
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

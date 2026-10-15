import type { Ghazal } from "@/types/ghazal";
import { BookOpen } from "lucide-react";

interface GhazalVersesProps {
  ghazal: Ghazal;
}

export default function GhazalVerses({ ghazal }: GhazalVersesProps) {
  return (
    <article className="rounded-3xl border border-border bg-surface px-5 py-8 sm:px-10 sm:py-12">
      <div className="mb-8 text-center">
        <BookOpen size={25} className="mx-auto text-gold" />

        <h2 className="mt-4 text-2xl font-bold leading-relaxed text-gold-light">
          {ghazal.title || `غزل شماره ${ghazal.id}`}
        </h2>

        <p className="mt-2 text-sm text-muted">{ghazal.poet}</p>
      </div>

      <div className="space-y-5">
        {ghazal.verses.map((verse, index) => (
          <div
            key={`${ghazal.id}-${index}`}
            className="grid grid-cols-1 gap-2 border-b border-border/60 pb-5 text-center leading-9 last:border-0 sm:grid-cols-2 sm:gap-6"
          >
            <p>{verse.first}</p>
            <p>{verse.second}</p>
          </div>
        ))}
      </div>

      {ghazal.source && (
        <p className="mt-5 text-center text-xs text-muted">
          منبع: {ghazal.source}
        </p>
      )}
    </article>
  );
}

"use client";

import { Html, useProgress } from "@react-three/drei";

export default function SceneLoader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="min-w-40 rounded-2xl border border-border bg-surface px-5 py-4 text-center text-sm text-foreground">
        <div className="mb-2 text-gold">در حال آماده‌سازی باغ حافظ</div>

        <div
          className="h-1.5 overflow-hidden rounded-full bg-surface-light"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
        >
          <div
            className="h-full rounded-full bg-gold transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-2 text-xs text-muted">{Math.round(progress)}٪</div>
      </div>
    </Html>
  );
}

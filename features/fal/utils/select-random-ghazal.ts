import type { Ghazal } from "@/types/ghazal";

export function selectRandomGhazal(
    ghazals: readonly Ghazal[],
    excludeIds: readonly string[] = [],
): Ghazal {
    if (ghazals.length === 0) {
        throw new Error("فهرست غزلیات خالی است.");
    }

    const excluded = new Set(excludeIds);
    const available = ghazals.filter(
        (ghazal) => !excluded.has(ghazal.id),
    );
    const pool = available.length > 0 ? available : ghazals;

    const randomIndex = Math.floor(Math.random() * pool.length);

    return pool[randomIndex];
}
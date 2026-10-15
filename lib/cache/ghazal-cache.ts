
import "server-only";

import { CACHE_TTL_MS } from "@/lib/constants";
import type { Ghazal } from "@/types/ghazal";

interface CacheEntry {
    value: Ghazal[];
    expiresAt: number;
}

const cache = new Map<string, CacheEntry>();

export function getCachedGhazals(key: string): Ghazal[] | null {
    const entry = cache.get(key);

    if (!entry) {
        return null;
    }

    if (entry.expiresAt <= Date.now()) {
        cache.delete(key);
        return null;
    }

    return entry.value;
}

export function setCachedGhazals(
    key: string,
    value: Ghazal[],
    ttlMs = CACHE_TTL_MS,
): void {
    cache.set(key, {
        value,
        expiresAt: Date.now() + Math.max(0, ttlMs),
    });
}

export function clearGhazalCache(key?: string): void {
    if (key) {
        cache.delete(key);
        return;
    }

    cache.clear();
}

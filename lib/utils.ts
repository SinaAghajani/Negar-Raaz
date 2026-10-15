
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}

export function normalizePersianText(value: string): string {
    return value
        .normalize("NFC")
        .replace(/[يى]/g, "ی")
        .replace(/ك/g, "ک")
        .replace(/ۀ/g, "ه")
        .replace(/\u0640/g, "")
        .replace(/[\u200B-\u200F\uFEFF]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

export function normalizeSearchText(value: string): string {
    return normalizePersianText(value)
        .replace(/[\u064B-\u065F\u0670]/g, "")
        .toLocaleLowerCase("fa-IR");
}

export function clamp(
    value: number,
    min: number,
    max: number,
): number {
    return Math.min(Math.max(value, min), max);
}

export function toPositiveInteger(
    value: string | number | null | undefined,
    fallback: number,
    max = Number.MAX_SAFE_INTEGER,
): number {
    const parsed = typeof value === "number" ? value : Number(value);

    if (!Number.isSafeInteger(parsed) || parsed < 1) {
        return fallback;
    }

    return Math.min(parsed, max);
}

export function isRecord(
    value: unknown,
): value is Record<string, unknown> {
    return (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
    );
}

export function createId(): string {
    return crypto.randomUUID();
}

export function shuffle<T>(items: readonly T[]): T[] {
    const result = [...items];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

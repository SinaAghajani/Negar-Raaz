export interface GhazalVerse {
    first: string;
    second: string;
}

export interface Ghazal {
    id: string;
    title: string;
    poet: string;
    verses: GhazalVerse[];
    source?: string;
}

export interface GhazalSearchOptions {
    query?: string;
    page?: number;
    limit?: number;
}

export interface PaginatedGhazals {
    items: Ghazal[];
    page: number;
    limit: number;
    total: number;
    totalPages: number;
}

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function isGhazal(value: unknown): value is Ghazal {
    if (!isRecord(value)) return false;

    return (
        typeof value.id === "string" &&
        typeof value.title === "string" &&
        typeof value.poet === "string" &&
        Array.isArray(value.verses) &&
        value.verses.every(
            (verse) =>
                isRecord(verse) &&
                typeof verse.first === "string" &&
                typeof verse.second === "string",
        )
    );
}

export const APP_NAME = "نگار راز";
export const API_BASE_URL = "/api";
export const API_TIMEOUT_MS = 10_000;
export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 12;
export const MAX_PAGE_SIZE = 48;
export const MAX_SEARCH_LENGTH = 120;
export const CACHE_TTL_MS = 5 * 60 * 1000;
export const MAX_FAL_HISTORY = 30;
export const MAX_FAVORITES = 500;

export const STORAGE_KEYS = {
    favorites: "negar-raz:favorites:v1",
    falHistory: "negar-raz:fal-history:v1",
} as const;
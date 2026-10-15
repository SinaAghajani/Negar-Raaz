export const localStorageService = {
    get<T>(key: string, fallback: T): T {
        if (typeof window === "undefined") return fallback;

        try {
            const value = window.localStorage.getItem(key);
            return value === null ? fallback : (JSON.parse(value) as T);
        } catch {
            return fallback;
        }
    },

    set<T>(key: string, value: T): boolean {
        if (typeof window === "undefined") return false;

        try {
            window.localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch {
            return false;
        }
    },

    remove(key: string): boolean {
        if (typeof window === "undefined") return false;

        try {
            window.localStorage.removeItem(key);
            return true;
        } catch {
            return false;
        }
    },
};
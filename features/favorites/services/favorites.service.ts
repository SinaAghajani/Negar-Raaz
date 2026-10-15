import { MAX_FAVORITES, STORAGE_KEYS } from "@/lib/constants";
import { localStorageService } from "@/lib/storage/local-storage";

export const favoritesService = {
    getAll(): string[] {
        const values = localStorageService.get<unknown>(
            STORAGE_KEYS.favorites,
            [],
        );

        if (!Array.isArray(values)) {
            return [];
        }

        return [
            ...new Set(
                values.filter(
                    (value): value is string =>
                        typeof value === "string" && value.length > 0,
                ),
            ),
        ].slice(0, MAX_FAVORITES);
    },

    has(id: string): boolean {
        return this.getAll().includes(id);
    },

    add(id: string): string[] {
        const current = this.getAll();

        if (!id.trim() || current.includes(id)) {
            return current;
        }

        const updated = [id, ...current].slice(0, MAX_FAVORITES);

        localStorageService.set(STORAGE_KEYS.favorites, updated);

        return updated;
    },

    remove(id: string): string[] {
        const updated = this.getAll().filter((item) => item !== id);

        localStorageService.set(STORAGE_KEYS.favorites, updated);

        return updated;
    },

    toggle(id: string): string[] {
        return this.has(id) ? this.remove(id) : this.add(id);
    },

    clear(): void {
        localStorageService.remove(STORAGE_KEYS.favorites);
    },
};
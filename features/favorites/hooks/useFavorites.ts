"use client";

import { useCallback, useEffect, useState } from "react";
import { favoritesService } from "@/features/favorites/services/favorites.service";

export function useFavorites() {
    const [favorites, setFavorites] = useState<string[]>([]);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setFavorites(favoritesService.getAll());
        setIsReady(true);
    }, []);

    const toggleFavorite = useCallback((id: string) => {
        const updated = favoritesService.toggle(id);
        setFavorites(updated);

        return updated;
    }, []);

    const addFavorite = useCallback((id: string) => {
        const updated = favoritesService.add(id);
        setFavorites(updated);

        return updated;
    }, []);

    const removeFavorite = useCallback((id: string) => {
        const updated = favoritesService.remove(id);
        setFavorites(updated);

        return updated;
    }, []);

    const isFavorite = useCallback(
        (id: string) => favorites.includes(id),
        [favorites],
    );

    const clearFavorites = useCallback(() => {
        favoritesService.clear();
        setFavorites([]);
    }, []);

    return {
        favorites,
        count: favorites.length,
        isReady,
        isFavorite,
        toggleFavorite,
        addFavorite,
        removeFavorite,
        clearFavorites,
    };
}
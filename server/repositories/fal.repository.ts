import "server-only";

import type { FalResult } from "@/types/fal";

const results = new Map<string, FalResult>();

export const falRepository = {
    async create(result: FalResult): Promise<void> {
        results.set(result.id, structuredClone(result));
    },

    async getById(id: string): Promise<FalResult | null> {
        const result = results.get(id);
        return result ? structuredClone(result) : null;
    },
};
import { apiClient } from "@/lib/api/client";
import { ValidationError } from "@/lib/api/errors";
import type { CreateFalInput, FalResult } from "@/types/fal";

export const falService = {
    async create(
        input: CreateFalInput = {},
        signal?: AbortSignal,
    ): Promise<FalResult> {
        const intention = input.intention?.trim() ?? "";

        if (intention.length > 500) {
            throw new ValidationError(
                "متن نیت نمی‌تواند بیشتر از ۵۰۰ نویسه باشد.",
            );
        }

        const response = await apiClient.post<
            { result: FalResult },
            CreateFalInput
        >("/api/fal", { intention }, { signal });

        return response.result;
    },
};
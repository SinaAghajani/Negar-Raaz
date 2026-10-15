import "server-only";

import { createId } from "@/lib/utils";
import { hafezProvider } from "@/server/providers/hafez.provider";
import type { CreateFalInput, FalResult } from "@/types/fal";

export async function createFal(
    input: CreateFalInput = {},
): Promise<FalResult> {
    const intention = input.intention?.trim() ?? "";

    if (intention.length > 500) {
        throw new Error("متن نیت نمی‌تواند بیشتر از ۵۰۰ نویسه باشد.");
    }

    const ghazal = await hafezProvider.getRandom();

    return {
        id: createId(),
        ghazal,
        createdAt: new Date().toISOString(),
    };
}
"use server";

import { createFal } from "./services/fal.server-service";
import type { CreateFalInput, FalResult } from "@/types/fal";

export type CreateFalActionResult =
    | { success: true; data: FalResult }
    | { success: false; error: string };

export async function createFalAction(
    input: CreateFalInput,
): Promise<CreateFalActionResult> {
    const intention = input.intention?.trim() ?? "";

    if (intention.length > 500) {
        return {
            success: false,
            error: "متن نیت نمی‌تواند بیشتر از ۵۰۰ نویسه باشد.",
        };
    }

    try {
        const data = await createFal({ intention });

        return { success: true, data };
    } catch {
        return {
            success: false,
            error: "دریافت فال با مشکل مواجه شد. دوباره تلاش کن.",
        };
    }
}
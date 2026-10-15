import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { z } from "zod";
import { hafezProvider } from "@/server/providers/hafez.provider";
import { falRepository } from "@/server/repositories/fal.repository";
import { ApiError } from "@/lib/api/errors";
import type { FalResult } from "@/types/fal";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const createFalSchema = z.object({
    intention: z.string().trim().max(500).optional().default(""),
});

export async function POST(request: NextRequest) {
    const requestId = randomUUID();

    try {
        let body: unknown;

        try {
            body = await request.json();
        } catch {
            return NextResponse.json(
                {
                    error: {
                        code: "INVALID_JSON",
                        message: "ساختار درخواست معتبر نیست.",
                        requestId,
                    },
                },
                {
                    status: 400,
                    headers: {
                        "Cache-Control": "no-store",
                        "X-Request-Id": requestId,
                    },
                },
            );
        }

        const parsed = createFalSchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json(
                {
                    error: {
                        code: "VALIDATION_ERROR",
                        message: "اطلاعات ارسالی معتبر نیست.",
                        requestId,
                    },
                },
                {
                    status: 400,
                    headers: {
                        "Cache-Control": "no-store",
                        "X-Request-Id": requestId,
                    },
                },
            );
        }

        const fortune = hafezProvider.getRandomFortune();

        const result: FalResult = {
            id: randomUUID(),
            fortune: {
                id: fortune.id,
                title: fortune.title,
                interpreter: fortune.interpreter,
            },
            createdAt: new Date().toISOString(),
        };

        await falRepository.create(result);

        return NextResponse.json(
            { result },
            {
                status: 201,
                headers: {
                    "Cache-Control": "no-store",
                    "X-Request-Id": requestId,
                },
            },
        );
    } catch (error) {
        const status = error instanceof ApiError ? error.status : 500;
        const code =
            error instanceof ApiError ? error.code : "INTERNAL_ERROR";
        const message =
            error instanceof ApiError && status < 500
                ? error.message
                : "در دریافت فال مشکلی پیش آمد. لطفاً دوباره تلاش کن.";

        return NextResponse.json(
            {
                error: {
                    code,
                    message,
                    requestId,
                },
            },
            {
                status,
                headers: {
                    "Cache-Control": "no-store",
                    "X-Request-Id": requestId,
                },
            },
        );
    }
}

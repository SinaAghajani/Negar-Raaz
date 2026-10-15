"use client";

import { useCallback, useRef, useState } from "react";
import { falService } from "../services/fal.service";
import { getErrorMessage } from "@/lib/api/errors";
import type { FalResult, FalStatus } from "@/types/fal";

export function useFal() {
    const [result, setResult] = useState<FalResult | null>(null);
    const [status, setStatus] = useState<FalStatus>("idle");
    const [error, setError] = useState<string | null>(null);
    const controllerRef = useRef<AbortController | null>(null);

    const getFal = useCallback(async (intention = "") => {
        controllerRef.current?.abort();

        const controller = new AbortController();
        controllerRef.current = controller;

        setStatus("loading");
        setError(null);

        try {
            const nextResult = await falService.create(
                { intention },
                controller.signal,
            );

            setResult(nextResult);
            setStatus("success");

            return nextResult;
        } catch (cause) {
            if (cause instanceof Error && cause.name === "AbortError") {
                return null;
            }

            setError(getErrorMessage(cause));
            setStatus("error");

            return null;
        } finally {
            if (controllerRef.current === controller) {
                controllerRef.current = null;
            }
        }
    }, []);

    const reset = useCallback(() => {
        controllerRef.current?.abort();
        controllerRef.current = null;
        setResult(null);
        setError(null);
        setStatus("idle");
    }, []);

    return {
        result,
        status,
        error,
        isLoading: status === "loading",
        getFal,
        reset,
    };
}
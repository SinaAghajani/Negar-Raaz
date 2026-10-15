import type { Ghazal } from "@/types/ghazal";

export type FalStatus = "idle" | "loading" | "success" | "error";

export interface FalResult {
    id: string;
    ghazal: Ghazal;
    createdAt: string;
    interpretation?: string;
}

export interface CreateFalInput {
    intention?: string;
}

export interface FalResponse {
    result: FalResult;
}
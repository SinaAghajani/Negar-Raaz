export type FalStatus = "idle" | "loading" | "success" | "error";

export interface HafezFortune {
    id: string;
    title: string;
    interpreter: string;
}

export interface FalResult {
    id: string;
    fortune: HafezFortune;
    createdAt: string;
}

export interface CreateFalInput {
    intention?: string;
}

export interface FalResponse {
    result: FalResult;
}
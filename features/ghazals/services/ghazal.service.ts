import { apiClient } from "@/lib/api/client";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE } from "@/lib/constants";
import { ValidationError } from "@/lib/api/errors";
import type {
    Ghazal,
    GhazalSearchOptions,
    PaginatedGhazals,
} from "@/types/ghazal";

export const ghazalService = {
    async getById(id: string): Promise<Ghazal> {
        if (!id.trim()) {
            throw new ValidationError("شناسه غزل الزامی است.");
        }

        return apiClient.get<Ghazal>(
            `/api/ghazals/${encodeURIComponent(id)}`,
        );
    },

    async search(
        options: GhazalSearchOptions = {},
    ): Promise<PaginatedGhazals> {
        const page = options.page ?? DEFAULT_PAGE;
        const limit = options.limit ?? DEFAULT_PAGE_SIZE;
        const query = options.query?.trim() ?? "";

        if (!Number.isInteger(page) || page < 1) {
            throw new ValidationError("شماره صفحه معتبر نیست.");
        }

        if (
            !Number.isInteger(limit) ||
            limit < 1 ||
            limit > MAX_PAGE_SIZE
        ) {
            throw new ValidationError("تعداد نتایج درخواستی معتبر نیست.");
        }

        const params = new URLSearchParams({
            page: String(page),
            limit: String(limit),
        });

        if (query) {
            params.set("q", query);
        }

        return apiClient.get<PaginatedGhazals>(
            `/api/ghazals?${params.toString()}`,
        );
    },
};

export interface ApiSuccess<T> {
    success: true;
    data: T;
}

export interface ApiFailure {
    success: false;
    error: {
        code: string;
        message: string;
    };
}

export type ApiResponse<T> = ApiSuccess<T> | ApiFailure;

export interface Pagination {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
}

export interface PaginatedData<T> {
    items: T[];
    pagination: Pagination;
}

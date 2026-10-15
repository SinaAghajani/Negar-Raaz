export class AppError extends Error {
    readonly code: string;
    readonly status: number;
    readonly details?: unknown;

    constructor(
        message: string,
        options: {
            code: string;
            status: number;
            details?: unknown;
        },
    ) {
        super(message);
        this.name = "AppError";
        this.code = options.code;
        this.status = options.status;
        this.details = options.details;
    }
}

export class NetworkError extends AppError {
    constructor(message = "ارتباط با سرور برقرار نشد.") {
        super(message, { code: "NETWORK_ERROR", status: 0 });
        this.name = "NetworkError";
    }
}

export class RequestTimeoutError extends AppError {
    constructor(message = "زمان درخواست به پایان رسید.") {
        super(message, { code: "REQUEST_TIMEOUT", status: 408 });
        this.name = "RequestTimeoutError";
    }
}

export class ValidationError extends AppError {
    constructor(message: string, details?: unknown) {
        super(message, {
            code: "VALIDATION_ERROR",
            status: 400,
            details,
        });
        this.name = "ValidationError";
    }
}

export class NotFoundError extends AppError {
    constructor(message = "مورد درخواستی پیدا نشد.") {
        super(message, { code: "NOT_FOUND", status: 404 });
        this.name = "NotFoundError";
    }
}

export function getErrorMessage(error: unknown): string {
    if (error instanceof AppError) return error.message;
    if (error instanceof Error) return error.message;
    return "خطای غیرمنتظره‌ای رخ داده است.";
}

export class ApiError extends AppError {
    constructor(
        code: string,
        message: string,
        statusCode = 500,
        details?: unknown,
    ) {
        super(message, {
            code,
            status: statusCode,
            details,
        });

        this.name = "ApiError";
    }
}
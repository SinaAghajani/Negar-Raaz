import {
  NetworkError,
  RequestTimeoutError,
} from "@/lib/api/errors";

type RequestOptions = {
  signal?: AbortSignal;
  headers?: HeadersInit;
};

const DEFAULT_TIMEOUT = 10000;

async function request<T>(
  method: "GET" | "POST",
  url: string,
  body?: unknown,
  options: RequestOptions = {},
): Promise<T> {
  const controller = new AbortController();
  let timedOut = false;

  const timeout = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, DEFAULT_TIMEOUT);

  const abortRequest = () => controller.abort();

  if (options.signal?.aborted) {
    clearTimeout(timeout);
    throw new DOMException("The request was aborted.", "AbortError");
  }

  options.signal?.addEventListener("abort", abortRequest, {
    once: true,
  });

  try {
    const response = await fetch(url, {
      method,
      headers: {
        Accept: "application/json",
        ...(body !== undefined
          ? { "Content-Type": "application/json" }
          : {}),
        ...options.headers,
      },
      body: body !== undefined ? JSON.stringify(body) : undefined,
      signal: controller.signal,
      cache: "no-store",
    });

    if (!response.ok) {
      let message = `Request failed with status ${response.status}.`;

      try {
        const payload: unknown = await response.json();

        if (
          typeof payload === "object" &&
          payload !== null &&
          "error" in payload
        ) {
          const errorPayload = payload.error;

          if (
            typeof errorPayload === "object" &&
            errorPayload !== null &&
            "message" in errorPayload &&
            typeof errorPayload.message === "string"
          ) {
            message = errorPayload.message;
          }
        }
      } catch {}

      throw new NetworkError(message);
    }

    try {
      return (await response.json()) as T;
    } catch {
      throw new NetworkError("The server returned invalid JSON.");
    }
  } catch (error) {
    if (error instanceof NetworkError) {
      throw error;
    }

    if (timedOut) {
      throw new RequestTimeoutError();
    }

    if (
      error instanceof Error &&
      error.name === "AbortError"
    ) {
      throw error;
    }

    throw new NetworkError();
  } finally {
    clearTimeout(timeout);
    options.signal?.removeEventListener("abort", abortRequest);
  }
}

export const apiClient = {
  get<T>(url: string, options?: RequestOptions): Promise<T> {
    return request<T>("GET", url, undefined, options);
  },

  post<T, B = unknown>(
    url: string,
    body: B,
    options?: RequestOptions,
  ): Promise<T> {
    return request<T>("POST", url, body, options);
  },
};

export async function fetchJson<T>(
  url: string,
  init: RequestInit = {},
): Promise<T> {
  let response: Response;

  try {
    response = await fetch(url, {
      ...init,
      signal: init.signal ?? AbortSignal.timeout(DEFAULT_TIMEOUT),
      headers: {
        Accept: "application/json",
        ...init.headers,
      },
    });
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw error;
    }

    throw new NetworkError("ارتباط با سرویس برقرار نشد.");
  }

  if (!response.ok) {
    throw new NetworkError(
      `درخواست با وضعیت ${response.status} ناموفق بود.`,
    );
  }

  try {
    return (await response.json()) as T;
  } catch {
    throw new NetworkError("پاسخ دریافتی JSON معتبر نیست.");
  }
}


export type Nullable<T> = T | null;

export type MaybePromise<T> = T | Promise<T>;

export type SortDirection = "asc" | "desc";

export interface SelectOption<T extends string = string> {
    label: string;
    value: T;
    disabled?: boolean;
}

export interface Timestamped {
    createdAt: string;
    updatedAt?: string;
}

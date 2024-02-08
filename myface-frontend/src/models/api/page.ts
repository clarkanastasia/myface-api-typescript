export interface Page<T> {
    results: T[];
    previous: string | null;
    next: string | null;
    total: number;
}
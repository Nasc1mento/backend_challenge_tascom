export interface IRepository <T> {
    save(t: T): Promise<T>;
    getAll(): Promise<T[]>;
    get(id: string): Promise<T>;
    update(id: string, t: T): Promise<T>;
}
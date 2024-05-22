export interface IRepository <T> {
    save(t: T): Promise<T>;
    getAll(userId: string): Promise<T[]>;
    get(id: string): Promise<T>;
    update(tId: string, t: T): Promise<T>;
}
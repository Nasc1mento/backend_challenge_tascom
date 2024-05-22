export interface IAuthRepository {
    findByEmail(email: string, password: string): Promise<any>;
    create(name: string, email: string, password: string): Promise<any>;
}
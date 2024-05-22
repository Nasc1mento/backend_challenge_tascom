import { User } from "../../models/user/user.model";
import { IAuthRepository } from "./auth.interface.repository";


export class AuthRepository implements IAuthRepository {

    private model: typeof User;

    constructor() {
        this.model = User;
    }

    async findByEmail(email: string): Promise<any> {
        return await User.findOne({ email }).exec();
    }

    async create(name: string, email: string, password: string): Promise<any> {
        return this.model.create({ name, email, password });
    }
}
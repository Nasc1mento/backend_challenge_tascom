import { UserDTO } from "../dto/user/user.dto";
import { ApiError } from "../errors/api.error";
import { HttpStatusCode } from "../errors/error";
import { AuthRepository } from "../repositories/auth/auth.repository";
import { generateToken } from "../utils/jwt.util";
import { compare, hash } from "../utils/hash.util";


export class AuthService {
    
    private repository: AuthRepository;

    public constructor() {
        this.repository = new AuthRepository();
    }

    async register(name: string, email: string, password: string) {
        const hashedPassword = await hash(password);
        return await this.repository.create(name, email, hashedPassword);
    }

    async login(email: string, password: string) {
        const user: UserDTO = await this.repository.findByEmail(email);

        if (!user) {
            throw new ApiError (
                "User not found", 
                HttpStatusCode.NOT_FOUND, 
                `Email ${email} not found in the database`
            );
        }

        const isPasswordValid = await compare(password, user.password);
        
        if (!isPasswordValid) {
            throw new ApiError(
                "Invalid password", 
                HttpStatusCode.UNAUTHORIZED, 
                "The password is invalid"
            );
        }

        return generateToken({user});
    }
}
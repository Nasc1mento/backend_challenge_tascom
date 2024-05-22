import { Request, Response } from "express";

import { UserDTO } from "../dto/user/user.dto";
import { LoginDTO, loginDTOSchema } from "../dto/user/user.login.dto";
import { RegisterDTO, registerDTOSchema } from "../dto/user/user.register.dto";
import { AuthService } from "../services/auth.service";
import { apiErrorHandler } from "../utils/api.error.handler";
import { HttpStatusCode } from "../errors/error";


export class AuthController {

    private service: AuthService;

    constructor() {
        this.service = new AuthService();
    }

    async register (req: Request, res: Response): Response<UserDTO> {
        try {
            const {name, email, password}: RegisterDTO = registerDTOSchema.parse(req.body);
            const user: UserDTO = await this.service.register(name, email, password);
            return res.status(HttpStatusCode.CREATED).json(user);
        } catch (error: any) {
            apiErrorHandler(error, req, res);
        }
    }


    async login (req: Request, res: Response) {
        try {
            const {email, password}: LoginDTO = loginDTOSchema.parse(req.body);
            const token = await this.service.login(email, password);
            return res.status(HttpStatusCode.OK).json({token});
        } catch(error: any) {
            apiErrorHandler(error, req, res);
        }
    }
}
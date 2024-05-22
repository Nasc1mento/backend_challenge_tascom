import jwt from "jsonwebtoken";
import { env } from "../env";


export const generateToken = (payload: any): string => {
    return jwt.sign(payload, env.APP_JWT_SECRET, {
        expiresIn: env.APP_JWT_EXPIRES_IN,
    });
};
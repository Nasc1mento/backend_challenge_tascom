import { Request, Response, Next } from  "express";
import jwt from "jsonwebtoken"
import { env } from "../env";
import { HttpStatusCode } from "../errors/error";
import { ApiError } from "../errors/api.error";

export const verifyToken = (req: Request, res: Response, next: Next) => {

    const token = req.headers.authorization
    && req.headers.authorization.split(" ")[0] 
    === "Bearer"
    ? req.headers.authorization.split(" ")[1]
    : (req.body.token 
    || req.query.token 
    || req.headers["x-access-token"]);


    if (!token) {
       throw new ApiError("Access Denied", HttpStatusCode.UNAUTHORIZED, "Token is required");
    }


    try {
        const decoded = jwt.verify(token, env.APP_JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        throw new ApiError("Access Denied", HttpStatusCode.UNAUTHORIZED, error.message);
    }
}
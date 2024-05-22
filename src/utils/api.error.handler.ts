import {Request, Response} from "express";
import { MongooseError } from "mongoose";
import {ZodError} from "zod";
import { BaseError, HttpStatusCode } from "../errors/error";

export const apiErrorHandler = (error: any, req: Request, res: Response) => {

    if (error instanceof ZodError) {
        return res.status(HttpStatusCode.BAD_REQUEST).json({message: error.errors});
    }

    if (error instanceof MongooseError) {
        return res.status(HttpStatusCode.BAD_REQUEST).json({
            name: error.name,
            message: error.message, 
        });
    }


   if (error instanceof BaseError) {
        return res.status(error.httpCode).json({
            name: error.name,
            message: error.message,
        });
   }

    return res.status(HttpStatusCode.INTERNAL_SERVER).json({message: error.message});
}


import {Request, Response} from "express";
import { MongooseError } from "mongoose";
import {ZodError} from "zod";

export const apiErrorHandler = (error: any, req: Request, res: Response, message: string) => {
    if (error instanceof ZodError) {
        return res.status(400).json({message: error.errors});
    }

    if (error instanceof MongooseError) {
        return res.status(400).json({
            name: error.name,
            message: error.message, 
        });
    }

    if (message == "Not Found") {
        return res.status(404).json({Message: message});
    }

    return res.status(500).json({message: error.message});
}


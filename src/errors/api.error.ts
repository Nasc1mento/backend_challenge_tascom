import { BaseError, HttpStatusCode } from "./error";

export class ApiError extends BaseError {
    constructor (name: string, httpCode: HttpStatusCode, description: string) {
        super(name, httpCode, description);
    }
}
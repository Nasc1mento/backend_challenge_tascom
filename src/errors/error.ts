export enum HttpStatusCode {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
    INTERNAL_SERVER = 500,
}

export class BaseError extends Error {
    public readonly name: string;
    public readonly httpCode: number;

    constructor (name: string, httpCode: HttpStatusCode, description: string) {
        super(description);
        Object.setPrototypeOf(this, new.target.prototype);

        this.name = name;
        this.httpCode = httpCode;

        Error.captureStackTrace(this);
    }
}
export class HttpException extends Error {
    readonly status: number;
    readonly message: string;
    constructor(message: string, status = 500) {
        super(message);
        this.name = this.constructor.name;
        this.message = message;
        this.status = status;
        Error.captureStackTrace(this, this.constructor);
    }
}

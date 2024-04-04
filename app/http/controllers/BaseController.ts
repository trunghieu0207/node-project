// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import express, { NextFunction } from 'express';

interface ExpressResponse extends express.Response {
    flash: (name: string, value: string) => void;
}
export class BaseController {
    protected request: express.Request;
    protected response: express.Response;
    protected next: NextFunction;

    constructor(
        request: express.Request,
        response: express.Response,
        next: NextFunction
    ) {
        this.request = request;
        this.response = response;
        this.next = next;
    }
}

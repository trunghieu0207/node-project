import express, { NextFunction } from 'express';

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

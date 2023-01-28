import express, { NextFunction } from 'express';

export class IndexController {
    private request: express.Request;
    private response: express.Response;
    private next: NextFunction;

    constructor(
        request: express.Request,
        response: express.Response,
        next: NextFunction
    ) {
        this.request = request;
        this.response = response;
        this.next = next;
    }

    public render() {
        this.response.render('pages/index');
    }
}

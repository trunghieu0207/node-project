import express, { NextFunction } from 'express';
import { getAllSubject } from '@services/index';

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

    public async render(): Promise<void> {
        const subjects = await getAllSubject();
        this.response.render('pages/index', { subjects });
    }
}

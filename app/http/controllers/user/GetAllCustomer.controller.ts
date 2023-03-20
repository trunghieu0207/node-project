import express, { NextFunction } from 'express';
import { getCustomer } from '@services/user';

export class GetCustomerController {
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

    public async getUser() {
        const id = this.request.params.id;
        try {
            const result = await getCustomer(id as unknown as number);
            if (result.length === 0) {
                this.response.status(404);
                this.response.json({
                    message: 'Cannot find the customer',
                    cause: 'The customer with id not found'
                });
                this.response.end();
                return;
            }
            this.response.status(200);
            this.response.json(result[0]);
            this.response.end();
            this.response.end();
        } catch (e) {
            this.response.json(e);
            this.response.end();
        }
    }
}

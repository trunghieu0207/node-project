import express, { NextFunction } from 'express';
import { deleteCustomer } from '@services/user';
import { CannotFindCustomer } from '@errors/customer';

export class DeleteCustomerController {
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
    public async deleteCustomer() {
        const id = this.request.params.id;
        try {
            const result = await deleteCustomer(id as unknown as number);
            this.response.status(200);
            this.response.json(result);
            this.response.end();
        } catch (error) {
            if (error instanceof CannotFindCustomer) {
                this.response.status(404);
                this.response.json(error.getErrorMessageObject());
                this.response.end();
                return;
            }
            this.response.status(500);
            this.response.json(error);
            this.response.end();
        }
    }
}

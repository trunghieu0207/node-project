import express, { NextFunction } from 'express';
import { CustomerModel } from '../../../models/Customer.Model';

export class GetAllCustomerController {
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
        try {
            const result = await CustomerModel.findAll({
                attributes: [
                    'customerID',
                    'customerName',
                    'sex',
                    'email',
                    'departmentID'
                ]
            });
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
            this.response.json(result);
            this.response.end();
            this.response.end();
        } catch (e) {
            this.response.json(e);
            this.response.end();
        }
    }
}

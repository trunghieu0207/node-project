import express, { NextFunction } from 'express';
import { addCustomer, getCustomer } from '@services/user';

export class AddCustomerController {
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

    public async addCustomer() {
        const body = this.request.body;
        const data = {
            customerName: body.name ?? '',
            sex: body.sex ?? '',
            email: body.email ?? '',
            departmentID: body.departmentID ?? ''
        };

        try {
            const result = await addCustomer(data);
            const id = (result[0] as any).insertId;
            const [customer] = await getCustomer(id);
            this.response.status(201);
            this.response.json(customer);
            this.response.end();
        } catch (e) {
            this.response.status(500);
            this.response.json(e);
            this.response.end();
        }
    }
}

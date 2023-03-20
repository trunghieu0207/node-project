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
        // const body = this.request.body;
        // const data = {
        //     customerName: body.name ?? '',
        //     sex: body.sex ?? '',
        //     email: body.email ?? '',
        //     departmentID: body.departmentID ?? ''
        // };

        try {
            let result: any;
            for (let count = 925; count <= 1000; count++) {
                const data2 = {
                    customerName: `Dang Trung Hieu ${count}`,
                    sex: 'Male',
                    email: `dangtrunghieu0207-${count}@gmail.com`,
                    departmentID: 1
                };
                result = await addCustomer(data2);
            }
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

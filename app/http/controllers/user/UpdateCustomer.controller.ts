import express, { NextFunction } from 'express';
import { updateCustomer } from '@services/user';
import { SqlQueryInvalid } from '@errors/sql';
import { CannotFindCustomer } from '@errors/customer';
import { CustomError } from '../../../errors/base/CustomError';

export class UpdateCustomerController {
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

    public async updateCustomer() {
        const input = this.getInput();
        if (!this.validateInput(input, ['id', 'customerName'])) {
            return;
        }

        try {
            const result = await updateCustomer(input);
            this.response.json(result);
            this.response.status(200);
            this.response.end();
        } catch (error: any) {
            if (error instanceof CannotFindCustomer) {
                this.response.status(404);
                this.response.json(error.getErrorMessageObject());
                this.response.end();
                return;
            }

            this.response.status(500);
            this.response.json(error.getErrorMessageObject());
            this.response.end();
        }
    }

    private getInput() {
        const body = this.request.body;
        return {
            id: body.id ?? null,
            customerName: body.name ?? null,
            sex: body.sex ?? null,
            email: body.email ?? null,
            departmentID: body.departmentID ?? null
        };
    }

    private validateInput(input: any, keys: any) {
        for (const item in input) {
            if (keys.includes(item) && input[item] === null) {
                this.response.status(500);
                this.response.json(this.buildError(item));
                this.response.end();
                return false;
            }
        }
        return true;
    }

    private buildError(key: any) {
        return {
            message: 'Cannot update customer',
            cause: `The param ${key} not specified`
        };
    }
}

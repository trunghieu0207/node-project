import { CustomError } from '../base/CustomError';

export class CannotFindCustomer extends CustomError {
    constructor() {
        super({
            name: 'Cannot find the customer with id',
            code: 'ERR_CUSTOMER_0001'
        });
    }
}

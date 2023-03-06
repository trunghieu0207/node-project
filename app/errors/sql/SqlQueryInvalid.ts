import { CustomError, CustomErrorParams } from '../base/CustomError';

export class SqlQueryInvalid extends CustomError {
    constructor(error: CustomErrorParams) {
        super(error);
    }
}

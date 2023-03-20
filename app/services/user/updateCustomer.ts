import { DatabaseConnection } from '@config/database';
import { getCustomer, UserResponse } from './getCustomer';
import { SqlQueryInvalid } from '@errors/sql';
import { CannotFindCustomer } from '@errors/customer';
interface UpdateCustomerParams {
    [key: string]: string | number;
    id: number;
    customerName: string;
    sex: string;
    email: string;
    departmentID: string;
}

export interface ErrorResponse {
    message: string;
    cause: string | null;
}

export const updateCustomer = async (
    input: UpdateCustomerParams
): Promise<UserResponse[] | []> => {
    try {
        const databaseConnection = new DatabaseConnection();
        const connection = await databaseConnection.getConnection();
        const [customer] = await getCustomer(input.id);
        if (customer === undefined) {
            throw new CannotFindCustomer();
        }
        const data = mergeData(input, customer);
        const query =
            'UPDATE `CustomerT` SET customerName = ?, sex = ?, email = ?, departmentID = ? WHERE customerID = ?';
        await connection.execute(query, [
            data.customerName,
            data.sex,
            data.email,
            data.departmentID,
            data.id
        ]);
        return await getCustomer(data.id);
    } catch (error: any) {
        throw new SqlQueryInvalid({ name: error.message, code: error.code });
    }
};

const mergeData = (
    input: UpdateCustomerParams,
    customer: UserResponse
): UpdateCustomerParams => {
    for (const item in input) {
        if (input[item] === null) {
            delete input[item];
        }
    }

    return { ...customer, ...input };
};

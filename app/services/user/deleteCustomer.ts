import { getCustomer } from './getCustomer';
import { DatabaseConnection } from '@config/database';
import { CannotFindCustomer } from '@errors/customer';
import { SqlQueryInvalid } from '@errors/sql';

export const deleteCustomer = async (id: number) => {
    const databaseConnection = new DatabaseConnection();
    const connection = await databaseConnection.getConnection();
    const [customer] = await getCustomer(id);
    try {
        if (customer === undefined) {
            throw new CannotFindCustomer();
        }
        const query = 'DELETE FROM `CustomerTB` WHERE customerID = ?';
        connection.execute(query, [id]);
        return { message: 'Delete success', cause: null };
    } catch (error: any) {
        throw new SqlQueryInvalid({ name: error.message, code: error.code });
    }
};

import { DatabaseConnection } from '@config/database';

export interface UserResponse {
    id: number;
    customerName: string;
    sex: string;
    email: string;
    departmentID: number;
}

export const getCustomer = async (id: number): Promise<UserResponse[]> => {
    const databaseConnection = new DatabaseConnection();
    const connection = await databaseConnection.getConnection();

    if (id === null) {
        const [rows] = await connection.execute('SELECT * FROM CustomerTB');
        return rows as UserResponse[];
    }

    const [rows] = await connection.execute(
        'SELECT * FROM CustomerTB WHERE customerID = ?',
        [id]
    );

    return rows as UserResponse[];
};

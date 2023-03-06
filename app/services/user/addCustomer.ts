import { DatabaseConnection } from '@config/database';

interface CustomerParams {
    customerName: string;
    sex: string;
    email: string;
    departmentID: number;
}

export const addCustomer = async ({
    customerName,
    sex,
    email,
    departmentID
}: CustomerParams) => {
    const databaseConnection = new DatabaseConnection();
    const connection = await databaseConnection.getConnection();
    return connection.execute(
        'INSERT INTO `CustomerTB`(`customerName`, `sex`, `email`, `departmentID`) VALUES (?, ?, ?, ?)',
        [customerName, sex, email, departmentID]
    );
};

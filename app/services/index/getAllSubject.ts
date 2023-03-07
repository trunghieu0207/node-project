import { DatabaseConnection } from '@config/database';

interface SubjectResponse {
    name: string;
    id: number;
}

export const getAllSubject = async (): Promise<SubjectResponse[]> => {
    const databaseConnection = new DatabaseConnection();
    const connection = await databaseConnection.getConnection();

    const [rows] = await connection.execute('SELECT * FROM tb_subjects');
    await databaseConnection.closeConnection();
    return rows as SubjectResponse[];
};

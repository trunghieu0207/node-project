import { DatabaseConnection } from '@config/database';

export const getUser = async () => {
    const connection = await new DatabaseConnection().getConnection();
    const [rows] = await connection.execute('SELECT * FROM `tb_test`');
    console.log(rows);
};

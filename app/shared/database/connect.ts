import mysql from 'mysql2/promise';

export const connection = async () => {
    const pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'Abc@1234',
        database: 'final_project'
    });
    return await pool.getConnection();
};

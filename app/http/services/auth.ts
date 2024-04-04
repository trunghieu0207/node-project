import { connection } from '@shared/database';
import { RowDataPacket } from 'mysql2';

export const auth = async (username: string, password: string) => {
    const connect = await connection();

    try {
        const sql =
            'SELECT username, password, u.id FROM tb_users AS u INNER JOIN tb_user_profiles AS up ON u.id = up.user_id WHERE username=? LIMIT 0,1';
        const [result] = await connect.execute(sql, [username]);
        if (!result) {
            return false;
        }

        return (result as RowDataPacket[])[0];
    } catch (e) {
        return false;
    }
};

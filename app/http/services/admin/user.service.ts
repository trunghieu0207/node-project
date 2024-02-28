import { User } from '@app/entity';
import { connection } from '@shared/database';

export const createUser = async (user: User) => {
    const connect = await connection();

    try {
        await connect.beginTransaction();
        const sql =
            'INSERT INTO `tb_users`(`username`, `password`, `role`) VALUES (?, ?, ?)';
        const values = [user.username, user.password, user.role];

        const [result] = await connect.execute(sql, values);
        await connect.commit();
        connect.release();
        console.log(result);
        return result;
    } catch (e) {
        console.log(e);
        await connect.rollback();
        connect.release();
        return false;
    }
};

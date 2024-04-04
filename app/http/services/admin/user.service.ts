import { User, UserProfileEntity } from '@app/entity';
import { connection } from '@shared/database';
import { USER_PROFILE_TABLE, USER_TABLE } from '@shared/constants';
import { RowDataPacket } from 'mysql2/index';

export const createUser = async ({
    userEntity,
    userProfileEntity
}: {
    userEntity: User;
    userProfileEntity: UserProfileEntity;
}) => {
    const connect = await connection();

    try {
        await connect.beginTransaction();
        const sql = `INSERT INTO ${USER_TABLE} (username, password, role) VALUES (?, ?, ?)`;
        const values = [
            userEntity.username,
            userEntity.password,
            userEntity.role
        ];

        const [result] = await connect.execute(sql, values);

        if ('insertId' in result) {
            userProfileEntity.userId = result.insertId;
            const insertStatus = await createUserProfile(
                userProfileEntity,
                connect
            );
            await connect.commit();
            connect.release();

            return insertStatus;
        }

        await connect.rollback();
        connect.release();

        return false;
    } catch (e) {
        await connect.rollback();
        connect.release();

        return false;
    }
};

export const createUserProfile = async (
    userProfile: UserProfileEntity,
    connect: any
) => {
    try {
        const sql = `INSERT INTO ${USER_PROFILE_TABLE} (firstname, lastname, phone, email, gender, user_id) VALUES (?, ?, ?, ?, ?, ?)`;
        const values = [
            userProfile.firstName,
            userProfile.lastName,
            userProfile.phone,
            userProfile.email,
            userProfile.gender,
            userProfile.userId
        ];

        const [result] = await connect.execute(sql, values);

        return result;
    } catch (e) {
        return false;
    }
};

export const fetchAllUser = async () => {
    const connect = await connection();

    try {
        const sql =
            'SELECT u.id, u.created_at, up.firstname, up.lastname, up.email FROM tb_users AS u INNER JOIN tb_user_profiles AS up ON u.id = up.user_id';
        const [result] = await connect.execute(sql);
        return result;
    } catch (e) {
        return false;
    }
};

export const getUserById = async (id: number) => {
    const connect = await connection();

    try {
        const sql =
            'SELECT u.id, u.username, up.email, up.firstname, up.lastname, up.phone, up.address FROM tb_users AS u INNER JOIN tb_user_profiles AS up ON u.id = up.user_id WHERE u.id = ? LIMIT 0,1';
        const [result] = await connect.execute(sql, [id]);
        if (!result) {
            return false;
        }

        return (result as RowDataPacket[])[0];
    } catch (e) {
        return false;
    }
};

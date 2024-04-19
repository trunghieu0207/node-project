import { FormEntity } from '@app/entity';
import { FORM_TABLE } from '@shared/constants';
import { connection } from '@shared/database';
import { RowDataPacket } from 'mysql2/index';

export const createForm = async (form: FormEntity) => {
    const connect = await connection();
    try {
        await connect.beginTransaction();
        const sql = `INSERT INTO ${FORM_TABLE} (title, content, user_id) VALUES (?, ?, ?)`;
        const values = [form.title, form.content, 58];
        const [result] = await connect.execute(sql, values);
        await connect.commit();
        connect.release();
    } catch (e) {
        console.log(e);
        console.log(111);
    }
};

export const fetchAllForm = async () => {
    const connect = await connection();
    try {
        await connect.beginTransaction();
        const sql = `SELECT * FROM ${FORM_TABLE}`;
        const [result] = await connect.execute(sql);

        connect.release();
        return result;
    } catch (e) {
        return [];
    }
};

export const getFormById = async (id: string) => {
    const connect = await connection();
    try {
        await connect.beginTransaction();
        const sql = `SELECT * FROM ${FORM_TABLE} WHERE id=${id}`;
        const [result] = await connect.execute(sql);
        connect.release();
        if (!result) {
            return false;
        }

        return (result as RowDataPacket[])[0];
    } catch (e) {
        return [];
    }
};

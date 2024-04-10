import { FormEntity } from '@app/entity';
import { FORM_TABLE } from '@shared/constants';
import { connection } from '@shared/database';

export const createForm = async (form: FormEntity) => {
    const connect = await connection();
    try {
        await connect.beginTransaction();
        const sql = `INSERT INTO ${FORM_TABLE} (content, user_id) VALUES (?, ?)`;
        const values = [form.content, 1];
        const [result] = await connect.execute(sql, values);
    } catch (e) {
        console.log(111);
    }
};

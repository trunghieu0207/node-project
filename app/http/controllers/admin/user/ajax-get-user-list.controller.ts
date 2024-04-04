import { BaseController } from '../../BaseController';
import { fetchAllUser } from '@http/services';
import { DateTime } from 'luxon';

export class AjaxGetUserListController extends BaseController {
    public async fetch() {
        const users = await fetchAllUser();
        const response = this.covertResponse(users);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return this.response.json(response);
    }

    private covertResponse(users: any) {
        const data = users.map((user: any) => {
            const date = DateTime.fromISO(user.created_at.toISOString());
            return {
                id: user.id,
                full_name: user.lastname + ' ' + user.firstname,
                email: user.email,
                start_date: date.setLocale('vi').toLocaleString(),
                status: 1,
                role: this.convertRole(user.role)
            };
        });
        return {
            data: data
        };
    }

    private convertRole(role: any) {
        if (role === 1) {
            return 'Quản trị';
        }

        if (role === 2) {
            return 'Doanh nghiệp';
        }

        return 'Người dùng';
    }
}

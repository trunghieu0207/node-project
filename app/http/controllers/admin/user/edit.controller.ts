import { BaseController } from '../../BaseController';
import { getUserById } from '@http/services';

export class EditController extends BaseController {
    public async render() {
        const userId = this.request.params.userId;
        const user = await getUserById(parseInt(userId));

        return this.response.render('pages/admin/user/edit', {
            user: this.convertToResponse(user)
        });
    }

    public convertToResponse(user: any) {
        return {
            username: user.username,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            phone: user.phone,
            address: user.address
        };
    }
}

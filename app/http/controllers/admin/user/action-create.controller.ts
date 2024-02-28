import { BaseController } from '../../BaseController';
import { User } from '@app/entity';
import { adminCreateUser } from '@http/services';

export class ActionCreateController extends BaseController {
    public async store() {
        const body = this.request.body;
        const username = body.username;
        const password = body.password;
        const role = 1;
        const userEntity = new User(username, password, role);

        try {
            await adminCreateUser(userEntity);
            this.response.flash('success', 'this is info flash message');
            return this.response.redirect('/admin/user/test');
        } catch (e) {
            this.response.flash('success', 'this is info flash message');
            return this.response.redirect('/admin/user/test');
        }
    }
}

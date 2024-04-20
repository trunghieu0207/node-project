import { BaseController } from '../BaseController';
import { auth } from '@http/services';
import * as bcrypt from 'bcrypt';

export class LoginController extends BaseController {
    public render() {
        this.response.render('pages/login');
    }

    public async auth() {
        const body = this.request.body;
        const user = await auth(body.username);
        if (!user) {
            return this.response.redirect('/login');
        }
        const isMatch = await bcrypt.compare(body.password, user.password);
        if (!isMatch) {
            return this.response.redirect('/login');
        }

        (this.request.session as any).user = user;

        return this.response.redirect('/form-list');
    }
}

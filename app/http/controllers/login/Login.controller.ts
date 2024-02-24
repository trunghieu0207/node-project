import { BaseController } from '../BaseController';

export class LoginController extends BaseController {
    public render() {
        this.response.render('pages/login');
    }
}

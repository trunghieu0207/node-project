import { BaseController } from '../../BaseController';

export class TestController extends BaseController {
    public render() {
        return this.response.render('pages/admin/user/test');
    }
}

import { BaseController } from '../../BaseController';

export class DetailController extends BaseController {
    public render() {
        return this.response.render('pages/admin/user/detail');
    }
}

import { BaseController } from '../../BaseController';

export class ListController extends BaseController {
    public render() {
        return this.response.render('pages/admin/user/list');
    }
}

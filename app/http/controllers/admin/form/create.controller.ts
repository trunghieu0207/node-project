import { BaseController } from '../../BaseController';

export class CreateController extends BaseController {
    public render() {
        return this.response.render('pages/admin/form/create');
    }
}

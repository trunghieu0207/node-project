import { BaseController } from '../BaseController';

export class FormListController extends BaseController {
    public render() {
        return this.response.render('pages/user/form-list');
    }
}

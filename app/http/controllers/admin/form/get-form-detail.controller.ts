import { BaseController } from '../../BaseController';
import { getFormById } from '@http/services';

export class GetFormDetailController extends BaseController {
    public async render() {
        const formId = this.request.params.formId;

        try {
            const form = await getFormById(formId);
            return this.response.render('pages/admin/form/detail', {
                data: form
            });
        } catch (e) {
            console.log(e);
        }
    }
}

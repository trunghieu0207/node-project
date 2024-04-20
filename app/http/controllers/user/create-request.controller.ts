import { BaseController } from '../BaseController';
import { getFormById } from '@http/services';

export class CreateRequestController extends BaseController {
    public async render() {
        const formId = this.request.params.formId;

        try {
            const form = await getFormById(formId);
            return this.response.render('pages/user/create-request', {
                data: form
            });
        } catch (e) {
            console.log(e);
        }
    }
}

import { BaseController } from '../../BaseController';
import { FormEntity } from '@app/entity';
import { createForm } from '@http/services';

export class ActionSaveController extends BaseController {
    public async store() {
        const body = this.request.body;
        const data = body.data;
        const title = body.title;
        const form = new FormEntity(1, title, data, 57);
        try {
            await createForm(form);
            this.response.redirect('/admin/form/list');
        } catch (e) {
            this.response.redirect('/admin/form/list');
        }
    }
}

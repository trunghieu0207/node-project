import { BaseController } from '../../BaseController';
import { fetchAllForm } from '@http/services';

export class AjaxGetAllFormController extends BaseController {
    public async fetch() {
        const forms = await fetchAllForm();
        return this.response.json(this.convertToResponse(forms));
    }

    private convertToResponse(forms: any) {
        const data = forms.map((form: any) => {
            return {
                id: form.id,
                title: form.title
            };
        });
        return {
            data: data
        };
    }
}

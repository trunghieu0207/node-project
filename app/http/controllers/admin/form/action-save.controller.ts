import { BaseController } from '../../BaseController';

export class ActionSaveController extends BaseController {
    public store() {
        const body = this.request.body;
        const data = body.data;
    }
}

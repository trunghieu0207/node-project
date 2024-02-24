import { BaseController } from '../BaseController';

export class IndexController extends BaseController {
    public render() {
        this.response.render('pages/index');
    }
}

export { IndexController } from './index/Index.controller';
export { LoginController } from './login/Login.controller';
export { CreateController as AdminCreateUserController } from './admin/user/create.controller';
export { DetailController as AdminDetailUserController } from './admin/user/detail.controller';
export { ActionCreateController as AdminActionCreateUserController } from './admin/user/action-create.controller';
export { ListController as AdminListUserController } from './admin/user/list.controller';
export { AjaxGetUserListController as AdminAjaxGetUserListController } from './admin/user/ajax-get-user-list.controller';
export { EditController as AdminEditUserController } from './admin/user/edit.controller';
export { TestController } from './admin/user/test.controller';

// Form

export { CreateController as AdminCreateFormController } from './admin/form/create.controller';
export { ActionSaveController as AdminActionCreateFormController } from './admin/form/action-save.controller';
export { ListController as AdminListFormController } from './admin/form/list.controller';
export { AjaxGetAllFormController as AdminAjaxFetchAllFormController } from './admin/form/ajax-get-all-form.controller';
export { GetFormDetailController as AdminDetailFormController } from './admin/form/get-form-detail.controller';

// user
export { FormListController as UserFormListController } from './user/form-list.controller';
export { CreateRequestController as UserCreateRequestController } from './user/create-request.controller';

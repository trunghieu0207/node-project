// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import express, { NextFunction } from 'express';
import {
    AdminActionCreateUserController,
    AdminAjaxGetUserListController,
    AdminCreateFormController,
    AdminCreateUserController,
    AdminDetailUserController,
    AdminEditUserController,
    AdminListUserController,
    TestController
} from '@http/controllers';
import { isUserLogin } from '@http/middlewares/';

export const Admin = express.Router();

Admin.get(
    '/user/create',
    isUserLogin,
    (req: express.Request, res: express.Response, next: NextFunction) => {
        new AdminCreateUserController(req, res, next).render();
    }
);

Admin.get(
    '/user/detail/:userId',
    isUserLogin,
    async (req: express.Request, res: express.Response, next: NextFunction) => {
        await new AdminDetailUserController(req, res, next).render();
    }
);

Admin.get(
    '/user/list',
    isUserLogin,
    (req: express.Request, res: express.Response, next: NextFunction) => {
        new AdminListUserController(req, res, next).render();
    }
);

Admin.get(
    '/ajax/fetch-all-user',
    isUserLogin,
    async (req: express.Request, res: express.Response, next: NextFunction) => {
        await new AdminAjaxGetUserListController(req, res, next).fetch();
    }
);

Admin.get(
    '/user/edit/:userId',
    isUserLogin,
    (req: express.Request, res: express.Response, next: NextFunction) => {
        new AdminEditUserController(req, res, next).render();
    }
);

Admin.post(
    '/user/action-create',
    isUserLogin,
    async (req: express.Request, res: express.Response, next: NextFunction) => {
        await new AdminActionCreateUserController(req, res, next).store();
    }
);

Admin.get(
    '/user/test',
    isUserLogin,
    async (req: express.Request, res: express.Response, next: NextFunction) => {
        await new TestController(req, res, next).render();
    }
);

Admin.get(
    '/form/create',
    isUserLogin,
    (req: express.Request, res: express.Response, next: NextFunction) => {
        new AdminCreateFormController(req, res, next).render();
    }
);

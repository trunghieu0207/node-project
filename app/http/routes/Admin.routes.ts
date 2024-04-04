// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import express, { NextFunction } from 'express';
import {
    AdminActionCreateUserController,
    AdminAjaxGetUserListController,
    AdminCreateUserController,
    AdminDetailUserController,
    AdminListUserController,
    TestController
} from '@http/controllers';
import { isUserLogin } from '@http/middlewares/';

export const Admin = express.Router();

Admin.get(
    '/user/create',
    (req: express.Request, res: express.Response, next: NextFunction) => {
        new AdminCreateUserController(req, res, next).render();
    }
);

Admin.get(
    '/user/detail',
    (req: express.Request, res: express.Response, next: NextFunction) => {
        new AdminDetailUserController(req, res, next).render();
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
    async (req: express.Request, res: express.Response, next: NextFunction) => {
        await new AdminAjaxGetUserListController(req, res, next).fetch();
    }
);

Admin.post(
    '/user/action-create',
    async (req: express.Request, res: express.Response, next: NextFunction) => {
        await new AdminActionCreateUserController(req, res, next).store();
    }
);

Admin.get(
    '/user/test',
    async (req: express.Request, res: express.Response, next: NextFunction) => {
        await new TestController(req, res, next).render();
    }
);

import express, { NextFunction } from 'express';
import {
    AdminActionCreateUserController,
    AdminCreateUserController,
    AdminDetailUserController,
    TestController
} from '@http/controllers';

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

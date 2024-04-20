import express, { NextFunction } from 'express';
import {
    LoginController,
    UserCreateRequestController,
    UserFormListController
} from '@http/controllers';
import { isUserLogin } from '@http/middlewares/';

export const Index = express.Router();

Index.get(
    '/',
    (req: express.Request, res: express.Response, next: NextFunction) => {
        new LoginController(req, res, next).render();
    }
);

Index.get(
    '/login',
    (req: express.Request, res: express.Response, next: NextFunction) => {
        new LoginController(req, res, next).render();
    }
);

Index.post(
    '/action-login',
    async (req: express.Request, res: express.Response, next: NextFunction) => {
        await new LoginController(req, res, next).auth();
    }
);

Index.get(
    '/form-list',
    isUserLogin,
    (req: express.Request, res: express.Response, next: NextFunction) => {
        new UserFormListController(req, res, next).render();
    }
);

Index.get(
    '/create-request/:formId',
    isUserLogin,
    async (req: express.Request, res: express.Response, next: NextFunction) => {
        await new UserCreateRequestController(req, res, next).render();
    }
);

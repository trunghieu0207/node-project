import express, { NextFunction } from 'express';
import { LoginController } from '@http/controllers';
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

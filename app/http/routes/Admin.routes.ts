import express, { NextFunction } from 'express';
import {
    AdminCreateUserController,
    AdminDetailUserController
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

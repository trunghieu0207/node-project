import express, { NextFunction } from 'express';
import { AdminCreateUserController } from '@http/controllers';

export const Admin = express.Router();

Admin.get(
    '/user/create',
    (req: express.Request, res: express.Response, next: NextFunction) => {
        new AdminCreateUserController(req, res, next).render();
    }
);

import express, { NextFunction } from 'express';
import { IndexController } from '@http/controllers';

export const Index = express.Router();

Index.get(
    '/',
    async (req: express.Request, res: express.Response, next: NextFunction) => {
        await new IndexController(req, res, next).render();
    }
);

import express, {NextFunction} from "express";
import {IndexController} from '@http/controllers'
import {isUserLogin} from '@http/middlewares/';

export const Index = express.Router();

Index.get('/', (req: express.Request, res: express.Response, next: NextFunction) => {
    (new IndexController(req, res, next).render())
})

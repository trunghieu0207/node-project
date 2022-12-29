import express from "express";
import {IndexController} from '@controllers/index';

export const Index = express.Router();

Index.get('/', (req: express.Request, res: express.Response) => {
    (new IndexController(req, res).render())
})

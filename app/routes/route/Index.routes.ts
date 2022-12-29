import express from "express";
import {IndexController} from '@controllers/index';

export const Index = express.Router();

Index.get('/hello', (req: express.Request, res: express.Response) => {
    (new IndexController(req, res).render())
})

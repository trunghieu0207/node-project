import {Request, Response, NextFunction} from "express";

export const isUserLogin = (req: Request, res: Response, next: NextFunction) => {
    const abc = 2;
    // @ts-ignore
    if (abc === 1) {
        next()
    } else {
        res.send(401);
    }
}
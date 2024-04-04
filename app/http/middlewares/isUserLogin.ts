import { Request, Response, NextFunction } from 'express';

export const isUserLogin = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (req.session.user) {
        next();
    } else {
        return res.redirect('/login');
    }
};

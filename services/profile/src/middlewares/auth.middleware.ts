import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const authenticate = (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    console.log(req.headers['authorization']);

    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        res.status(403).json({
            msg: "Token hasn't been found"
        });

        return;
    }

    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
        if (err)
            return res.json({
                msg: 'There is an error with verification.'
            });

        next();
    });
};

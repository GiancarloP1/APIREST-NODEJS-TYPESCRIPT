import { NextFunction, Request, Response } from "express";


const LogMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log("Hola soy el LOG");
    next();
}

export {LogMiddleware};
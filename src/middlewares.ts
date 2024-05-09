import { NextFunction, Request, Response } from 'express';
import ErrorReponse from './interfaces/ErrorResponse';

function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404);
  const error = new Error(`Not found - ${req.originalUrl}`);
  next(error);
}

function errorHandler(
  err: Error,
  req: Request,
  res: Response<ErrorReponse>,
  next: NextFunction,
) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? 'Oops' : err.stack,
  });
}

export {
    notFound,
    errorHandler
}

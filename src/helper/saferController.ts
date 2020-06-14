import { Request, Response, NextFunction } from "express";

export function safeController(fn: Function) {
  return function (req: Request, res: Response, next: NextFunction) {
    fn(req, res).catch(next);
  };
}

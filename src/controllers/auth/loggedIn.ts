import { Request, Response } from "express";

export async function unSafeLoggedIn(req: Request, res: Response) {
  console.log("req:", req.hostname);
  res.json(req.user);
}

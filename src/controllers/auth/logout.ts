import { Request, Response } from "express";

export async function unSafeLogout(req: Request, res: Response) {
  console.log("req:", req.method);
  req.logout();
  res.json({ message: "Successful logout" });
}

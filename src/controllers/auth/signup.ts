import { Request, Response } from "express";
import * as bcrypt from "bcryptjs";
import * as passport from "passport";
import { User } from "../../models/User";

interface SignupReq extends Request {
  body: {
    username: string;
    password: string;
  };
}

export async function unSafeSignupController(req: SignupReq, res: Response) {
  const { username, password: toHash } = req.body;

  if (!username) {
    return res.status(400).json({ message: "Username can't be empty" });
  }

  if (toHash.length < 8) {
    return res.status(400).json({ message: "Password is too short" });
  }

  const found = await User.findOne({ username });
  if (found) {
    return res.status(400).json({ message: "Username is already taken" });
  }

  const salt = await bcrypt.genSalt();
  const password = await bcrypt.hash(toHash, salt);

  const newUser = await User.create({ username, password });

  req.login(newUser, (err) => {
    if (err) {
      return res.status(500).json({ message: "Error while logging in" });
    }
    res.json(newUser);
  });
}

import { Request, Response, NextFunction } from "express";
import * as bcrypt from "bcryptjs";
import { User } from "../../models/User";

interface SignupReq extends Request {
  body: {
    username: string;
    password: string;
  };
}

export async function unsafeLoginController(
  req: SignupReq,
  res: Response,
  next: NextFunction,
) {
  const { username, password } = req.body;
  console.log("password:", password);
  console.log("username:", username);

  const isUser = await User.findOne({ username });
  console.log("isUser:", isUser);
  if (!isUser) {
    return res.status(500).json({ message: "Invalid Credentials" });
  }

  const validPass = await bcrypt.compare(password, isUser.password!);
  console.log("validPass:", validPass);

  if (!validPass) {
    return res.status(500).json({ message: "Invalid Credentials" });
  }

  req.login(isUser, (err) => {
    if (err) {
      return res.status(500).json({ message: "Error while logging in" });
    }
    res.cookie("token", "tokenizeation", { httpOnly: true }).json(isUser);
  });
}

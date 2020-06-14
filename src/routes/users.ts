import { Router, Request } from "express";
import * as bcrypt from "bcryptjs";
import * as passport from "passport";
import { User } from "../models/User";
import {
  signupController,
  loginController,
  loggedInController,
  logoutController,
} from "../controllers/auth";

const userRoutes = Router();

userRoutes.post("/signup", signupController);
userRoutes.post("/login", loginController);
userRoutes.delete("/logout", logoutController);
userRoutes.get("/loggedin", loggedInController);

export { userRoutes };

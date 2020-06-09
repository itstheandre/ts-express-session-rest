import { use } from "passport";
import StrategyBasis from "passport-local";
import * as bcrypt from "bcryptjs";
import { User } from "../models/User";

const LocalStrategy = StrategyBasis.Strategy;

use(
  new LocalStrategy(async (username: string, password: string, cb) => {
    try {
      const foundUser = await User.findOne({ username });

      if (!foundUser) {
        return cb(null, false, { message: "Incorrect username" });
      }

      const match = await bcrypt.compare(password, foundUser.password!);
      if (!match) {
        return cb(null, false, { message: "Invalid credentials" });
      }
      cb(null, foundUser);
    } catch (error) {
      console.log("error:", error);
      cb(error);
    }
  }),
);

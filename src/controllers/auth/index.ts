import { unSafeSignupController } from "./signup";
import { safeController } from "../../helper/saferController";
import { unsafeLoginController } from "./login";
import { unSafeLogout } from "./logout";
import { unSafeLoggedIn } from "./loggedIn";

const signupController = safeController(unSafeSignupController);

const loginController = safeController(unsafeLoginController);
const logoutController = safeController(unSafeLogout);
const loggedInController = safeController(unSafeLoggedIn);

export {
  signupController,
  loginController,
  logoutController,
  loggedInController,
};

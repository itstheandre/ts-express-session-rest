import { serializeUser, deserializeUser } from "passport";
import { UserModel, User } from "../models/User";

serializeUser((loggedUser: UserModel, cb) => {
  cb(null, loggedUser._id);
});

deserializeUser((userIdFromSession, cb) => {
  User.findById(userIdFromSession)
    .then((userDocument) => {
      cb(null, userDocument);
    })
    .catch((err) => {
      cb(err);
    });
});

// passport.serializeUser((loggedInUser: UserModel, cb: Function) => {
//   cb(null, loggedInUser._id);
// });

// passport.deserializeUser((userIdFromSession: string, cb) => {
//   User.findById(userIdFromSession)
//     .then((userDocument) => {
//       cb(null, userDocument);
//     })
//     .catch((err) => {
//       cb(err);
//     });
// });

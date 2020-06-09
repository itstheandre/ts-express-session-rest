"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = require("passport");
var User_1 = require("../models/User");
passport_1.serializeUser(function (loggedUser, cb) {
    cb(null, loggedUser._id);
});
passport_1.deserializeUser(function (userIdFromSession, cb) {
    User_1.User.findById(userIdFromSession)
        .then(function (userDocument) {
        cb(null, userDocument);
    })
        .catch(function (err) {
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

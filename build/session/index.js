"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSession = void 0;
var passport_1 = require("passport");
var mongoose_1 = require("mongoose");
var express_session_1 = __importDefault(require("express-session"));
var connect_mongo_1 = __importDefault(require("connect-mongo"));
var MongoStore = connect_mongo_1.default(express_session_1.default);
function makeSession(app) {
    app.use(express_session_1.default({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({
            mongooseConnection: mongoose_1.connection,
        }),
    }));
    app.use(passport_1.initialize());
    app.use(passport_1.session());
    // app.use(
    //   session({
    //     secret: process.env.SESSION_SECRET!,
    //     resave: false,
    //     saveUninitialized: false,
    //     store: new MongoStore({
    //       mongooseConnection: mongoose.connection,
    //     }),
    //   }),
    // );
    // app.use(passport.initialize());
    // app.use(passport.session());
}
exports.makeSession = makeSession;

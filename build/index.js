"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("./db");
require("./passport");
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var app = express_1.default();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(morgan_1.default("dev"));
app.use(cookie_parser_1.default());
var session_1 = require("./session");
session_1.makeSession(app);
var routes_1 = __importDefault(require("./routes"));
app.use(routes_1.default);
app.listen(process.env.PORT, function () {
    console.log("Server listening on Port: http://localhost:" + process.env.PORT);
});

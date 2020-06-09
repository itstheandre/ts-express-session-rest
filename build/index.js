"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
dotenv_1.config();
require("./db");
require("./passport");
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var app = express_1.default();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(morgan_1.default("dev"));
// makeSession(app);
app.listen(process.env.PORT, function () {
    console.log("Express server listening on http://localhost://" + process.env.PORT);
});

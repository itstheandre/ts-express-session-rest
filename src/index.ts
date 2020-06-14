import "dotenv/config";
import "./db";
import "./passport";

import express from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(cookieParser());

import { makeSession } from "./session";
makeSession(app);

import routes from "./routes";
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on Port: http://localhost:${process.env.PORT}`);
});

import { config } from "dotenv";
config();
import "./db";
import "./passport";

import express from "express";
import logger from "morgan";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

import { makeSession } from "./session";
makeSession(app);

import routes from "./routes";
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(
    `Express server listening on http://localhost://${process.env.PORT}`,
  );
});

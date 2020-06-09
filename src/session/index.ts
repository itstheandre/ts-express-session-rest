import { initialize, session as passSession } from "passport";
import { connection as mongooseConnection } from "mongoose";
import session from "express-session";
import connectMongo from "connect-mongo";
import { Express } from "express";

const MongoStore = connectMongo(session);

export function makeSession(app: Express) {
  app.use(
    session({
      secret: process.env.SESSION_SECRET!,
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({
        mongooseConnection,
      }),
    }),
  );
  app.use(initialize());
  app.use(passSession());
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

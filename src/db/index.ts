// import * as mongoose from "mongoose";

import { mongoose } from "@typegoose/typegoose";

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

mongoose
  .connect(process.env.MONGODB_URI!)
  .then((conn) => {
    console.log(`Connected to ${conn.connections[0].name}`);
  })
  .catch((err) => {
    console.log(`Error connecting to the DB: ${err}`);
  });

export function disconnect() {
  mongoose.connection.close();
}

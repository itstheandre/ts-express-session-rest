"use strict";
// import * as mongoose from "mongoose";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnect = void 0;
var typegoose_1 = require("@typegoose/typegoose");
typegoose_1.mongoose.set("useNewUrlParser", true);
typegoose_1.mongoose.set("useFindAndModify", false);
typegoose_1.mongoose.set("useCreateIndex", true);
typegoose_1.mongoose.set("useUnifiedTopology", true);
typegoose_1.mongoose
    .connect(process.env.MONGODB_URI)
    .then(function (conn) {
    console.log("Connected to " + conn.connections[0].name);
})
    .catch(function (err) {
    console.log("Error connecting to the DB: " + err);
});
function disconnect() {
    typegoose_1.mongoose.connection.close();
}
exports.disconnect = disconnect;

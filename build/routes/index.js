"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_1 = require("./users");
var router = express_1.Router();
router.get("/", function (req, res) {
    res.send("This is home");
});
router.use("/api/auth", users_1.userRoutes);
router.get("/test", function (req, res) {
    console.log(req.user);
    res.json({ test: "test" });
});
exports.default = router;

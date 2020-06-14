"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeController = void 0;
function safeController(fn) {
    return function (req, res, next) {
        fn(req, res).catch(next);
    };
}
exports.safeController = safeController;

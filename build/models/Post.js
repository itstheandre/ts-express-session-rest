"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = exports.PostModel = void 0;
var typegoose_1 = require("@typegoose/typegoose");
var defaultClasses_1 = require("@typegoose/typegoose/lib/defaultClasses");
var PostModel = /** @class */ (function (_super) {
    __extends(PostModel, _super);
    function PostModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PostModel;
}(defaultClasses_1.TimeStamps));
exports.PostModel = PostModel;
exports.Post = typegoose_1.getModelForClass(PostModel);

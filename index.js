"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Draw_1 = require("./Draw");
var Main = /** @class */ (function () {
    function Main(context) {
        this.Context = context;
    }
    Main.prototype.scene = function () {
        this.DrawContext = new Draw_1.default(this.Context);
        this.DrawContext.DrawObjects();
    };
    return Main;
}());
exports.default = Main;

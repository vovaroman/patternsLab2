"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./objects/Circle");
var ColorRGB_1 = require("./objects/params/ColorRGB");
var Draw = /** @class */ (function () {
    function Draw(context) {
        this.context = context;
    }
    Draw.prototype.DrawObjects = function () {
        for (var i = 1; i < 2000; i *= 1.5) {
            var circle = new Circle_1.default(100 + i, 100 + i, 50, new ColorRGB_1.default(100, 100, 100), this.context);
            circle.Draw();
        }
    };
    return Draw;
}());
exports.default = Draw;

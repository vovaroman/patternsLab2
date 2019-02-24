"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ColorAdapter_1 = require("./params/ColorAdapter");
var Circle = /** @class */ (function () {
    function Circle(X, Y, D, Color, Context) {
        this.X = X;
        this.Y = Y;
        this.D = D;
        this.Color = Color;
        this.Adapter = new ColorAdapter_1.default(this.Color);
        this.Context = Context;
    }
    Circle.prototype.Draw = function () {
        this.Context.beginPath();
        this.Context.arc(this.X, this.Y, this.D, 0, 2 * Math.PI);
        this.Context.stroke();
    };
    return Circle;
}());
exports.default = Circle;

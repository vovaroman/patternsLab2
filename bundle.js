(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./objects/Circle":4,"./objects/params/ColorRGB":6}],2:[function(require,module,exports){
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

},{"./Draw":1}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
window.onload = function () {
    var x = document.getElementById('myCanvas');
    x.setAttribute('width', String(window.screen.width));
    x.setAttribute('height', String(window.screen.height));
    var main = new index_1.default(x.getContext("2d"));
    main.scene();
};

},{"./index":2}],4:[function(require,module,exports){
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

},{"./params/ColorAdapter":5}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ColorAdapter = /** @class */ (function () {
    function ColorAdapter(colorObject) {
        if (colorObject.Hex) {
            this.convertFromHex(colorObject);
        }
        else {
            this.convertFromRGB(colorObject);
        }
    }
    ColorAdapter.prototype.convertFromHex = function (colorObject) {
        this.Hex = colorObject.Hex;
        if (colorObject.Hex.length > 3) {
            var tempRed = colorObject[0] + colorObject[1];
            var tempGreen = colorObject[2] + colorObject[3];
            var tempBlue = colorObject[4] + colorObject[5];
            this.Red = parseInt(tempRed);
            this.Green = parseInt(tempGreen);
            this.Blue = parseInt(tempBlue);
        }
        else {
            var tempRed = colorObject[0];
            var tempGreen = colorObject[1];
            var tempBlue = colorObject[2];
            this.Red = parseInt(tempRed);
            this.Green = parseInt(tempGreen);
            this.Blue = parseInt(tempBlue);
        }
    };
    ColorAdapter.prototype.convertFromRGB = function (colorObject) {
        this.Red = colorObject.Red;
        this.Green = colorObject.Green;
        this.Blue = colorObject.Blue;
        this.Hex = colorObject.Red.toString(16) + colorObject.Green.toString(16) + colorObject.Blue.toString(16);
    };
    return ColorAdapter;
}());
exports.default = ColorAdapter;

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ColorRGB = /** @class */ (function () {
    function ColorRGB(r, g, b) {
        this.Red = r;
        this.Green = g;
        this.Blue = b;
    }
    return ColorRGB;
}());
exports.default = ColorRGB;

},{}]},{},[3]);

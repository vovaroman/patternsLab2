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

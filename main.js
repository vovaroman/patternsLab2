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

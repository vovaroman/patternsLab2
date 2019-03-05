var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Main from './index';
window.onload = function () {
    return __awaiter(this, void 0, void 0, function* () {
        var x = document.getElementById('myCanvas');
        x.setAttribute('width', String(window.screen.width));
        x.setAttribute('height', String(window.screen.height));
        let main = new Main(x.getContext("2d"), window.screen.width, window.screen.height);
        yield main.scene();
    });
};

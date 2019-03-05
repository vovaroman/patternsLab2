var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Circle from "./objects/Circle";
import ColorRGB from "./objects/params/ColorRGB";
import { setTimeout } from "timers";
class Draw {
    constructor(context, height, width) {
        this.context = context;
        this.height = height;
        this.width = width;
    }
    ClearMap() {
        this.context.clearRect(0, 0, this.width, this.height);
    }
    delay(ms) {
        return new Promise(function (resolve) {
            setTimeout(resolve, ms);
        });
    }
    asyncAwait(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.delay(10);
            yield callback();
        });
    }
    DrawObjects(x, y) {
        return __awaiter(this, void 0, void 0, function* () {
            let circle = new Circle(x, y, 50, new ColorRGB(1, 50, 50), this.context);
            for (let i = 1; i <= 10; i += 1) {
                const that = this;
                yield this.asyncAwait(() => {
                    circle.X += i * 10;
                    circle.Y += i * 10;
                    circle.D += i;
                    circle.Color = new ColorRGB(circle.Color.Red + i + 10, circle.Color.Green + i, circle.Color.Blue + i);
                    circle.Draw();
                    circle.History.push(Circle.createCopy(circle));
                });
            }
            circle.History.forEach(x => {
                console.log(x.X);
                console.log(x.Color);
            });
            return circle;
        });
    }
}
export default Draw;

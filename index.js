var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Draw from './Draw';
import Iterator from './Iterator';
class Main {
    scene() {
        return __awaiter(this, void 0, void 0, function* () {
            this.DrawContext = new Draw(this.Context, this.Height, this.Width);
            let iterator = new Iterator();
            iterator.push(yield this.DrawContext.DrawObjects(100, 100));
            iterator.push(yield this.DrawContext.DrawObjects(500, 100));
        });
    }
    constructor(context, width, height) {
        this.Context = context;
        this.Width = width;
        this.Height = height;
    }
}
export default Main;

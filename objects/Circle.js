import ColorAdapter from "./params/ColorAdapter";
class Circle {
    constructor(X, Y, D, Color, Context) {
        this.History = [this];
        this.X = X;
        this.Y = Y;
        this.D = D;
        this.Color = Color;
        this.Adapter = new ColorAdapter(this.Color);
        this.Context = Context;
    }
    getName() {
        return "Circle";
    }
    static createCopy(circle) {
        let copy = new Circle(circle.X, circle.Y, circle.D, circle.Color, circle.Context);
        return copy;
    }
    getSnapshot(version) {
        if (this.History.length > version) {
            return this.History[version];
        }
        else {
            return this;
        }
    }
    Draw() {
        this.Context.beginPath();
        this.Context.arc(this.X, this.Y, this.D, 0, 2 * Math.PI);
        this.Context.stroke();
        this.Context.fillStyle = new ColorAdapter(this.Color).Hex;
        this.Context.fill();
    }
}
export default Circle;

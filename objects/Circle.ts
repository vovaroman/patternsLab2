import ColorAdapter from "./params/ColorAdapter";
import ColorHEX from "./params/ColorHEX";
import ColorRGB from "./params/ColorRGB";
class Circle{
    Context:any;
    X:number;
    Y:number;
    D:number;
    Adapter:ColorAdapter;
    Color: ColorRGB;
    constructor(X:number,Y:number,D:number,Color:any,Context:any){
        this.X = X;
        this.Y = Y;
        this.D = D;
        this.Color = Color;
        this.Adapter =new ColorAdapter(this.Color);
        this.Context = Context;
    }

    Draw(){
        this.Context.beginPath();
        this.Context.arc(this.X,this.Y,this.D,0,2*Math.PI);
        this.Context.stroke();
    }

}

export default Circle;
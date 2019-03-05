import ColorAdapter from "./params/ColorAdapter";
import ColorHEX from "./params/ColorHEX";
import ColorRGB from "./params/ColorRGB";
import IMementoCircle from "./IMementoCircle"
import { copyFile } from "fs";
class Circle implements IMementoCircle{
    Context:any;
    X:number;
    Y:number;
    D:number;
    Adapter:ColorAdapter;
    Color: ColorRGB;
    History: Array<Circle> = [this];
    constructor(X:number,Y:number,D:number,Color:any,Context:any){
        this.X = X;
        this.Y = Y;
        this.D = D;
        this.Color = Color;
        this.Adapter =new ColorAdapter(this.Color);
        this.Context = Context;
    }

    getName(){
        return "Circle";
    }

    static createCopy(circle:Circle){
        let copy = new Circle(circle.X,circle.Y,circle.D,circle.Color,circle.Context);
        return copy;
    }
    getSnapshot(version:number){
        if(this.History.length > version){
            return this.History[version];
        }
        else{
            return this;
        }
    }

    Draw(){
        this.Context.beginPath();
        this.Context.arc(this.X,this.Y,this.D,0,2*Math.PI);
        this.Context.stroke();
        this.Context.fillStyle = new ColorAdapter(this.Color).Hex;
        this.Context.fill();
    }

}

export default Circle;
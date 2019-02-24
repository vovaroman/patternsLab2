import Circle from "./objects/Circle";
import ColorRGB from "./objects/params/ColorRGB";

class Draw{
    context:any;
    constructor(context: any){
        this.context = context;
    }
    DrawObjects(){
        let circle:Circle = new Circle(100,100,50,new ColorRGB(100,100,100),this.context);
        circle.Draw();
    }

}

export default Draw;
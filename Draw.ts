import Circle from "./objects/Circle";
import ColorRGB from "./objects/params/ColorRGB";

class Draw{
    context:any;
    constructor(context: any){
        this.context = context;
    }
    DrawObjects(){
        for(let i=1;i<2000;i*=1.5){
            let circle:Circle = new Circle(100+i,100+i,50,new ColorRGB(100,100,100),this.context);
            circle.Draw();
        }      
    }

}

export default Draw;
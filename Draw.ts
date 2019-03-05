import Circle from "./objects/Circle";
import ColorRGB from "./objects/params/ColorRGB";
import { setTimeout } from "timers";

class Draw{
    context:any;
    height:number;
    width:number;
    constructor(context: any, height: number, width: number){
        this.context = context;
        this.height = height;
        this.width = width;
    }

    ClearMap(){
        this.context.clearRect(0, 0, this.width, this.height);
    }

    delay(ms: number) {
        return new Promise<void>(function(resolve) {
          setTimeout(resolve, ms);
        });
    }
    async asyncAwait(callback) {
        await this.delay(10);
        await callback();
    }

    async DrawObjects(x:number,y:number){
        let circle:Circle = new Circle(x,y,50,new ColorRGB(1,50,50),this.context);
        for(let i=1;i<=10;i+=1){
            const that = this;
            await this.asyncAwait(()=>{
                circle.X += i*10;
                circle.Y += i*10;
                circle.D += i;
                circle.Color = new ColorRGB(
                    circle.Color.Red + i + 10,
                    circle.Color.Green + i,
                    circle.Color.Blue + i
                );
                circle.Draw();
                circle.History.push(Circle.createCopy(circle));
            });
        }
        circle.History.forEach(x => {
            console.log(x.X);
            console.log(x.Color);
        })
        return circle;
    }

}

export default Draw;
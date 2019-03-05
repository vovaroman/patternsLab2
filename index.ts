import Draw from './Draw'
import Circle from './objects/Circle'
import Iterator from './Iterator'
class Main{
    Context: any;
    DrawContext: Draw;
    Width:number;
    Height:number;
    async scene(){
        this.DrawContext = new Draw(this.Context, this.Height, this.Width);
        let iterator:Iterator = new Iterator()
        iterator.push(await this.DrawContext.DrawObjects(100,100));
        iterator.push(await this.DrawContext.DrawObjects(500,100));

    }
    constructor(context:any, width:number, height:number){
        this.Context = context;
        this.Width = width;
        this.Height = height;
    }
}

export default Main;

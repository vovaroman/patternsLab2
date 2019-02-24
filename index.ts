import Draw from './Draw'

class Main{
    Context: any;
    DrawContext: Draw;
    scene(){
        this.DrawContext = new Draw(this.Context);
        this.DrawContext.DrawObjects();
    }
    constructor(context:any){this.Context = context;}
}

export default Main;

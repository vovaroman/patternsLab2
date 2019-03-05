import IITerator from './IITerator'

class Iterator implements IITerator{
    private currentPos = 0;
    private Collection:Array<any> = new Array();

    Iterator(){ }

    next():void{
        if(this.currentPos < this.Collection.length){
            return this.Collection[this.currentPos++]
        }
        else{
            this.currentPos = 0
        }
    }
    push(item:any):void{
        this.Collection.push(item)
    }
    pop():void{
        this.Collection.pop()
    }
    hasMore():Boolean{
        if(this.currentPos < this.Collection.length){
            return true;
        }
        else{
            return false;
        }
    }
}

export default Iterator
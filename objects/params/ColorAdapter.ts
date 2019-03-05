import IColorHEX from "./IColorHEX";
import IColorRGB from "./IColorRGB";

class ColorAdapter implements IColorHEX,IColorRGB{
    public Red:number;
    public Green:number;
    public Blue:number;
    public Hex:string;

    convertFromHex(colorObject:IColorHEX){
        this.Hex = colorObject.Hex;
        if(colorObject.Hex.length > 3){
            let tempRed:string = colorObject[0]+colorObject[1];
            let tempGreen:string = colorObject[2]+colorObject[3];
            let tempBlue:string = colorObject[4]+colorObject[5];
            this.Red  = parseInt(tempRed);
            this.Green  = parseInt(tempGreen);
            this.Blue  = parseInt(tempBlue);
        }else{
            let tempRed:string = colorObject[0];
            let tempGreen:string = colorObject[1];
            let tempBlue:string = colorObject[2];
            this.Red  = parseInt(tempRed);
            this.Green  = parseInt(tempGreen);
            this.Blue  = parseInt(tempBlue);
        }
    }
    convertFromRGB(colorObject:IColorRGB){
        this.Red = colorObject.Red;
        this.Green = colorObject.Green;
        this.Blue = colorObject.Blue;
        this.Hex = '#' + colorObject.Red.toString(16) + colorObject.Green.toString(16) + colorObject.Blue.toString(16);
    }
    constructor(colorObject:any){

        if(colorObject.Hex){
            this.convertFromHex(colorObject);
        }
        else{
            this.convertFromRGB(colorObject);
        }
    }

}

export default ColorAdapter;
import IColorRGB from './IColorRGB'

class ColorRGB implements IColorRGB{
    Red:number;
    Green:number;
    Blue:number;
    constructor(r:number,g:number,b:number)
    {
        this.Red = r;
        this.Green = g;
        this.Blue = b;
    }
}

export default ColorRGB;
import IColorHEX from './IColorHEX'

class ColorHEX implements IColorHEX{
    Hex:string;
    constructor(hex:string)
    {
        this.Hex = hex;
    }
}

export default ColorHEX;
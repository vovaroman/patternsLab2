class ColorAdapter {
    convertFromHex(colorObject) {
        this.Hex = colorObject.Hex;
        if (colorObject.Hex.length > 3) {
            let tempRed = colorObject[0] + colorObject[1];
            let tempGreen = colorObject[2] + colorObject[3];
            let tempBlue = colorObject[4] + colorObject[5];
            this.Red = parseInt(tempRed);
            this.Green = parseInt(tempGreen);
            this.Blue = parseInt(tempBlue);
        }
        else {
            let tempRed = colorObject[0];
            let tempGreen = colorObject[1];
            let tempBlue = colorObject[2];
            this.Red = parseInt(tempRed);
            this.Green = parseInt(tempGreen);
            this.Blue = parseInt(tempBlue);
        }
    }
    convertFromRGB(colorObject) {
        this.Red = colorObject.Red;
        this.Green = colorObject.Green;
        this.Blue = colorObject.Blue;
        this.Hex = '#' + colorObject.Red.toString(16) + colorObject.Green.toString(16) + colorObject.Blue.toString(16);
    }
    constructor(colorObject) {
        if (colorObject.Hex) {
            this.convertFromHex(colorObject);
        }
        else {
            this.convertFromRGB(colorObject);
        }
    }
}
export default ColorAdapter;

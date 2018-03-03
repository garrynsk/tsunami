
import Dimensions from "./base/dimensions"
import Coordinates from "./base/coordinates"
import Glyph from "./glyph"

export default class Line {
    constructor(public dimensions: Dimensions, public coordinates: Coordinates, public number: number, public glyph: Glyph) {

        //  this.width = line.offsetWidth;
        //  this.height = line.offsetHeight;

    }


    /** 
    calcPosition(event: MouseEvent, baseline: number, lineHeight: number) {

        let lineNumber = Math.floor(event.clientY - this.canvas.offsetTop) / lineHeight

        let lineY = lineNumber * lineHeight + baseline

        return new Position(event.clientX - this.canvas.offsetLeft, lineY);
    }
*/


}

import Line from "./line"
import Cursor from "./cursor"
import Glyph from "./glyph"
import Font from "./font"
import Dimensions from "./base/dimensions"
import Coordinates from "./base/coordinates"
import * as Color from "./base/color"
import *  as Size from "./base/size"

export default class Text {

    lines: Line[]
    cursor: Cursor

    constructor(dimensions: Dimensions, coordinates: Coordinates, margin: number, family: string, color: Color.Color, size: Size.Size) {

        let cursorDimensions = new Dimensions(1, 20)
        let cursorCoordinates = new Coordinates(coordinates.x + margin, coordinates.y + margin)

        let lineDimensions = new Dimensions(dimensions.width, 20)
        let lineCoordinates = coordinates
        let linesNumber = Math.floor(dimensions.height / lineDimensions.height)

        let font = new Font(family, color, size)
        let glyph = new Glyph(font)

        let cursor = this.initCursor(cursorDimensions, cursorCoordinates)
        this.cursor = cursor

        var array: Line[] = Array(linesNumber)
        for (var i = 0; i < linesNumber - 1; i++) {
            array[i] = this.initLine(lineDimensions,
                new Coordinates(lineCoordinates.x, lineCoordinates.y + lineDimensions.height),
                i + 1,
                glyph)
        }

        this.lines = array
    }

    initCursor(dimensions: Dimensions, coordinates: Coordinates) {

        return new Cursor(dimensions, coordinates)
    }

    initLine(dimensions: Dimensions, coordinates: Coordinates, number: number, glyph: Glyph) {

        return new Line(dimensions, coordinates, number, glyph)

    }

    /** 
    drawCharacter(event: KeyboardEvent, ctx: CanvasRenderingContext2D) {

        ctx.fillStyle = "#000";
        ctx.font = this.font.size + "px " + this.font.family
        ctx.fillText(event.key, this.position.x, this.position.y);

        this.position.x += this.font.width
    }
*/


}
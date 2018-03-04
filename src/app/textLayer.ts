
import Line from "./line"
import Cursor from "./cursor"
import Glyph from "./glyph"
import Font from "./font"
import Dimensions from "./base/dimensions"
import Coordinates from "./base/coordinates"
import * as Color from "./base/color"
import *  as Size from "./base/size"
import Canvas from "./canvas"
import CursorLayer from "./cursorLayer"
import Margin from "./base/margin"

export default class TextLayer implements Canvas {

    ctx: CanvasRenderingContext2D

    lines: Line[]

    constructor(
        public canvas: HTMLCanvasElement
    ) {

        this.ctx = canvas.getContext("2d")

    }

    initLines(family: string, textColor: Color.Color, size: Size.Size, dimensions: Dimensions) {

        let font = new Font(family, textColor, size)
        let glyph = new Glyph(font, document)

        let lineDimensions = new Dimensions(dimensions.width, glyph.dimensions.height)
        let linesNumber = Math.floor(dimensions.height / lineDimensions.height)


        var array: Line[] = Array(linesNumber)
        for (var i = 0; i < linesNumber - 1; i++) {
            array[i] = new Line(lineDimensions, new Coordinates(0, (i + 1) * lineDimensions.height), i + 1, glyph)
        }

        return array

    }

    drawText(family: string, textColor: Color.Color, size: Size.Size) {

        this.ctx.fillStyle = Color.transparent
        this.ctx.fillRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight)

    }

    /** 
    drawCharacter(event: KeyboardEvent, ctx: CanvasRenderingContext2D) {

        ctx.fillStyle = "#000";
        ctx.font = this.font.size + "px " + this.font.family
        ctx.fillText(event.key, this.position.x, this.position.y);

        this.position.x += this.font.width
    }
*/

    setClick(func: (event: MouseEvent) => void) {

        this.canvas.addEventListener("click", func)

    }

}
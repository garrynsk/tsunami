import SVGLine from "./svg/line"
import Dimensions from "./base/dimensions"
import Coordinates from "./base/coordinates"
import Margin from "./base/margin"
import * as Color from "./base/color"
import Canvas from "./canvas"
import Cursor from "./cursor"

export default class CursorLayer implements Canvas {

    ctx: CanvasRenderingContext2D

    cursorCoordinates: Coordinates

    constructor(
        public canvas: HTMLCanvasElement,
        public cursor: Cursor
    ) {

        this.ctx = canvas.getContext("2d")

    }

    moveCursor() {

        this.cursor.erase(this.ctx, this.cursorCoordinates, Color.transparent)

    }

    drawCursor(event: MouseEvent, cursorColor: Color.Color, cursorDimensions: Dimensions): void {

        if (this.cursor instanceof Cursor) {

            this.cursor.erase(this.ctx, this.cursorCoordinates, Color.transparent)

        }

        let newCursorCoordinates = new Coordinates(event.clientX, event.clientY)

        let newCursor = new Cursor(cursorColor, cursorDimensions)

        newCursor.paint(this.ctx, newCursorCoordinates)

        this.cursor = newCursor

    }

}
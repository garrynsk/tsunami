
import Cursor from "./cursor"
import Dimensions from "./base/dimensions"
import Coordinates from "./base/coordinates"

export default class Canvas {

    public ctx: CanvasRenderingContext2D

    constructor(public canvas: HTMLCanvasElement, public background: string) {

        this.ctx = canvas.getContext("2d")
    }

    setClick(func: (event: MouseEvent) => Cursor) {

        this.canvas.addEventListener("click", func)

    }

    paint() {

        this.ctx.fillStyle = this.background
        this.ctx.fillRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight)

    }

    drawCursor(event: MouseEvent, cursor: Cursor) {

        if (cursor != null) {
            cursor.erase(this.ctx, this.background)
        }

        cursor = new Cursor(cursor.dimensions, cursor.coordinates)

        return cursor
    }


}
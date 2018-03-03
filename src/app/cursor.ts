import SVGLine from "./svg/line"
import Dimensions from "./base/dimensions"
import Coordinates from "./base/coordinates"
import * as Color from "./base/color"

export default class Cursor {

    constructor(public dimensions: Dimensions, public coordinates: Coordinates) { }

    erase(ctx: CanvasRenderingContext2D, color: Color.Color) {

        ctx.clearRect(this.coordinates.x, this.coordinates.y, this.dimensions.width, this.dimensions.height);
        this.paint(ctx, color)
    }

    paint(ctx: CanvasRenderingContext2D, color: Color.Color) {

        let line = new SVGLine(color, this.dimensions)

        // window.addEventListener("keypress", (event) => { this.drawLetter(event, ctx) })

        line.paint(ctx, this.coordinates)
    }

}
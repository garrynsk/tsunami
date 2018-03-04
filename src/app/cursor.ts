import SVGLine from "./svg/line"
import Dimensions from "./base/dimensions"
import Coordinates from "./base/coordinates"
import * as Color from "./base/color"

export default class Cursor {

    constructor(public color: Color.Color, public dimensions: Dimensions) { }

    erase(ctx: CanvasRenderingContext2D, coordinates: Coordinates, backgroundColor: Color.Color) {

        ctx.clearRect(coordinates.x, coordinates.y, this.dimensions.width, this.dimensions.height);

        //Layer this.paint(ctx, backgroundColor)

    }

    paint(ctx: CanvasRenderingContext2D, coordinates: Coordinates) {

        let line = new SVGLine(this.color, this.dimensions)

        // window.addEventListener("keypress", (event) => { this.drawLetter(event, ctx) })

        line.paint(ctx, coordinates)

    }

}
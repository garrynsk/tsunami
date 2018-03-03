
import * as Color from "../base/color"
import Dimensions from "../base/dimensions"
import Coordinates from "../base/coordinates"

export default class Line {

    constructor(public color: Color.Color, public dimensions: Dimensions) { }

    paint(ctx: CanvasRenderingContext2D, coordinates: Coordinates) {
        ctx.beginPath()
        ctx.lineWidth = this.dimensions.width
        ctx.strokeStyle = this.color
        ctx.moveTo(coordinates.x, coordinates.y)
        ctx.lineTo(coordinates.x - this.dimensions.height, coordinates.y)
        ctx.stroke() // Draw it
    }

}
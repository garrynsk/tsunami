
import * as Color from "./base/color"
import Dimensions from "./base/dimensions"
import TextLayer from "./textLayer"
import Margin from "./base/margin"
import CursorLayer from "./cursorLayer"
import Coordinates from "./base/coordinates"
import Cursor from "./cursor"

export default class Editor {

    text: TextLayer

    cursorLayer: CursorLayer

    constructor(
        public background: Color.Color,

        public coordinates: Coordinates,

        public dimensions: Dimensions,

        public margin: Margin
    ) { }

    paint(family: string, textColor: Color.Color, fontSize: number, cursorColor: Color.Color, cursorDimensions: Dimensions) {

        this.setBackground()

        this.text = new TextLayer(this.initCanvas("canvas-text"))

        let cursor = new Cursor(cursorColor, cursorDimensions)

        this.cursorLayer = new CursorLayer(this.initCanvas("canvas-cursor"), cursor)

        this.text.drawText(family, textColor, fontSize)

        this.text.setClick((event) => this.cursorLayer.drawCursor(event, cursorColor, cursorDimensions))

    }

    private initCanvas(canvasId: string): HTMLCanvasElement {

        let canvas = document.getElementById(canvasId)

        if (canvas instanceof HTMLCanvasElement) {

            return canvas

        } else {

            console.log("TextLayer canvas is not defined")

        }
    }

    private setBackground() {

        let div = document.getElementById("background")

        if (div instanceof HTMLDivElement) {

            div.style.backgroundColor = this.background

            div.style.height = this.dimensions.height.toString() + "px"

            div.style.width = this.dimensions.width.toString() + "px"

            div.style.zIndex = (1).toString()

            div.style.position = "absolute"

        } else {

            console.log("Background element is not set.")

        }

    }

}
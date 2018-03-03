
import Canvas from "./canvas"
import Text from "./text"

export default class Editor {


    constructor(public canvas: Canvas, public text: Text) {

    }

    paint() {

        this.canvas.setClick((event) => this.canvas.drawCursor(event, this.text.cursor))
        this.canvas.paint()

    }


}
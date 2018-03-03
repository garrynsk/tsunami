import Editor from './app/editor';
import Text from './app/text';
import Canvas from './app/canvas';
import Dimensions from "./app/base/dimensions"
import Coordinates from "./app/base/coordinates"

function setCanvas(width: number, height: number, id: string) {
    let element = document.getElementById(id)

    if (element instanceof HTMLCanvasElement) {
        this.canvas = element
        this.canvas.height = height
        this.canvas.width = width
        this.ctx = this.canvas.getContext("2d");
    } else {
        console.log("An element " + id + " is not a SVG Canvas")
    }
}

let rawCanvas = document.getElementById("canvas-text-editor")

if (rawCanvas instanceof HTMLCanvasElement) {
    let canvas = new Canvas(rawCanvas, "#999")
    let text = new Text(new Dimensions(250, 500), new Coordinates(0, 0), 5, "Arial", "#000", 14)
    let tsunami = new Editor(canvas, text)

    tsunami.paint();
}


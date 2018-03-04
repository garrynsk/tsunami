import Editor from './app/editor'
import CursorLayer from './app/cursorLayer'
import TextLayer from './app/textLayer'
import Canvas from './app/canvas'
import Cursor from './app/cursor'
import Dimensions from "./app/base/dimensions"
import Coordinates from "./app/base/coordinates"
import Margin from "./app/base/margin"

export default function tsunami() {

    let editor = new Editor("#999", new Coordinates(0, 0), new Dimensions(250, 300), new Margin(14, 14))

    editor.paint('"Courier New", Courier, monospace', "#000", 14, "#000", new Dimensions(1, 20))

}

tsunami()




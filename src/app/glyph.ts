
import Font from "./font"
import Dimensions from "./base/dimensions"

export default class Glyph {

    public baseline = 0

    constructor(public font: Font) {

        this.baselineCalc(this.box())

    }

    private box() {
        var box = document.createElement('div'),
            body = document.body;
        box.style.position = 'absolute';
        box.style.whiteSpace = 'nowrap';
        box.style.font = this.font.size + 'px ' + this.font.family;
        body.appendChild(box);
        box.innerHTML = 'm'; // It doesn't matter what text goes here
        return box
    }

    private baselineCalc(line: HTMLDivElement) {
        var span = document.createElement('span');
        span.style.display = 'inline-block';
        span.style.overflow = 'hidden';
        span.style.width = '1px';
        span.style.height = '1px';
        line.appendChild(span);
        var baseline = span.offsetTop + span.offsetHeight;
        return baseline

    }
}
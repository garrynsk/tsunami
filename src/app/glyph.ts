
import Font from "./font"
import Dimensions from "./base/dimensions"

type Container = { box: HTMLDivElement, doc: Document }

export default class Glyph {

    baseline: number = 0

    dimensions: Dimensions

    constructor(public font: Font, doc: Document) {

        let container = this.insertBox(doc)

        let baseline = this.baselineCalc(container.box, container.doc)

        this.baseline = baseline

    }

    private insertBox(doc: Document): Container {

        if (doc instanceof Document) {
            let box = doc.createElement('div'),
                body = doc.body

            box.style.position = 'absolute'
            box.style.whiteSpace = 'nowrap'
            box.style.font = this.font.size + 'px ' + this.font.family
            body.appendChild(box)
            box.innerHTML = 'm' // It doesn't matter what text goes here
            this.dimensions = new Dimensions(box.offsetHeight, box.offsetWidth)

            return { box, doc }
        }
    }

    private baselineCalc(box: HTMLDivElement, doc: Document) {

        if (doc instanceof Document) {

            let span = doc.createElement('span')
            span.style.display = 'inline-block'
            span.style.overflow = 'hidden'
            span.style.width = '1px'
            span.style.height = '1px'
            box.appendChild(span)
            let baseline = span.offsetTop + span.offsetHeight

            return baseline
        }
    }
}
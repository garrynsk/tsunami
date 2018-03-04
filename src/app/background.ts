
export default class Background {

    element: HTMLDivElement

    constructor(document: Document, id: string) {

        if (document instanceof Document) {

            let div = document.getElementById("background")

            if (div instanceof HTMLDivElement) {

                this.element = div

            } else {

                console.log("Background. Div element is not of type HTMLDivElement")

            }

        } else {

            console.log("Background. Document element is not of type Document")

        }
    }
}
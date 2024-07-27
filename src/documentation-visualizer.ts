import {nextrapDoc} from "./nextrap-registry";


const style = `

:host {
    display: block;
    padding: 1rem;
    font-size: 16px;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    margin: 1rem;
}

`;




class DocumentationVisualizer extends HTMLElement {


    constructor() {
        super();
    }

    connectedCallback() {
        let shadowRoot = this.attachShadow({mode: 'open'});

        let exampels = nextrapDoc().__projectDocs;
        let html = '<style>' + style + '</style>';
        let examples = '';
        let slotId = 0;
        for (let key in exampels) {
            let projectDoc = exampels[key];
            html += `<h1>${projectDoc.title}</h1>`;
            for (let chapter of projectDoc.chapters) {
                html += `<h2>${chapter.title}</h2>`;
                html += `<p>${chapter.content}</p>`;
                if (chapter.example) {
                    let curSlot = slotId++;
                    console.log(chapter.example.htmlCode)
                    html += `<slot name="slot${curSlot}"></slot>`;
                    examples += `<nx-example-visualizer slot="slot${curSlot}" exampleId="${chapter.example}"></nx-example-visualizer>`;
                }
            }
        }
        this.shadowRoot.innerHTML = html;
        this.innerHTML = examples;
    }
}

customElements.define('nx-documentation-visualizer', DocumentationVisualizer);

document.addEventListener('DOMContentLoaded', () => {
    window.document.body.appendChild(document.createElement('nx-documentation-visualizer'));

});

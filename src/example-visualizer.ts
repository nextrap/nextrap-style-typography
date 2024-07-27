import {nextrapDoc} from "./nextrap-registry";
import {ka_create_element} from "@kasimirjs/core/dist/create-element";


const html = `

<style>
:host {
    display: block;
    font-size: 16px;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;

}

#header {
    background-color: #f0f0f0;
    padding: 0.2rem;
    border-bottom: 1px solid #ccc;

}
#html {
    border 1px solid #ccc;
    padding: 1rem;
    background: #fff;
}
</style>

<div>
    <div class="header" id="header">html</div>
    <div  id="html">
        <slot name="example">
    </div>
</div>

`;




class ExampleVisualizer extends HTMLElement {


    constructor() {
        super();
    }

    connectedCallback() {
        let shadowRoot = this.attachShadow({mode: 'open'});

        let exampleId = this.getAttribute('exampleId');
        let example = nextrapDoc().__examples[exampleId];
        if (!example) {
            this.shadowRoot.innerHTML = 'Example not found';
            return;
        }

        if (example.htmlCode) {
            this.appendChild(ka_create_element("div", {slot: 'example'})).innerHTML = example.htmlCode;

        }

        shadowRoot.innerHTML = html;
    }
}

customElements.define('nx-example-visualizer', ExampleVisualizer);


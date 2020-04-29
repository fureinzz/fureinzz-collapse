import { html, LitElement } from './node_modules/lit-element/lit-element';

export class CollapseElement extends LitElement {
    constructor() {
        super();
        this.opened = false;
    }
    static get properties() {
        return {
            opened: { type: Boolean, reflect: true, attribute: true },
        };
    }

}
customElements.define('fr-collapse', CollapseElement);

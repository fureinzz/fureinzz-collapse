import { html, LitElement } from './node_modules/lit-element/lit-element';

export class CollapseElement extends LitElement {
    constructor() {
        super();
        this.opened = false;
        this.horizontal = false;
        this.noAnimation = false;

    }
    static get properties() {
        return {
            opened: { type: Boolean, reflect: true, attribute: true },
            horizontal: { type: Boolean, reflect: true, attribute: true },
            noAnimation: { type: Boolean, reflect: true, attribute: true }
        };
    }
    render() {
        return html `
            <style>
                :host{
                    display: block;
                    overflow: hidden;
                    will-change: max-height, max-width;
                    transition-property: max-height, max-width
                }
            </style>

            <div>
                <slot></slot>
            </div>    

        `;
    }

    open() {
        this.opened = true;
    }
    close() {
        this.opened = false;
    }
    toggle() {
        this.opened ? this.close() : this.open();
    }

}
customElements.define('fr-collapse', CollapseElement);

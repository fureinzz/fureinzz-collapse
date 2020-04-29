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

    get dimensionCSS() {
        return this.horizontal ? 'maxWidth' : 'maxHeight';
    }

    get dimensionSize() {
        return this.horizontal
            ? this.scrollWidth + 'px'
            : this.scrollHeight + 'px';
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

    _show() {
        this.style.display = '';
        this.noAnimation
            ? this.style[this.dimensionCSS] = ''
            : this.style[this.dimensionCSS] = this.dimensionSize;

        this.setAttribute('tabindex', '');
    }

    _hide() {
        if (this.noAnimation) {
            this.style[this.dimensionCSS] = '0px';
            this.style.display = 'none';
        }
        else {
            this.style[this.dimensionCSS] = this.dimensionSize;
            let timer = setTimeout(() => {
                this.style[this.dimensionCSS] = '0px';
                clearTimeout(timer);
            }, 0);
        }
        this.tabIndex = -1;
    }
    _enableAnimation() {
        this.style.transition = 'var(--speed, 300ms) ease';
    }
    _disableAnimation() {
        this.style.transition = '';
    }
    _transitionEnd() {
        this.style[this.dimensionCSS] === '0px'
            ? this.style.display = 'none'
            : this.style[this.dimensionCSS] = '';

        this.dispatchEvent(
            new CustomEvent('animation-opened-changed', {detail: this.opened})
        )
    }
}
customElements.define('fr-collapse', CollapseElement);

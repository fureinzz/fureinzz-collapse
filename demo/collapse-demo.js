
import {html, LitElement} from 'lit-element'
import '../fureinzz-collapse'

class IconToggle extends LitElement {
    constructor() {
        super()

        this.opened = false
        this.addEventListener('click', this.toggle)
    }
    static get properties() {
        return {
            opened: {
                type: Boolean
            }
        }
    }

    toggle() {
        this.opened = !this.opened

        this.dispatchEvent(
            new CustomEvent('toggle', {detail: this.opened})
        )
    }
    render() {
        return html`
            <style>
                :host{
                    cursor: pointer;
                    display: block;
                    width: 24px;
                    height: 24px;
                }

                /* ------------ */
                div[opened] #less{
                    display: block
                }
                div[opened] #more{
                    display: none
                }
                div:not([opened]) #more{
                    display: block
                }
                div:not([opened]) #less{
                    display: none
                }
            </style>

            <div ?opened="${this.opened}">
                <div id="more" style="width: 24px; height: 24px;">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#5F6368" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
                </div>
                <div id="less" style="width: 24px; height: 24px;">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#5F6368" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/></svg>
                </div>
            </div>
        `
    }
}

customElements.define('fr-toggle-icon', IconToggle)
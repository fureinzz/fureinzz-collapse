import { html, LitElement } from 'lit-element';

/**
*  `fureinzz-collapse` creates a collapsible block of content. For interaction, use toggle(), open(), close() or open, 
*   in order to hide / show the contents. By default, the contents of the element will be collapsed.
*   When interacting with the fureinzz-collapse element, it configures the max-width/max-height depending on the specified horizontal attribute and shows/hides the content.
*
*   Warning: for proper functioning, do not set margin/padding directly to the object, instead place the block inside the element and style it
*
*   Example:
*
*   <fureinzz-collapse>
*       <div style="padding: 10px; color: grey;">
*          <span>...</span>
*       </div>
*   </fureinzz-collapse>
*
*   @demo demo/index.html
*   @element fureinzz-collapse
*/ 

export class CollapseElement extends LitElement {
    constructor() {
        super();
        this.opened = false;
        this.horizontal = false;
        this.noAnimation = false;
        this.addEventListener('transitionend', this._transitionEnd);
    }
    static get properties() {
        return {
            /**
            * Set `opened` to true to show the element, false to collapse it
            * @property {Boolean} opened - The state responsible for rendering the object's content
            * @type     {Boolean} 
            */ 
            opened: { type: Boolean, reflect: true, attribute: true },

            /**
            * If `horizontal` is true, the content opens horizontally, otherwise vertically to true to disable animation
            * @property {Boolean} horizontal - The state responsible for content orientation
            * @type     {Boolean}
            */ 
            horizontal: { type: Boolean, reflect: true, attribute: true },

            /**
            * Set `noAnimation` to true to disable animation
            * @property {Boolean} noAnimation - The state responsible for animating content
            * @type     {Boolean}
            */ 
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
            </div> `
    }

    /**
    * Defines a dimension for CSS
    * 
    * if `horizontal` === true: `maxWidth`
    * else: `maxHeight`
    * 
    * @private
    * @returns {String}
    */ 
    get dimensionCSS() {
        return this.horizontal ? 'maxWidth' : 'maxHeight';
    }

    /**
    * Returns the height/width value 
    * depending on the dimension
    * 
    * @private
    * @returns {String}
    */ 
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
        this.opened = !this.opened
    }
    
    /**
    * Expands the content block
    * 
    * @private
    * @returns {void}
    */ 
    _show() {
        this.style.display = '';
        this.style[this.dimensionCSS] = this.dimensionSize;

        this.removeAttribute('tabindex');
    }

    /**
    * Collapses the content block
    * 
    * @private
    * @returns {void}
    */
    _hide() {
        this.style[this.dimensionCSS] = this.dimensionSize;
        
        // Used for animated transition to the closed state
        let async = setTimeout(() => {
            this.style[this.dimensionCSS] = '0px';
            clearTimeout(async);
        }, 0);

        this.setAttribute('tabindex', '-1');
    }

    /**
    * Enable animation if `noAnimation` === false
    * 
    * @private
    * @returns {void}
    */
    _enableAnimation() {
        this.style.transitionDuration = '';
    }
    /**
    * Disables animation if `noAnimation` === true
    * 
    * @private
    * @returns {void}
    */
    _disableAnimation() {
        this.style.transitionDuration = '0s';
    }

    /**
    * Handler for the `transitionend` event
    * 
    * @private
    * @returns {void}
    */
    _transitionEnd() {
        this.opened === false
            ? this.style.display = 'none'
            : this.style[this.dimensionCSS] = ''

        this.dispatchEvent(
            new CustomEvent('animation-opened-changed', {detail: this.opened})
        )
    }

    updated(changedProperties) {
        changedProperties.forEach((oldValue, property) => {
            switch (property) {
                case 'opened':
                    this.openedChanged()
                    break;
                case 'noAnimation':
                    this.noAnimationChanged()
                    break;
            }
        });
    }
    openedChanged() {
        this.opened ? this._show() : this._hide()

        this.dispatchEvent(new CustomEvent('opened-changed', {detail: this.opened}))
    }
    noAnimationChanged() {
        this.noAnimation ? this._disableAnimation() : this._enableAnimation();
    }

    connectedCallback() {
        super.connectedCallback();

        // Required for instant closing of content without animation when the page is reloaded
        if (!this.opened) {
         this.style.display = 'none';
         this.style[this.dimensionCSS] = '0px';
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('transitionend', this._transitionEnd);
    }
}
customElements.define('fureinzz-collapse', CollapseElement);

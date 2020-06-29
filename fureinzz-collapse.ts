import {LitElement} from 'lit-element'

const template = document.createElement('template')
template.innerHTML = `
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
`

/**
*  `fureinzz-collapse` creates a collapsible block of content. For interaction, use toggle(), open(), close() or open, 
*   in order to hide / show the contents. By default, the contents of the element will be collapsed.
*   When interacting with the fureinzz-collapse element, it configures the max-width/max-height depending on the specified horizontal attribute and shows/hides the content.
*
*   @element `fureinzz-collapse`
*/ 
export class fureinzzCollapse extends LitElement {

    public opened: boolean = false
    public noAnimation: boolean = false
    public horizontal: boolean = false

    constructor () {
        super ()

        // Initializing the component template
        this.shadowRoot.append(template.content.cloneNode(true))
    }

    static get properties () {
        return {
            /**
             * Set `opened` to true to show the element, false to collapse it
             **/ 
            opened: { type: Boolean, reflect: true, attribute: true },

            /**
             * If `horizontal` is true, the content opens horizontally, otherwise vertically to true to disable animation
             **/ 
            horizontal: { type: Boolean, reflect: true, attribute: true },

            /**
             * Set `noAnimation` to true to disable animation
             **/ 
            noAnimation: { type: Boolean, reflect: true, attribute: true }
        };
    }

    /**
     * Defines a dimension for CSS
     * 
     * if `horizontal` === true: `maxWidth`
     * else: `maxHeight`
     * @returns {String}
     **/ 
    get dimensionCSS (): string {
        return this.horizontal ? 'maxWidth' : 'maxHeight';
    }

    /**
     * Returns the height/width value depending on the dimension
     * @returns {String}
     **/ 
     get dimensionSize (): string {
        return this.horizontal
            ? this.scrollWidth + 'px'
            : this.scrollHeight + 'px';
    }

    open (): void {
        this.opened = true;
    }

    close (): void {
        this.opened = false;
    }

    toggle (): void {
        this.opened = !this.opened
    }
    
    /**
     * Expands the content block
     **/ 
    show (): void {
        this.style.display = '';
        this.style[this.dimensionCSS] = this.dimensionSize;

        // Allowing focus on elements inside the component
        this.removeAttribute('tabindex');
    }

    /**
     * Collapses the content block
     **/
    hide (): void {
        this.style[this.dimensionCSS] = this.dimensionSize;
        
        // Used for animated transition to the closed state
        let async = setTimeout(() => {
            
            this.style[this.dimensionCSS] = '0px';
            clearTimeout(async);
        }, 0);

        // Removing the ability to focus on elements inside the component
        this.setAttribute('tabindex', '-1');
    }

    /**
     * Enable animation if `noAnimation` === false
     * @protected
     * @returns {void}
     **/
    protected enableAnimation (): void {
        this.style.transitionDuration = '';
    }
    
    /**
     * Disables animation if `noAnimation` === true
     * @protected
     * @returns {void}
     **/
    protected disableAnimation (): void {
        this.style.transitionDuration = '0s';
    }

    /**
     * Handler for the `transitionend` event
     * @protected
     * @returns {void}
     **/
    protected transitionEnd (): void {
        
        this.opened === false
            ? this.style.display = 'none'
            : this.style[this.dimensionCSS] = ''

        // Dispatch events to the external environment when the animation is finished
        const Event: CustomEvent = new CustomEvent('animation-opened-changed', {detail: this.opened})
        this.dispatchEvent(Event)
    }

    // 
    openedChanged (): void {
        this.opened ? this.show() : this.hide()

        // Dispatch events to the external environment
        const Event: CustomEvent = new CustomEvent('opened-changed', {detail: this.opened})
        this.dispatchEvent(Event)
    }

    noAnimationChanged (): void {
        this.noAnimation ? this.disableAnimation() : this.enableAnimation();
    }    

    updated (changedProperties: any) {
        changedProperties.forEach((oldValue: unknown, property: string) => {
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

    connectedCallback (): void {
        super.connectedCallback();
    
        // initializing event handlers when mounting an element
        this.addEventListener('transitionend', this.transitionEnd)
        
        // Required for instant closing of content without animation when the page is reloaded
        if (!this.opened) {
         this.style.display = 'none';
         this.style[this.dimensionCSS] = '0px';
        }
    }
    
    disconnectedCallback (): void {
        super.disconnectedCallback();

        // Deleting all event handlers to avoid memory leaks
        this.removeEventListener('transitionend', this.transitionEnd);
    }
}
customElements.define('fureinzz-collapse', fureinzzCollapse);

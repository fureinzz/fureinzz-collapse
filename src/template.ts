export const template = document.createElement('template')

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
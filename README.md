# &lt;fureinzz-collapse&gt;

[![npm](https://img.shields.io/npm/v/@fureinzz/fureinzz-collapse?style=flat-square)](https://www.npmjs.com/package/@fureinzz/fureinzz-collapse)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg?style=flat-square)](https://www.webcomponents.org/element/@fureinzz/fureinzz-collapse)
![license](https://img.shields.io/github/license/fureinzz/fureinzz-collapse?style=flat-square)

**`fureinzz-collapse`  creates a collapsible block of content.**


+ **Accessible** -  Collapse uses the animation API for a smooth transition, not javascript, so the component does not load your system for rendering animation.

+ **Works with any framework** - the component is based on the native `customElements` technology, which makes it possible to use it together with any library or framework

+ **Works with [Shadow DOM](http://https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM "Shadow DOM")** - Collapse works by using the modern technology of Shadow DOM. This approach improves the experience of using web components

## Installation 

We recommend using [npm](https://www.npmjs.com/package/@fureinzz/fureinzz-collapse) for installation

```
npm install @fureinzz/fureinzz-collapse
```


## Usage
Before using the dialog you must import the component module: ( `import "@fureinzz/fureinzz-collapse"` ).  After adding the module, you can use `fureinzz-collapse` in your app


To expand the content you must specify the `opened` attribute
```html
<fureinzz-collapse opened>
  <span> Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
</fureinzz-collapse>
```
You can also expand the content using the `opened` property or the `.open() `and `.toggle()` methods
```javascript
const collapse = document.querySelector("fureinzz-collapse")
collapse.open()
```

## Styling

The component is easy to style, so you can style it as you like

## Properties 

When initializing a component each of the properties presented is false by default

+ **opened** -  If `true`, the contents of the collapse will open
+ **horizontal** - If `true`, the orientation will be changed to horizontal 
+ **noAnimation** - If `true`, animation will be disabled

**Example of how you can set a property in an html file:**
```html
<fureinzz-collapse opened no-animation>
    <span> Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
</fureinzz-collapse>
```

## Events 
The dialog can dispatch 3 types of events to the external environment

+ **opened-changed** - Event that is dispatched when the `opened` state changes
+ **animation-opened-changed** - Event that is dispatched when the animation transition ends

```javascript
    const collapse = document.querySelector("fureinzz-collapse")

    collapse.addEventListener("opened-changed", event => {
        const detail = event.detail
       
        // If the collapse was opened
        console.log(detail) // {opened: true}
    })
```
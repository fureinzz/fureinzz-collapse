# &lt;fureinzz-collapse&gt;

[![npm](https://img.shields.io/npm/v/@fureinzz/fureinzz-collapse?style=flat-square)](https://www.npmjs.com/package/@fureinzz/fureinzz-collapse)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg?style=flat-square)](https://www.webcomponents.org/element/@fureinzz/fureinzz-collapse)
![license](https://img.shields.io/github/license/fureinzz/fureinzz-collapse?style=flat-square)

`fureinzz-collapse`  creates a collapsible block of content. For interaction, use `toggle ()`, `open ()`, `close ()` or `open`, in order to hide / show the contents. By default, the contents of the element will be collapsed.


When interacting with the `fureinzz-collapse` element, it configures the max-width/max-height depending on the specified `horizontal` attribute and shows/hides the content.

**Warning:** for proper functioning, do not set  **margin**/**padding**  directly to the object, instead place the block inside the element and style it

**Example:**
```html
<fureinzz-collapse>
  <div style="padding: 10px; color: grey;">
    <span>...</span>
  </div>
</fureinzz-collapse>
```

## Properties
| Property | type | Description | Default |
| --- | --- | --- | --- |
| `opened` | Boolean | Set **true** to show object contents | `false` |
| `noAnimation` | Boolean | Set **true** to disable animation  | `false` |
| `horizontal` | Boolean | If **true**, the content opens horizontally| `false` |

## Methods
| Method | Description | 
| --- | --- | 
| `open`  | Changes `opened` = **true** and shows the content|
| `close`  | Changes `opened` = **false** and hides the content |
| `toggle`  |  Changes `opened` = `!opened` and shows / hides the content depending on the new `opened`value|

## Events
| Event | Description | 
| --- | --- | 
| `opened-changed`  | Triggered when the `opened` state changes |
| `animation-opened-changed`  |Triggered when the transition animation ends |


## Styling

If you want to change the transition speed, change the css property `transition-duration`

## Usage

#### Installation
```
npm install --save @fureinzz/fureinzz-collapse
```

#### In an HTML file
```html
<html>
  <head>
    <script type="module">
      import '@fureinzz/fureinzz-collapse/fureinzz-collapse.js'
    </script>
  </head>
  <body>
    <fureinzz-collapse>
      <div>...</div>
    </fureinzz-collapse>
  </body>
</html>
```
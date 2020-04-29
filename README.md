# &lt;fureinzz-collapse&gt;

`fureinzz-collapse`  creates a collapsible block of content. For interaction, use `toggle ()`, `open ()`, `close ()` or `open`, in order to hide / show the contents. By default, the contents of the element will be collapsed.


When interacting with the `fureinzz-collapse` element, it configures the max-width/max-height depending on the specified `horizontal` attribute and shows/hides the content.

**Warning:** for proper functioning, do not set  **margin**/** padding**  directly to the object, instead place the block inside the element and style it

**Example:**
```html
<fureinzz-collapse>
  <div style="padding: 10px; color: grey;">
    <span>...</span>
  </div>
</fureinzz-collapse>
```

## Demo
![collapse.demo.gif](https://github.com/fureinzz/fureinzz-collapse/blob/master/demo-image/fr-collapse.demo.gif?raw=true)

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

The following custom properties are available for styling

| Property | Description | Default |
| --- | --- | --- |
| `--speed` | The duration of the animation | `300ms` |

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
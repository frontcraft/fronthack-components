# Tooltip

### Usage

`fronthack component`, then `tooltip`

#### JSX example:

```js
<Tooltip message="Hey, I'm made with pure CSS" direction="tr" />
```

##### Properties

* `direction` - in which direction tooltip should appear
* `message` - a content of tooltip


#### Static HTML example:

```html
<div class="tooltip tooltip-tr" data-tooltip="Hey, I'm made with pure CSS">
  Hover me
</div>
```

### Avaliable directions

* tl - top left (default)
* tr - top right
* bl - bottom left
* br - bottom right
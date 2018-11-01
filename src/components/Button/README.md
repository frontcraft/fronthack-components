# Button

### Usage

`fronthack component`, then `button`

#### JSX example:

```js
<Button
  variant="primary"
  size="xs"
  className="any-class"
  onClick={() => alert('Button callback, eg. history.push')}
>This is button</Button>
```

##### Properties

* `variant` - style variant
* `size` - button sizing
* `onClick` - callback after click
* `disabled` - should button be active or not


#### Static HTML example:

```html
<a class="btn btn--primary btn--sm"><i class="icon icon--bulb"></i> Button</a>
```

### Avaliable types

* xs
* sm
* lg
* block
* primary
* light
* link
* disabled
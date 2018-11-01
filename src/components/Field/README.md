# Field

### Usage

`fronthack component`, then `field`

#### JSX example:

```js
<Field label="Field label" spacing values={[
  'Multiple value',
  'Another value',
  'Third value',
]}/>
<Field label="Field label" inlineLabel>Single value</Field>
```

##### Properties

* `label` - label of a field
* `values` - a list of values
* `inlineLabel` - set values inline with label
* `spacing` - adds bottom margin


#### Static HTML example:

```html
<div class="field field--inline-label field--spacing">
  <div class="field__label">Label:</div>
  <div class="field__items">
    <div class="field__item">Item 1</div>
    <div class="field__item">Item 2</div>
    <div class="field__item">Item 3</div>
  </div>
</div>
```
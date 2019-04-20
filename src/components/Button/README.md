# Button

### Usage

```
fronthack component Button
```

#### JSX example:

```jsx
<Button
  variant='primary'
  size='xs'
  className='any-class'
  onClick={() => action('Button callback, eg. history.push')}
>Button label</Button>
```

##### Properties

* `variant` - style variant
* `size` - button sizing
* `onClick` - callback after click
* `disabled` - should button be active or not


#### Static HTML example:

```html
<a class="btn">Default button</a>
```
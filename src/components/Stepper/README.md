# Stepper

### Usage

```
fronthack component Stepper
```

#### JSX example:

```jsx
<Stepper
  steps={['Cart', 'Shipping', 'Billing', 'Summary', 'Complete']}
  current={2}
/>
```

##### Properties

* `steps` - names of the steps
* `current` - number of highlighted step


#### Static HTML example:

```html
<div class="stepper">
  <div class="stepper__item"><div class="stepper__label">Start</div></div>
  <div class="stepper__item"><div class="stepper__label">Page 1</div></div>
  <div class="stepper__item"><div class="stepper__label">Page 2</div></div>
  <div class="stepper__item is-active"><div class="stepper__label">Page 3</div></div>
  <div class="stepper__item"><div class="stepper__label">Page 4</div></div>
  <div class="stepper__item"><div class="stepper__label">Page 5</div></div>
  <div class="stepper__item"><div class="stepper__label">Complete</div></div>
</div>
```
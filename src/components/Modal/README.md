# Modal

### Usage

```
fronthack component Modal
```

#### JSX example:

```jsx
<Modal
  size="sm"
  title="Modal title"
  trigger={<Button variant="primary">Open modal</Button>}
  // isOpen
>Modal content</Modal>
```

##### Properties

* size - modal window size
* title - title of the modal
* trigger - element that will act as a trigger
* isOpen - force opened state with a prop


#### Static HTML example:

```html
<div class="modal modal--sm">
  <div class="modal__trigger">Open modal</div>
  <div class="modal__inner">
    <div class="modal__title">Modal title</div>
    <div class="modal__content">
      Modal content
    </div>
  </div>
  <div class="modal__overlay"></div>
</div>

<!-- This component requires additional JavaScript: -->
<script>
  // Modal
  document.addEventListener('click', event => {
    if (event.target.classList.contains('modal__trigger')
    || event.target.classList.contains('modal__overlay')) {
      event.target.parentElement.classList.toggle('is-open')
    }
  })
</script>
```

### Avaliable sizes

* xs
* sm
* lg

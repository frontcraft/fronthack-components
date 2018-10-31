# Accordion

### Usage

`fronthack component`, then `modal`

#### JSX example:

```js
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
<script>
  $('.modal__trigger, .modal__overlay').click(function() {
    $(this).parent('.modal').toggleClass('is-open')
  })
</script>
```

### Avaliable sizes

* xs
* sm
* lg

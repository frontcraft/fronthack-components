# Accordion

### Usage

`fronthack component`, then `accordion`

#### JSX example:
```js
<Accordion items={[
  {
    title: 'First accordion item',
    content: 'Content for the first accordion'
  },
  {
    title: 'Second accordion item',
    content: 'Content for the first accordion'
  },
]}/>
```

##### Properties

* `items` - each object must contain a title and content that is visible when expanded


#### Static HTML example:

```html
<nav class="accordion">
  <div class="accordion__item">
    <div class="accordion__title">First accordion item</div>
    <div class="accordion__content is-expanded">Content for the first accordion</div>
  </div>
  <div class="accordion__item">
    <div class="accordion__title">Second accordion item</div>
    <div class="accordion__content">Content for the second accordion</div>
  </div>
</nav>

<script>
  $('.accordion__item').click(function() {
    $(this).parent('.accordion').children().removeClass('is-expanded')
    $(this).toggleClass('is-expanded')
  })
</script>
```
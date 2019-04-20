# Accordion

### Usage

```
fronthack component Accordion
```

#### JSX example:

```jsx
<Accordion>
  <AccordionItem title='First accordion item'>
    Content for a first item
  </AccordionItem>
  <AccordionItem title='Second accordion item'>
    Content for a second item
  </AccordionItem>
</Accordion>
```

##### Properties

* `title` - each accordion item must contain a title

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
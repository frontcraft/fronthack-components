# Tabs

### Usage

```
fronthack component Tabs
```

#### JSX example:

```jsx
<Tabs labels={['First', 'Second', 'Third']}>
  {[
    <div>Content of the first tab</div>,
    <div>Content of the second tab</div>,
    <div>Content of the third tab</div>
  ]}
</Tabs>
```

##### Properties

* `labels` - labels on tabs


#### Static HTML example:

```html
<div class="tabs" data-active-tab="0">
  <span class="tabs__label">First</span>
  <span class="tabs__label">Second</span>
  <span class="tabs__label">Third</span>
  <div class="tabs__content">
    <p>Content for the first tab</p>
  </div>
  <div class="tabs__content">
    <p>Content for the second tab</p>
  </div>
  <div class="tabs__content">
    <p>Content for the third tab</p>
  </div>
</div>

<script>
  $('.tabs__label').click(function() {
    $(this).parent('.tabs').attr({ 'data-active-tab': $(this).index() })
  })
</script>
```
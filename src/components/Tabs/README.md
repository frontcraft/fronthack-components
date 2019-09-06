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
  <div class="tabs__btns">
    <span class="tabs__btn">First</span>
    <span class="tabs__btn">Second</span>
    <span class="tabs__btn">Third</span>
  </div>
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

<!-- This component requires additional JavaScript: -->
<script>
  // Tabs
  document.addEventListener('click', event => {
  if (event.target.className === 'tabs__btn') {
    const tabs = event.target.parentElement.parentElement
    const btns = Array.from(event.target.parentElement.children)
    const index = btns.findIndex(item => item.innerHTML === event.target.innerHTML)
    tabs.setAttribute('data-active-tab', index)
  }
})
</script>
```
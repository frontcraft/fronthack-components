# Dropdown

### Usage

```
fronthack component Dropdown
```

#### JSX example:

```jsx
<Dropdown overlay links={[
  {
    label: 'Profile',
    url: '#',
  },
  {
    label: 'Settings',
    callback: () => alert('A callback instead of url.'),
  },
  {
    label: 'Log out',
    url: '#',
  },
]}>Toggle dropdown</Dropdown>
```

##### Properties

* `links` - array of items, where each contains two string values - label and url or callback.
* `overlay` - overlay tint that darkens the rest of the screen


#### Static HTML example:

```html
<div class="dropdown">
  <span class="dropdown__label">
    Open dropdown
  </span>
  <div class="dropdown__inner">
    <nav class="dropdown__nav">
      <a href="#" class="dropdown__link">First dropdown link</a>
      <a href="#" class="dropdown__link">Second dropdown link</a>
      <a href="#" class="dropdown__link">Third dropdown link</a>
    </nav>
  </div>
  <div class="dropdown__overlay"></div>
</div>

<!-- This component requires additional JavaScript: -->
<script>
  // Dropdown
  document.addEventListener('click', event => {
    if (['dropdown__label', 'dropdown__overlay'].includes(event.target.className)) {
      event.target.parentElement.classList.toggle('is-open')
    }
  })
</script>
```
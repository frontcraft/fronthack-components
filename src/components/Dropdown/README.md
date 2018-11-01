# Dropdown

### Usage

`fronthack component`, then `dropdown`

#### JSX example:

```js
<Dropdown overlay links={[
  {
    label: 'Profile',
    url: '#',
  },
  {
    label: 'Settings',
    url: '#',
  },
  {
    label: 'Log out',
    url: '#',
  },
]}>Toggle dropdown</Dropdown>
```

##### Properties

* `links` - menu item objects, that contains two string values - label and url
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

<script>
  $('.dropdown__label, .dropdown__overlay').click(function() {
    $(this).parent('.dropdown').toggleClass('is-open')
  })
</script>
```
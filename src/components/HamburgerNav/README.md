# Hamburger navigation

### Usage

```
fronthack component HamburgerNav
```

#### JSX example:

```jsx
<HamburgerNav links={[
  {
    label: 'Home',
    url: 'home',
    icon: 'home',
  },
  {
    label: 'About',
    url: 'about',
  },
  {
    label: 'Contact',
    url: 'contact',
  },
]} />
```

##### Properties

* `links` - menu objects, where each must contain a title, url and optionally an icon type


#### Static HTML example:

```html
<div class="hamburger-nav">
  <div class="hamburger-nav__trigger">
    <div class="hamburger-nav__icon"></div>
  </div>
  <div class="hamburger-nav__overlay"></div>
  <div class="hamburger-nav__wrapper">
    <nav class="hamburger-nav__menu">
      <a href="#" class="hamburger-nav__link">
        <i class="hamburger-nav__link-icon icon icon--home"></i> Home
      </a>
      <a href="#" class="hamburger-nav__link">About</a>
      <a href="#" class="hamburger-nav__link">Contact</a>
    </nav>
  </div>
</div>

<!-- This component requires additional JavaScript: -->
<script>
  // Hamburger Nav
  document.addEventListener('click', event => {
    if (['hamburger-nav__trigger', 'hamburger-nav__overlay'].includes(event.target.className)) {
      event.target.parentElement.classList.toggle('is-visible')
    }
    if (event.target.className === 'hamburger-nav__link') {
      event.target.parentElement.parentElement.parentElement.classList.remove('is-visible')
    }
  })
</script>
```
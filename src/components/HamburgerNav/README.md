# Hamburger navigation

### Usage

`fronthack component`, then `hamburger-nav`

#### JSX example:

```js
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
  <div class="hamburger-nav__icon">
    <i class="icon icon--menu"></i>
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

<script>
  $('.hamburger-nav__icon, .hamburger-nav__overlay').click(function() {
    $(this).parent('.hamburger-nav').toggleClass('is-visible')
  })
</script>
```
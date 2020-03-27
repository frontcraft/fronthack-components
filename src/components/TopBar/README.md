# Top Bar

### Usage

```
fronthack component TopBar
```

#### JSX example:

```jsx
<TopBar links={[
  { label: 'Projects', url: '/projects' },
  { label: 'About us', url: '/about' },
  { label: 'Contact', url: '/contact' },
]}>
```

##### Properties

* `links` - objects, where each contains two sting values - label and url


#### Static HTML example:

```html
<header class="top-bar">
  <div class="top-bar__spacer">
    <div class="top-bar__bar">
      <div class="top-bar__container">
        <div class="top-bar__logo">
          <a href="/">
            <img
              src="http://placehold.it/120x40px"
              srcSet="http://placehold.it/240x80px 2x"
              class="logo"
              alt="Logo"
            />
          </a>
        </div>
        <nav class="nav-horizontal hidden-xs">
          <a class="nav-horizontal__link" href="#">Home</a>
          <a class="nav-horizontal__link" href="#">Offer</a>
          <a class="nav-horizontal__link" href="#">About</a>
        </nav>
        <div class="top-bar__hamburger visible-xs-block">
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
        </div>
      </div>
    </div>
  </div>
</header>
```

# Subway navigation

### Usage

```
fronthack component NavSubway
```

#### JSX example:

```jsx
<NavSubway links={[
  {
    label: 'Home',
    url: 'home',
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

* `links` - objects, where each contains two sting values - label and url


#### Static HTML example:

```html
<nav class="nav-subway">
  <div class="nav-subway__item">
    <div class="nav-subway__station"></div>
    <a href="#" class="nav-subway__divnk">Latest partnering opportunities</a>
  </div>
  <div class="nav-subway__item">
    <div class="nav-subway__station"></div>
    <a href="#" class="nav-subway__divnk">Going international</a>
  </div>
  <div class="nav-subway__item">
    <div class="nav-subway__station"></div>
    <a href="#" class="nav-subway__divnk">Calls</a>
  </div>
  <div class="nav-subway__item">
    <div class="nav-subway__station"></div>
    <a href="#" class="nav-subway__divnk">Events</a>
  </div>
</nav>
```
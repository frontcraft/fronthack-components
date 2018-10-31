# Accordion

### Usage

`fronthack component`, then `nav-vertical`

#### JSX example:

```js
<NavVertical
  links={[
    {
      label: 'Home',
      url: '/home',
    },
    {
      label: 'Blog',
      url: '/blog',
    },
    {
      label: 'About',
      url: '/about',
    },
  ]}
/>
```

##### Properties

* `links` - objects, where each contains two sting values - label and url


#### Static HTML example:

```html
<nav class="nav-vertical">
  <a href="#" class="nav-vertical__link">Home</a>
  <a href="#" class="nav-vertical__link">Blog</a>
  <a href="#" class="nav-vertical__link">About</a>
</nav>
```
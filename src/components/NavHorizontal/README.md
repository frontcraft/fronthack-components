# Accordion

### Usage

`fronthack component`, then `nav-horizontal`

#### JSX example:

```js
<NavHorizontal
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
<nav class="nav-horizontal">
  <a class="nav-horizontal__link" href="#">Home</a>
  <a class="nav-horizontal__link" href="#">Offer</a>
  <a class="nav-horizontal__link" href="#">About</a>
</nav>
```
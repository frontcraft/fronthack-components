# Parallax

To display whole page properly, all layout elements, including header and footer,
should be placed at least inside the .parallax div. You can even use it as a
body class. Inspired by http://keithclark.co.uk/articles/pure-css-parallax-websites


### Usage

`fronthack component`, then `parallax`

#### JSX example:

```js
<Parallax>
  <ParallaxGroup className="parallax__demo-solid">
    <div class="parallax_demo-title">Solid base layer</div>
  </ParallaxGroup>
  <ParallaxGroup backLayer={
    <Fragment>
      <img class="full-width" src="https://placeimg.com/640/480/nature" alt="" />
      <div class="parallax_demo-title">Back layer</div>
    </Fragment>
  }>
    <div class="parallax_demo-title">Transparent base layer</div>
  </ParallaxGroup>
  <ParallaxGroup className="parallax__demo-solid">
    <div class="parallax_demo-title">Solid base layer</div>
  </ParallaxGroup>
  <ParallaxGroup className="parallax__demo-solid">
    <div class="parallax_demo-title">Solid base layer</div>
  </ParallaxGroup>
</Parallax>
```

##### Properties

* `debug` - debugging mode shows layers in perspective


#### Static HTML example:

```html
<div class="parallax parallax--debug">
  <div class="parallax__group">
    <div class="parallax__baselayer parallax__demo-solid">
      <div class="parallax_demo-title">Solid base layer</div>
    </div>
  </div>
  <div class="parallax__group parallax__group--with-backlayer">
    <div class="parallax__baselayer">
      <div class="parallax_demo-title">Transparent base layer</div>
    </div>
    <div class="parallax__backlayer">
      <img class="full-width" src="https://placeimg.com/640/480/nature" />
      <div class="parallax_demo-title">Back layer</div>
    </div>
  </div>
  <div class="parallax__group">
    <div class="parallax__baselayer parallax__demo-solid">
      <div class="parallax_demo-title">Solid base layer</div>
    </div>
  </div>
  <div class="parallax__group">
    <div class="parallax__baselayer parallax__demo-solid">
      <div class="parallax_demo-title">Solid base layer</div>
    </div>
  </div>
</div>
```
import React from 'react'

export default () => <div>
  <p>Before you start coding, learn about some rules, which empowers the conception of Fronthack. These rules are general and framework agnostic. Fronthack gathers them together.</p>
  <h2>Sass</h2>
  <p>Maybe not rule at all, Sass is the most minimalistic way of writing CSS. It is a preprocessor, syntax, which is compiled later to real CSS. Preprocessors supplies you with variables, mixins and more stuff, that brings writing of stylesheets closer to programming.</p>
  <h2>BEM & SMACSS</h2>
  <p>Fronthack lays on <em>BEM</em> - an approach in writing CSS code, which is about keeping specific naming convention. Make sure that BEM is understandable to you, before continue.</p>
  <p>Fronthack is also inspired by SMACSS approach (shorthand of Simple, Modular Architecture for CSS). It is mainly about separating the interface into small components - a small blocks, that are like a <em>LEGO</em> bricks. In addition, these bricks are divided into three groups: plain HTML tags, components itself and layout components. You will find exactly this apportionment in Sass directory.</p>
  <h2>4 types of classes and no more</h2>
  <p>As a result of above, any CSS class bellongs to one of the following collections:</p>
  <ul>
    <li><strong>Component classes</strong> - a name of the component, it's element or modifier. Examples: <code>.dropdown</code>, <code>.vertical-nav__link</code>, <code>.list-item--condensed</code>.</li>
    <li><strong>Layout classes</strong> - all elements that are more about being a section, which are too general to be a component. They usually contains styling of the layout, background, margins and paddings. All of these has <code>layout</code> prefix. Examples: <code>.layout-header</code>, <code>.layout-dark-section</code>, <code>.layout-footer</code>.</li>
    <li><strong>Helper classes</strong> - sometimes some elements requires so few styling, that creating a component would be an overkill. If you are not sure, where given properties should go, create a helper class. Examples: <code>.text-center</code>_, <em><code>.hidden-xs</code></em>, _<code>.clearfix</code>.</li>
    <li><strong>Containers</strong> - one of the helper classes is so important, that it deserves a special category and it is a <code>.container</code>. It's purpose is to give a page content maximal width, center it horizontally on wider resolutions and add side paddings on mobile resolutions. Sometimes there is a need to create additional containers of another widths. Examples: <code>.container-wide</code>, <code>.container-narrow</code>.</li>
  </ul>
  <h2>No for grid!</h2>
  <p>You may know HTML grid system from <em>Bootstrap</em>. It allows to build responsive layout with help of column classes (<code>.col-xs-12</code>, <code>.col.sm-6</code>, <code>.col-md-12</code>). Do not do that! Define layouts using <strong>layout classes</strong>. Role of HTML is keeping a structure of the document. Is the CSS responsibility to store a visual appearance. Secondly, since we have a <a href="https://medium.freecodecamp.org/an-animated-guide-to-flexbox-d280cf6afc35" rel="nofollow"><em>Flexbox</em></a> and a <a href="https://medium.com/@purplecones/playing-with-css-grid-layout-a75836098370" rel="nofollow"><em>CSS Grid</em></a>, defining a layout in CSS gives much bigger capabilities. Not to mention that web designers are rarely keeping the 12-column grid correctly. Below there is an example of a layout defined by Flexbox instead of HTML grid. Let's take an example of a standard page content with a sidebar of 300px width:</p>
  <p><strong>HTML</strong></p>
  <pre><code>
    {`<div class="layout-content">
  <div class="layout-content__sidebar"></div>
  <div class="layout-content__main"></div>
</div>`}
  </code></pre>
  <p><strong>Sass</strong></p>
  <pre><code>
    {`.layout-content
  display: flex

.layout-content__sidebar
  flex: 0 0 300px
  margin-right: 60px

.layout-content__main
  flex: 1`}
  </code></pre>
  <p>Flexbox is a very powerful ally and it is worth making friends with it.</p>
  <h2>Styling mobile first</h2>
  <p>So in a way, that that properties by default applies for phones, afterwards for tablets, desktops etc. Let's expand the example above with a responsiveness, which can be achieved by using a <code>+breakpoint</code> mixin, widely known from <em>Bootstrap</em>. By default, elements will appear one after another. On tablets, sidebar will jump to a side and on desktop devices it will gain bigger margins:</p>
  <p><strong>Sass</strong></p>
  <pre><code>
    {`.layout-content
  +breakpoint(tablet)
    display: flex

.layout-content__sidebar
  +breakpoint(tablet)
    flex: 0 0 200px
    margin-right: 30px
  +breakpoint(desktop)
    flex: 0 0 300px
    margin-right: 60px

.layout-content__main
  +breakpoint(tablet)
    flex: 1`}
  </code></pre>
</div>

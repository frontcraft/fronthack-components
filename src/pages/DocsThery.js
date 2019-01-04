import React from 'react'

export default () => <div>
  <p>Before you start coding, learn about some rules, which empowers the conception of Fronthack. These rules are general and framework agnostic. Fronthack puts all of them together.</p>

  <h2>Sass</h2>
  <p>Maybe not rule at all, Sass is the most minimalistic way of writing a CSS syntax. It is a preprocessor, which is being compiled to real CSS. Sass provides you a variables, mixins and other features, that brings stylesheets closer to programming.</p>

  <h2>BEM & SMACSS</h2>
  <p>Fronthack relays on <em>BEM</em> - a specific naming convention of writing CSS code which you should be familiar with.</p>
  <p>Fronthack is also inspired by SMACSS approach (which is a shorthand of <em>Simple, Modular Architecture for CSS</em>). It introduced the rule of independend UI blocks, before React components became a wide known standard. In addition, it divides these blocks into three groups: <strong>plain HTML tags</strong>, <strong>components</strong> itself and components of <strong>layout</strong> type. You will find exact apportionment in a Fronthack Sass structure.</p>

  <h2>No more than 4 types of classes</h2>
  <p>As a consequence of above, all CSS classes should belong to one of the following collections:</p>
  <ul>
    <li><strong>Component classes</strong> - a name of the component, it's element or modifier.<br />
    Examples: <code>.dropdown</code>, <code>.vertical-nav__link</code>, <code>.list-item--condensed</code>.</li>
    <li><strong>Layout classes</strong> - all elements that are too general to be a component. They usually contains styling of the layout, background, margins and paddings. All of these has <code>layout</code> prefix.<br />
    Examples: <code>.layout-header</code>, <code>.layout-dark-section</code>, <code>.layout-footer</code>.</li>
    <li><strong>Helper classes</strong> - sometimes some elements requires so less styling, that creating a component would be an overkill. If you are not sure, where given properties should go, create a helper class.<br />
    Examples: <code>.text-center</code>_, <em><code>.hidden-xs</code></em>, _<code>.clearfix</code>.</li>
    <li><strong>Containers</strong> - one of the helper classes is so important, that it deserves a special category and it is a <code>.container</code>. It's purpose is to give a page content maximal width, center it horizontally on wider resolutions and add side paddings on mobile resolutions. There is also contianer mixin avaliable. Sometimes there is a need to create additional containers of another widths or you may want to put them as an element of layout type  component.<br />
    Examples: <code>.container-wide</code>, <code>.container-narrow</code>.</li>
  </ul>
  <h2>No for HTML grid!</h2>
  <p>You may know a HTML grid system from <em>Bootstrap</em>. It allows to build responsive layout with help of column classes (<code>.col-xs-12</code>, <code>.col.sm-6</code>, <code>.col-md-12</code>). Do not do that! Define layouts using <strong>layout classes</strong>, <a href="https://medium.freecodecamp.org/an-animated-guide-to-flexbox-d280cf6afc35" rel="nofollow"><em>flexbox</em></a>/<a href="https://medium.com/@purplecones/playing-with-css-grid-layout-a75836098370" rel="nofollow"><em>CSS Grid</em></a> and breakpoint mixins. Role of HTML is to keep a structure of the document. Storing a visual appearance is a responsibility of CSS. Secondly, since we have a  and a , defining a layout in CSS gives much bigger capabilities. Not to mention that web designers are rarely keeping correctly the 12-column grid. Below there is an example of a layout defined by Flexbox instead of a HTML grid. Let's take an example of a standard page content with a sidebar of 300px width:</p>
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

  <h2>Styling mobile first</h2>
  <p>Means stling in a way, that that all properties are applied by default for phones, afterwards for tablets, then desktops etc. Let's expand the example above with a responsiveness, which can be achieved by using a <code>+breakpoint</code> mixin, widely known from <em>Bootstrap</em>. By default, elements will appear one after another. On tablets, sidebar will jump to a side and on desktop devices it will gain a bigger margins:</p>
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

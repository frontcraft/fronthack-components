import React from 'react'

export default () => <div>
  <p>If you have already analized designs and paired one with a page, it's time to proceed to the main part coding.</p>

  <p>Start from the top - usually it will be a navigation bar or other type of header. As you continue, create and style more components as you go down. Use <strong>DOM and design</strong> to make sure that your design implementation is pixel perfect and <strong>Design only</strong> mode as a reference point of blocks separation and naming. For each block, you need to create a dedicated sass file if it is static app, or a whole component directory, if it is a React app, where react coponent directosy consists of three files:</p>

  <ul>
    <li>JS file with a component code</li>
    <li>Sass file with a componen styling</li>
    <li>Index file that simplifies the importing</li>
  </ul>

  <h2>Creating new block:</h2>

  <p>To create new component, use a following command:</p>

  <pre><code>fronthack component</code></pre>

  <p>The command asks for the name. It there is a component of this name in a Fronthack repositories, it will fetch its code and you just need to customize it for your needs. If there is no Fronthack component of given name, it will create a new component's directory with an initial boilerplate, properly named.</p>

</div>

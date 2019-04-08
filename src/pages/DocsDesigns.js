import React from 'react'

export default () => <div>
  <p>Before writing any code, it is worth to do a detailed analysis of graphic designs. The fronend developer's task here is to break down the designs into small, reusable blocks. Looking through all the pages will provide the knowledge of how you should make this division to keep app has as little code as it is possible. Modular approach is the key to a good frontend and each module should get its own unique descriptive name.</p>

  <h2>Pairing design with html file</h2>

  <p>Fronthack provides a simple yet powerful tool to facilitate this process of dividing and naming interface elements and makes possible the graphic to be placed under code, allowing to create pixel-perfect implementations of visual design.</p>

  <p>Let's assume that we want to code a project's homepage, the <code>index.html</code> file.</p>

  <ol>
    <li>First of all, you need to make sure that your design is exported to png or jpg format. Put this file into <code>designs</code> directory.</li>
    <li>Now, while being in a project, use <code>fronthack design</code> command. Select the appropriate subpage file from a list (in this case it will be index.html) and as next, select the uploaded graphic file. You will see that it adds a line to <code>connect-designs.css</code> file.</li>
  </ol>

  <p>After using the above command and running the local developer server (<code>yarn start</code> or <code>yarn dev</code>), you will be able to switch views by the button in the lower right corner of a browser. There are three view modes:</p>

  <ul>
    <li><strong>DOM only</strong> - a standard web page view.</li>
    <li><strong>DOM and design</strong> - all DOM elements becomes semitransparent, so you can see the design put underneath.</li>
    <li><strong>Design only</strong> - a preview of pure design file</li>
  </ul>

  <h2>Visual block separation tool</h2>
  <p>While other modes are just about display, The <em>Design only</em> mode, has additional feature. A drawing tool to create blocks with a mouse and give them a specific name. In this way you can create a visual documentation of UI to know exactly how to divide it into a reusable components. To save the created canvas, click the "Save canvas" button that appears in the bottom right corner of the screen. It will generate a file download and will let you know where to put it. This process will probably be automated in future versions of Fronthack.</p>

  <h2> What is worth paying special attention to?</h2>

  <p>When separating new blocks, the following should be taken into account:</p>

  <h3>Modifiers</h3>

  <p>Think about whether a block can be a modifier of another block. A modification can overwrite defaults: introduce additional styling, add or remove some elements.</p>

  <h3>Naming convention</h3>

  <p>It happens that the names of invented components are later acquired by the development team and used later in the database naming and documentation. It's great to stick to the same naming convention on all abstraction layers of the app. Let such a blog post have the name "blog post" everywhere, not "article", "post", "news" etc. Such unification makes communication much easier, and its lack is then very noticeable on later stages of the project.</p>

  <h3>Fronthack components</h3>

  <p>One of the key elements of Fronthack that determined its creation is a repository of ready-made starter components. In order to not reinvent the wheel and get use of it, it's worth to look through all of them in the <strong>Components</strong> chapter of this docs.</p>
</div>

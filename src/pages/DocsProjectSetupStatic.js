import React from 'react'

export default () => <div>
  <h2>Static HTML + jQuery project setup</h2>

  <p>To create new Static HTML project on Fronthack, use a following command:</p>

  <pre><code>fronthack init</code></pre>

  <p>Then select option <code>1</code>.</p>

  <p>Prompt will ask you for a directory name of the project, then arrange a new file structure there and download all dependencies. Newly created project will be almost empty, but it will contain all boilerplate that is required to start the development process. You will find there only index.html page and one example Logo component, which is used on almost every project.</p>

  <p>After you navigate to newly created project, you can run there a script that with help of Gulp starts a localhost server on port 8000:</p>

  <pre><code>yarn start</code></pre>

  <p>It watch for file changes, compiles the Sass and Mustache files to plain CSS and HTML on the go and does more interesting stuff, which will be mentioned later.</p>

  <h2>First change</h2>

  <p>Now, open the project in your favorite code editor, then go to <code>src/sass/variables.sass</code>. Change the color of <code>$brand-primary</code> variable to any different, red for example. Save the file and take a look at a browser. Vuala! New color is already there. Now open the src/index.html file. Remove something there. Go to the browser. It disappeared? Great, it means that Fronthack works correctly. You will perform more operations like this soon.</p>
</div>

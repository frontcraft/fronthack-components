import React from 'react'

export default () => <div>
  <h2>Next.js project setup</h2>

  <p>To create new Next.js project on Fronthack, use a following command:</p>

  <pre><code>fronthack init</code></pre>

  <p>Then select option <code>3</code>.</p>

  <p>Prompt will ask you for a directory name of the project, then arrange a new file structure there and download all dependencies. You will find there only a basic file structure, without any components. Clean space for a good start.</p>

  <p>After you navigate to newly created project, you can run there a script, that with help of Webpack will start a localhost server on port 3000:</p>

  <pre><code>yarn dev</code></pre>

  <h2>First change</h2>

  <p>Now, open the project in your favorite code editor, then go to <code>src/sass/variables.sass</code>. Change the color of <code>$brand-primary</code> variable to any different, red for example. Save the file and take a look at a browser. Vuala! New color is already there. You should see also a small box in bottom right corner of the screen. Great, it means that Fronthack works correctly. You will perform more operations like this soon.</p>
</div>

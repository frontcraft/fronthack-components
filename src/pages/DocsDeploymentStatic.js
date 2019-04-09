import React from 'react'

export default () => <div>
  <p>So far, we have been working on Fronthack only in the development mode. Once the work is finished, it can be published on GitHub Pages. That is the quickest way to publish a site.</p>

  <h2>Execution of a production build</h2>

  <p>The production version differs from the development mode by the fact that all javascript and css code is minified. In addition, production build automatically compresses all graphics files in the images directory, so that both their size and quality loss are as small as possible. All this happens thanks to build-in <strong>gulpfile</strong> configuration. This makes debugging difficult, but reduces the final size of the bundle. The following command is used to execute the production build.</p>

  <pre><code>yarn build</code></pre>

  <p>The content of the generated <code>dist</code> directory is completely independent. It contains all the files necessary for proper display.</p>

  <h2>Deployment to GitHub Pages</h2>

  <p>If you host a project repository on GitHub, you have GitHub Pages at your disposal - free hosting for your code. To launch your project on GitHub Pages, run the following command:</p>

  <pre><code>yarn deploy</code></pre>

  <p>The deploy command collects the content of <code>dist</code> directory and creates a new branch called <code>gh-pages</code> that is being pushed to GitHuba. After such an operation our build will be visible at <code>https://username.github.io/reponame</code>.</p>

  <h2>Summary</h2>

  <p>To publish the recent state of development, the following chain must be executed:</p>

  <pre><code>yarn buld && yarn deploy</code></pre>
</div>

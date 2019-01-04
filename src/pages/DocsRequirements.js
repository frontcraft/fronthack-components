import React from 'react'

export default () => <div>
  <p>Fronthack is a commandline tool that must be instaled globally to your system. As all other modern Frontend tools, it relays on Node.</p>

  <h2>Install Node</h2>
  <p>If you are a beginner, you might not have Node installed. Recommended way of doing that is to use the NVM package (Node Version Manager).</p>

  <p>You can find the instructions of how to install NVM <a href='https://github.com/creationix/nvm#install-script'>here</a>. Node Version Manager is also available in homebrew repositories.</p>

  <p>Verify NVM installation. Check if following command returns the version.</p>
  <pre><code>command -v nvm</code></pre>

  <p>Then install and use the recent version of Node:</p>

  <pre><code>{`nvm install node
nvm use node`}</code></pre>

  <p>Verify Node and Npm installation</p>

  <pre><code>{`node -v
npm -v`}</code></pre>

  <h2>Install Fronthack CLI</h2>

  <p>Install Fronthack CLI globally using Yarn or NPM</p>
  <pre><code>yarn global add fronthack</code></pre>

  <p>After successful installation you should be able to run a following command without any errors:</p>

  <pre><code>fronthack help</code></pre>

  <p>Now your local machine is ready to work with Fronthack. It is a time to create new project.</p>
</div>

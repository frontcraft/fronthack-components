import React from 'react'

export default () => <div>
  <h2>Contribution and development</h2>
  <p>Any help on improving the project is very welcome!</p>
  <h3>How develop the codebase of Fronthack</h3>
  <p>To run a local development copy of a Fronthack tool and make possible edit its codebase, perform following steps:</p>
  <ol>
    <li>Uninstall the production package from your system:<pre>yarn global remove fronthack</pre></li>
    <li>Fork the <a href='https://github.com/frontcraft/fronthack' target='_blank'>fronthack repository</a> and clone it to your computer.</li>
    <li>Navigate to the cloned repo and download all dependencies:<pre>cd fronthack && yarn install</pre></li>
    <li>Build the project and install the local codebase globally with npm:<pre>yarn build && npm install -g .</pre><br />You need to repeat the step 4 on each change in a codebase.</li>
  </ol>
  <h3>Contribution</h3>
  <p>To contribute, please create pull requests from your fork, targeted to <strong>master</strong> branch of <strong>frontcraft/fronthack</strong> repository.</p>
  <p>Also if you noticed a bug or have any idea for a new feature, feel free to submit a new issue <a href='https://github.com/frontcraft/fronthack/issues/new' target='_blank'>here</a>.</p>
</div>

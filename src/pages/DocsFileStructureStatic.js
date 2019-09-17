import React from 'react'

export default () => <div>
  <h2>Static HTML project structure</h2>

  <p>After you run <code>fronthack init</code> command and select <em>Static HTML project</em>, you will find a following file structure of the project.</p>

  <h2>src/</h2>

  <p>Input directory. Contains source files like Sass, HTML partials and development JavaScript. This is place where your should write your code.</p>

  <ul>
    <li><em><strong>designs</strong></em> - put designs here to display them behind the content of a page. More in <strong>Recognition of designs</strong> chapter.</li>
    <li><em><strong>images</strong></em> - put here graphics and images.</li>
    <li><em><strong>js</strong></em> - write here the javascript code.</li>
    <li><em><strong>partials</strong></em> - contains Mustache files called partials - a small reusable blocks of HTML, which are used on various subpages, like header or footer. They becomes rendered in adequate places by Mustache templating language.</li>
    <li>
      <em><strong>sass</strong></em> - the core styles written in BEM way. Sass files becomes compiled too output CSS and are divided into following subdirectories:
      <ul>
        <li><em><strong>base</strong></em> - styles of basic HTML tags, like typography, tables, links etc.</li>
        <li><em><strong>components</strong></em> - styles of all BEM components used on a project.</li>
      </ul>
    </li>
    <li><em><strong>index.html</strong></em> - initial HTML page. You can create more here.</li>
  </ul>

  <h2>dist/</h2>

  <p>Full self-sufficient output directory, ready to be hosted on a production server. It contains minified code ans assets. Images there are compressed by <pre>gulp-imagemin</pre> plugin.</p>

  <h2>.dev/</h2>

  <p>Output directory, which is mounted by devserver to http://localhost:8000 after running <pre>yarn start</pre> command. Unlike dist directory, code there contains development scripts and is not minified which makes it easier to debug.</p>

  <h2>./</h2>

  <p>Another elements in the root directory:</p>

  <ul>
    <li><em><strong>.fronthack</strong></em> - flags dir as a Fronthack project and contains metadata required for fronthack CLI to work.</li>
    <li><em><strong>.htmlhintrc</strong></em> - HTMLHint configuration file.</li>
    <li><em><strong>.sasslintrc</strong></em> - Sass Lint configuration file.</li>
    <li><em><strong>gulpfile.js</strong></em> - configuration file of the automation scripts.</li>
  </ul>
</div>

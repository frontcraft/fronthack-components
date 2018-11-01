import React from 'react'

export default () => <div>
  <h1>This is demo h1</h1>
  <h2>This is demo h2</h2>
  <h3>This is demo h3</h3>
  <h4>This is demo h4</h4>

  <p>This is first demo paragraph <a href="#">with a link</a>. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>This is second demo paragraph. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

  <ul>
    <li>
      First unordered list item
      <ul>
        <li>First unordered nested list item</li>
        <li>Second unordered nested list item</li>
        <li>Third unordered nested list item</li>
      </ul>
    </li>
    <li>Second unordered list item</li>
    <li>Third unordered list item</li>
  </ul>

  <ol>
    <li>
      First ordered list item
      <ol>
        <li>First ordered nested list item</li>
        <li>Second ordered nested list item</li>
        <li>Third ordered nested list item</li>
      </ol>
    </li>
    <li>Second ordered list item</li>
    <li>Third ordered list item</li>
  </ol>

  <dl>
    <dt>Descriptive item title</dt>
    <dd>First descriptive list item descritpion. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</dd>
    <dt>Descriptive item title</dt>
    <dd>Second descriptive list item descritpion. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
    <dt>Descriptive item title</dt>
    <dd>Third descriptive list item descritpion. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</dd>
  </dl>

  <blockquote>
    <p>This is demo blockquote. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis semper est. Nam eget tempor enim, id vehicula dui.</p>
  </blockquote>

  <pre>
    Text in a pre element
    is displayed in a fixed-width
    font, and it preserves
    both      spaces and
    line breaks
  </pre>

  <div class="table-responsive">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Column heading</th>
          <th>Column heading</th>
          <th>Column heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr >
          <th scope="row">7</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr>
          <th scope="row">8</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
        <tr>
          <th scope="row">9</th>
          <td>Column content</td>
          <td>Column content</td>
          <td>Column content</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
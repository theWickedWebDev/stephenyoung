# List
##### This is used to render a simple <em>unordered list</em> element.
<br/>
```
import { List } from '@thewickedwebdev/components';
```

<br/>

### How to use
This should only be used to render a list with content related in a single
context.

### API

<pre><code>(ListType) => React.Node</code></pre>

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Required</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>items</td>
      <td>Yes</td>
      <td>The array for the list</td>
      <td>any[]</td>
      <td>-</td>
    </tr>
    <tr>
      <td>renderer</td>
      <td>Yes</td>
      <td>This function will be called for each item in <code>items</code> to render the content</td>
      <td>item => ReactNode</td>
      <td>-</td>
    </tr>
    <tr>
      <td>inline</td>
      <td>-</td>
      <td>Displays the list horizontally</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>className</td>
      <td>-</td>
      <td>Adds to the parent</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>itemClassName</td>
      <td>-</td>
      <td>Adds to each item element</td>
      <td>string</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

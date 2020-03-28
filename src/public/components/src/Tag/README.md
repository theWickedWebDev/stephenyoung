# Tag
##### This is used to render a simple list element.
<br/>

```
import { Tag } from '@thewickedwebdev/components';
```

<br/>
### How to use
This can be used on its own, or coupled with other components found here such as  `<List><Tag/></List>`

### API

<pre><code>(TagType) => React.Node</code></pre>

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
      <td>children</td>
      <td></td>
      <td>The content rendered inside of the tag</td>
      <td>any</td>
      <td>-</td>
    </tr>
    <tr>
      <td>icon</td>
      <td></td>
      <td>Will display an <code>FontAwesomeIcon</code> to the left of the content</td>
      <td>string
        <a href="https://fontawesome.com/icons" target="_blank">
          (FontAwesome Icon)
        </a>
      </td>
      <td>-</td>
    </tr>
    <tr>
      <td>small</td>
      <td></td>
      <td>Smaller sized tag</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>className</td>
      <td></td>
      <td>Classname to add to the component</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>style</td>
      <td></td>
      <td>Custom styling</td>
      <td>Object</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

# Article
##### This is used to render a layout element
<br/>

```
import { Article } from '@thewickedwebdev/components';
```

<br/>
### How to use
The intended purpose of this component was to be nested inside of `<Section/>`
which would then also be nested inside of `<Page/>`. Doing it this way will
provide consistent styling.

### API

<pre><code>(ArticleType) => ?any</code></pre>

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
      <td>title</td>
      <td></td>
      <td>Adds a title to the <code>Article</code></td>
      <td>string || ReactNode</td>
      <td>-</td>
    </tr>
    <tr>
      <td>children</td>
      <td></td>
      <td>The content rendered inside of this copmonent</td>
      <td>?any</td>
      <td>-</td>
    </tr>
    <tr>
      <td>className</td>
      <td></td>
      <td>Classname to add to the component</td>
      <td>string</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

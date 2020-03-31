# Section
##### This is used to render a layout element
<br/>

```
import { Section } from '@thewickedwebdev/components';
```

<br/>
### How to use
The intended purpose of this component was to be nested inside of `<Page/>`
using it this way will provide consistent styling. A "section" is composed of
many `<Article/>`s.

### API

<pre><code>(SectionType) => ?any</code></pre>

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
      <td>The content rendered inside of this component</td>
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
